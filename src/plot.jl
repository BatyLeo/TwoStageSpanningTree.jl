function plot_forest(forest, instance::TwoStageSpanningTreeInstance; n=n, m=m)
	(; graph, first_stage_costs, second_stage_costs) = instance
	cost = Int.(min.(first_stage_costs, second_stage_costs[:, 1]))
	function compute_layout(g)
		[(i, j) for j in 1:m for i in 1:n]
	end

	f, ax, p = graphplot(
		graph;
		layout=compute_layout,
		ilabels=fill(" ", nv(graph)),
		elabels=repr.(floor.(cost)),
		edge_color=[e ? :red : :black for e in forest],
		edge_width=[e ? 3 : 0.5 for e in forest],
	)
	p.elabels_rotation[] = Dict(i => 0.0 for i in 1:ne(graph))
	p.elabels_offset[] = [Point2f(-0.02, 0.0) for i in 1:ne(graph)]

	hidedecorations!(ax); hidespines!(ax)
	ax.aspect = DataAspect()
	autolimits!(ax)
	return f
end

function plot_scenario(solution::TwoStageSpanningTreeSolution, instance::TwoStageSpanningTreeInstance, current_scenario; grid=true, n, m)
	forest1 = solution.y
    forest2 = solution.z
    graph = instance.graph
	cost = Int.(instance.first_stage_costs)
	cost2 = Int.(@view instance.second_stage_costs[:, current_scenario])

	function compute_layout(g)
		[(i, j) for j in 1:m for i in 1:n]
	end

	tree = forest1 .|| @view forest2[:, current_scenario]
	colors = fill(:black, ne(graph))
	width = fill(0.5, ne(graph))
	colors[forest1] .= :red
	colors[@view forest2[:, current_scenario]] .= :green
	width[tree] .= 3
	labels = copy(cost)
	labels[.!forest1] .= cost2[.!forest1]
	
	f, ax, p = graphplot(
		graph;
		layout=grid ? compute_layout : Shell(),
		ilabels=fill(" ", nv(graph)),
		elabels=repr.(labels),
		edge_color=colors,
		edge_width=width,
	)
	p.elabels_rotation[] = Dict(i => 0.0 for i in 1:ne(graph))
	p.elabels_offset[] = [Point2f(-0.02, 0.0) for i in 1:ne(graph)]

	hidedecorations!(ax); hidespines!(ax)
	ax.aspect = DataAspect()
	autolimits!(ax)
	return f
end
