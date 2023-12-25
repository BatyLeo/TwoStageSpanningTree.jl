struct TwoStageSpanningTreeSolution
    y::BitVector
    z::BitMatrix
end

function solution_value(solution::TwoStageSpanningTreeSolution, instance::TwoStageSpanningTreeInstance)
    return dot(solution.y, instance.first_stage_costs) + dot(solution.z, instance.second_stage_costs) / nb_scenarios(instance)
end

function is_feasible(solution::TwoStageSpanningTreeSolution, instance::TwoStageSpanningTreeInstance)
    (; y, z) = solution
    (; graph) = instance

    # Check that no edge was selected in both stages
    if any(y .+ z .> 1)
        return false
    end

    # Check that each scenario is a spanning tree
    scenario_trees = y .|| z

    S = nb_scenarios(instance)
    for s in 1:S
        if !is_spanning_tree(y .|| z[:, s], graph)
            return false
        end
    end

    return true
end
