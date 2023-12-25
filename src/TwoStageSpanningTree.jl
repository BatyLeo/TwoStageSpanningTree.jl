module TwoStageSpanningTree

using DataStructures
using DocStringExtensions
using GLPK
using Graphs
using JuMP
using LinearAlgebra: dot
using Random

include("utils.jl")
include("instance.jl")
include("solution.jl")

include("algorithms/anticipative.jl")
include("algorithms/cut_generation.jl")

export kruskal
export TwoStageSpanningTreeInstance, nb_scenarios
export TwoStageSpanningTreeSolution, anticipative_solution, solution_value, is_feasible

export cut_generation, cut_separation_problem, MILP_separation_problem

end
