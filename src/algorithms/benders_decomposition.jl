function separate_benders_cut(instance, y, s; MILP_solver, tol=1e-5)
	(; graph, first_stage_costs, second_stage_costs) = instance

	E = ne(graph)

	columns = BitVector[]

	# Feasibility cut
	model = Model(MILP_solver)

	@variable(model, dummy, Bin)

	@variable(model, νₛ <= 1)
	@variable(model, 0 <= μₛ[e in 1:E] <= 1)

	@objective(model, Max, νₛ + sum(y[e] * μₛ[e] for e in 1:E))

	function feasibility_callback(cb_data)
		μ_val = callback_value.(cb_data, μₛ)
		ν_val = callback_value(cb_data, νₛ)

		weights = -μ_val
		val, tree = kruskal(graph, weights)

		push!(columns, tree)
		
		#@info "hey" val ν_val μ_val ν_val + sum(y[e] * μ_val[e] for e in 1:E)
		if val + tol < ν_val
			new_constraint = @build_constraint(
				- sum(μₛ[e] for e in 1:E if tree[e]) - νₛ >= 0
			)
			MOI.submit(
				model, MOI.LazyConstraint(cb_data), new_constraint
			)
			# @info "" new_constraint
		end
	end

	set_attribute(model, MOI.LazyConstraintCallback(), feasibility_callback)
	optimize!(model)

	if objective_value(model) > tol
		return false, value.(νₛ), value.(μₛ), objective_value(model)
	end
	
	# Else, optimality cut
	optimality_model = Model(MILP_solver)

	@variable(optimality_model, dummy, Bin)

	@variable(optimality_model, νₛ)
	@variable(optimality_model, μₛ[e in 1:E] >= 0)

	obj = @objective(
		optimality_model, Max,
		νₛ + sum(y[e] * μₛ[e] for e in 1:E) - sum(second_stage_costs[e, s] * y[e] for e in 1:E)
	)

	for tree in columns
		@constraint(
			optimality_model,
			sum(second_stage_costs[e, s] - μₛ[e] for e in 1:E if tree[e]) >= νₛ
		)
	end

	function my_callback_function(cb_data)
		μ_val = callback_value.(cb_data, μₛ)
		ν_val = callback_value(cb_data, νₛ)

		weights = second_stage_costs[:, s] .- μ_val

		val, tree = kruskal(graph, weights)

		if val - ν_val + tol < 0
			new_constraint = @build_constraint(
				sum(second_stage_costs[e, s] - μₛ[e] for e in 1:E if tree[e]) >= νₛ
			)
			MOI.submit(
				optimality_model, MOI.LazyConstraint(cb_data), new_constraint
			)
		end
	end

	set_attribute(optimality_model, MOI.LazyConstraintCallback(), my_callback_function)

	optimize!(optimality_model)

	# If primal feasible, add an optimality cut
	@assert termination_status(optimality_model) != DUAL_INFEASIBLE
	return true, value.(νₛ), value.(μₛ), objective_value(optimality_model)
end

function benders_decomposition(
    instance::Instance;
    MILP_solver=GLPK.Optimizer,
	tol = 1e-5
)
	(; graph, first_stage_costs, second_stage_costs) = instance
	E = ne(graph)
	S = nb_scenarios(instance)
	
    model = Model(MILP_solver)
    @variable(model, y[e in 1:E], Bin)
    @variable(
        model,
        θ[s in 1:S] >= sum(min(0, second_stage_costs[e, s]) for e in 1:E)
    )
    @objective(
        model,
        Min,
        sum(first_stage_costs[e] * y[e] for e in 1:E) + sum(θ[s] for s in 1:S) / S
    )

    call_back_counter = 0
	upper_bound = Inf

	for _ in 1:100
        call_back_counter += 1

		if call_back_counter % 10 == 0
            @info("Benders iteration: $(call_back_counter)")
        end

		optimize!(model)

		lower_bound = objective_value(model)

		θ_val = value.(θ)
		y_val = value.(y)

		upper_bound_candidate = sum(y_val[e] * first_stage_costs[e] for e in 1:E)

		found = false
		for s in 1:S
            optimality_cut, ν_val, μ_val, sub_value =
				separate_benders_cut(instance, y_val, s; MILP_solver)

			# If feasibility cut
            if !optimality_cut
                @constraint(model,
                    ν_val + sum(μ_val[e] * y[e] for e in 1:E) <= 0
                )
				continue
            end

			# Else, optimality cut
			upper_bound_candidate += sub_value / S

			if θ_val[s] + tol < ν_val + sum(μ_val[e] * y_val[e] for e in 1:E) -
				sum(second_stage_costs[e, s] * y_val[e] for e in 1:E)
				@constraint(model,
					θ[s] >=
						ν_val + sum(μ_val[e] * y[e] for e in 1:E) - sum(second_stage_costs[e, s] * y[e] for e in 1:E)
				)
				found = true
			end
        end

		upper_bound = min(upper_bound, upper_bound_candidate)

		if upper_bound - lower_bound <= tol
			break
		end
	end

	optimize!(model)
    return objective_value(model), value.(y) .> 0.5, value.(θ)
end
