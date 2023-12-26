using TwoStageSpanningTree
using Test

@testset "TwoStageSpanningTree.jl" begin
    tol = 1e-6
    for S in 1:10
        instance = TwoStageSpanningTreeInstance(; n=4, m=4, nb_scenarios=S, seed=S)
        cut_solution = cut_generation(instance; separation_problem=MILP_separation_problem, verbose=false)
        cut_solution2 = cut_generation(instance; separation_problem=cut_separation_problem, verbose=false)
        col_solution = column_heuristic(instance; verbose=false)
        benders_solution = benders_decomposition(instance; verbose=false)
        (; lb, ub, solution) = lagrangian_relaxation(instance; nb_epochs=25000)

        @test is_feasible(cut_solution, instance)
        @test is_feasible(cut_solution2, instance)
        @test is_feasible(col_solution, instance)
        @test is_feasible(benders_solution, instance)
        @test is_feasible(solution, instance)
        @test solution_value(cut_solution, instance) ≈ solution_value(cut_solution2, instance)
        @test solution_value(cut_solution, instance) ≈ solution_value(benders_solution, instance)
        @test solution_value(col_solution, instance) + tol >= solution_value(cut_solution, instance)
        @test solution_value(solution, instance) + tol >= solution_value(cut_solution, instance)
        @test lb <= ub

        if S == 1
            # compare with kruskal
            (; value, y, z) = anticipative_solution(instance, 1)
            @test value ≈ solution_value(cut_solution, instance)
        end
    end
end
