module TwoStageSpanningTree

using CairoMakie
using DataStructures
using DocStringExtensions
using Flux
using GLPK
using Graphs
using GraphMakie
using GraphMakie.NetworkLayout
using JuMP
using LinearAlgebra: dot
using Random

include("utils.jl")
include("instance.jl")
include("solution.jl")

include("algorithms/anticipative.jl")
include("algorithms/cut_generation.jl")
include("algorithms/column_generation.jl")
include("algorithms/benders_decomposition.jl")
include("algorithms/lagrangian_relaxation.jl")

include("plot.jl")

export kruskal
export TwoStageSpanningTreeInstance, nb_scenarios
export TwoStageSpanningTreeSolution, anticipative_solution, solution_value, is_feasible, solution_from_first_stage_forest

export cut_generation, cut_separation_problem, MILP_separation_problem
export column_generation, column_heuristic
export benders_decomposition, benders_decomposition_2
export lagrangian_relaxation

export plot_forest, plot_scenario

end
