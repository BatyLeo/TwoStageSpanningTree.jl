# # Algorithms
using TwoStageSpanningTree
instance = TwoStageSpanningTreeInstance(; n=4, m=4, nb_scenarios=10, seed=0);

# ## Cut generation algorithm

# ### MIP separation problem
mip_solution = cut_generation(instance; separation_problem=MILP_separation_problem)
is_feasible(mip_solution, instance)
# 
solution_value(mip_solution, instance)
# 
plot_scenario(mip_solution, instance, 1; n=4, m=4)

# ### Cut separation problem
cut_solution = cut_generation(instance; separation_problem=cut_separation_problem)
is_feasible(cut_solution, instance)
# 
solution_value(cut_solution, instance)
# 
plot_scenario(mip_solution, instance, 1; n=4, m=4)

# ## Column generation
column_solution = column_generation(instance)

# ## Benders decomposition
benders_solution = benders_decomposition(instance)

# ## Lagrangian relaxation
(; solution, ub_history, lb_history) = lagrangian_relaxation(instance)
