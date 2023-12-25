using TwoStageSpanningTree
using Test

@testset "TwoStageSpanningTree.jl" begin
    @testset "Cut generation" verbose = true begin
        for seed in 1:1
            for S in 1:10
                instance = TwoStageSpanningTreeInstance(; n=3, m=4, nb_scenarios=S, seed=seed)
                solution = cut_generation(instance; separation_problem=MILP_separation_problem, verbose=false)
                solution2 = cut_generation(instance; separation_problem=cut_separation_problem, verbose=false)
                @test is_feasible(solution, instance)
                @test is_feasible(solution2, instance)
                @test solution_value(solution, instance) ≈ solution_value(solution2, instance)

                if S == 1
                    # compare with kruskal
                    (; value, y, z) = anticipative_solution(instance, 1)
                    @test value ≈ solution_value(solution, instance)
                end
            end
        end
    end
end
