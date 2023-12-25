"""
$TYPEDEF

# Fields
$TYPEDFIELDS
"""
struct TwoStageSpanningTreeInstance{T}
    "Graph"
    graph::SimpleGraph{Int}
    "First stage costs for each edge"
    first_stage_costs::Vector{T}
    "Second stage costs for each edge and scenario [e, s]"
	second_stage_costs::Matrix{T}
end

function TwoStageSpanningTreeInstance(; n, m, nb_scenarios=1, c_range=1:20, d_range=1:20, seed=nothing)
	g = grid((n, m))
	rng = MersenneTwister(seed)
	c = [rand(rng, c_range) for _ in 1:ne(g)]
	d = [rand(rng, d_range) for _ in 1:ne(g), _ in 1:nb_scenarios]

	return TwoStageSpanningTreeInstance(g, c, d)
end

"""
$TYPEDSIGNATURES

Return the number of scenarios of `instance`.
"""
nb_scenarios(instance::TwoStageSpanningTreeInstance) = size(instance.second_stage_costs, 2)

# Returns the value of the solution of `inst` with `forest` as first stage solution.
# function evaluate_first_stage_solution(instance::TwoStageSpanningTreeInstance, forest::BitVector)
# 	(; graph, first_stage_costs, second_stage_costs) = instance
#     value = sum(first_stage_costs[forest])

# 	S = nb_scenarios(instance)
#     values = zeros(S)
# 	forests = falses(ne(graph), S)
#     Threads.@threads for s in 1:S
# 		weights = deepcopy(second_stage_costs[:, s])
#         m = minimum(weights) - 1
#         m = min(0, m - 1)
#         weights[forest] .= m  # set weights over forest as the minimum

# 		# find min spanning tree including forest
#         _, tree_s = kruskal(graph, weights)
# 		forest_s = tree_s .- forest
# 		forests[:, s] .= forest_s
# 		values[s] = dot(second_stage_costs[:, s], forest_s) / S
#     end

#     return value + sum(values), forests
# end;
