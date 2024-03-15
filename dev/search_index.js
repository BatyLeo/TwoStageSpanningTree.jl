var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/","page":"API","title":"API","text":"Modules = [TwoStageSpanningTree]","category":"page"},{"location":"api/#TwoStageSpanningTree.TwoStageSpanningTreeInstance","page":"API","title":"TwoStageSpanningTree.TwoStageSpanningTreeInstance","text":"struct TwoStageSpanningTreeInstance{T}\n\nFields\n\ngraph::Graphs.SimpleGraphs.SimpleGraph{Int64}: Graph\nfirst_stage_costs::Vector: First stage costs for each edge\nsecond_stage_costs::Matrix: Second stage costs for each edge and scenario [e, s]\n\n\n\n\n\n","category":"type"},{"location":"api/#TwoStageSpanningTree.TwoStageSpanningTreeSolution","page":"API","title":"TwoStageSpanningTree.TwoStageSpanningTreeSolution","text":"struct TwoStageSpanningTreeSolution\n\nFields\n\ny::BitVector\nz::BitMatrix\n\n\n\n\n\n","category":"type"},{"location":"api/#TwoStageSpanningTree.MILP_separation_problem-Tuple{Any, Any}","page":"API","title":"TwoStageSpanningTree.MILP_separation_problem","text":"MILP_separation_problem(graph, weights; MILP_solver, tol)\n\n\nSolve the separation problem using the MILP formulation.\n\n\n\n\n\n","category":"method"},{"location":"api/#TwoStageSpanningTree.anticipative_solution","page":"API","title":"TwoStageSpanningTree.anticipative_solution","text":"anticipative_solution(\n    instance::TwoStageSpanningTreeInstance\n) -> NamedTuple{(:value, :y, :z), <:Tuple{Any, Any, Any}}\nanticipative_solution(\n    instance::TwoStageSpanningTreeInstance,\n    scenario::Int64\n) -> NamedTuple{(:value, :y, :z), <:Tuple{Any, Any, Any}}\n\n\nCompute an anticipative solution for given scenario.\n\n\n\n\n\n","category":"function"},{"location":"api/#TwoStageSpanningTree.benders_decomposition-Tuple{TwoStageSpanningTreeInstance}","page":"API","title":"TwoStageSpanningTree.benders_decomposition","text":"benders_decomposition(\n    instance::TwoStageSpanningTreeInstance;\n    MILP_solver,\n    tol,\n    verbose\n) -> TwoStageSpanningTreeSolution\n\n\nReturns the optimal solution using a Benders decomposition algorithm.\n\n\n\n\n\n","category":"method"},{"location":"api/#TwoStageSpanningTree.column_generation-Tuple{Any}","page":"API","title":"TwoStageSpanningTree.column_generation","text":"column_generation(\n    instance;\n    MILP_solver,\n    tol,\n    verbose\n) -> NamedTuple{(:value, :ν, :μ, :columns), <:Tuple{Union{Float64, Vector{Float64}}, Vector{Float64}, Any, Vector{BitVector}}}\n\n\nSolves the linear relaxation using a column generation algorithm.\n\n\n\n\n\n","category":"method"},{"location":"api/#TwoStageSpanningTree.column_heuristic-Tuple{Any}","page":"API","title":"TwoStageSpanningTree.column_heuristic","text":"column_heuristic(\n    instance;\n    MILP_solver,\n    verbose\n) -> TwoStageSpanningTreeSolution\n\n\nColumn generation heuristic, that solves the linear relaxation and then outputs the solution of the proble restricted to selected columns. Returns an heuristic solution.\n\n\n\n\n\n","category":"method"},{"location":"api/#TwoStageSpanningTree.cut_generation-Tuple{TwoStageSpanningTreeInstance}","page":"API","title":"TwoStageSpanningTree.cut_generation","text":"cut_generation(\n    instance::TwoStageSpanningTreeInstance;\n    separation_problem,\n    MILP_solver,\n    verbose\n) -> TwoStageSpanningTreeSolution\n\n\nReturns the optimal solution using a cut generation algorithm with custom separation problem solver.\n\n\n\n\n\n","category":"method"},{"location":"api/#TwoStageSpanningTree.cut_separation_problem-Tuple{Any, Any}","page":"API","title":"TwoStageSpanningTree.cut_separation_problem","text":"cut_separation_problem(\n    graph,\n    weights;\n    MILP_solver,\n    tol\n) -> Tuple{Any, Any, Any}\n\n\nSolve the separation problem using the min cut formulation.\n\n\n\n\n\n","category":"method"},{"location":"api/#TwoStageSpanningTree.is_feasible-Tuple{TwoStageSpanningTreeSolution, TwoStageSpanningTreeInstance}","page":"API","title":"TwoStageSpanningTree.is_feasible","text":"is_feasible(\n    solution::TwoStageSpanningTreeSolution,\n    instance::TwoStageSpanningTreeInstance;\n    verbose\n) -> Bool\n\n\nCheck if a given solution is feasible for given instance.\n\n\n\n\n\n","category":"method"},{"location":"api/#TwoStageSpanningTree.kruskal-Tuple{Graphs.AbstractGraph, AbstractVector}","page":"API","title":"TwoStageSpanningTree.kruskal","text":"kruskal(\n    g::Graphs.AbstractGraph,\n    weights::AbstractVector;\n    minimize\n) -> NamedTuple{(:value, :tree), <:Tuple{Any, Any}}\n\n\nKruskal's algorithm. Same as Graphs.kruskal_mst, but also returns the value of the tree, and a binary vector instead of a vecror of edges.\n\n\n\n\n\n","category":"method"},{"location":"api/#TwoStageSpanningTree.lagrangian_relaxation-Tuple{TwoStageSpanningTreeInstance}","page":"API","title":"TwoStageSpanningTree.lagrangian_relaxation","text":"lagrangian_relaxation(\n    inst::TwoStageSpanningTreeInstance;\n    nb_epochs,\n    stop_gap\n) -> Tuple{TwoStageSpanningTreeSolution, NamedTuple{(:lb, :ub, :best_theta, :lb_history, :ub_history), <:Tuple{Any, Any, Matrix{Float64}, Vector{Float64}, Vector{Float64}}}}\n\n\nReturn an heuristic solution using a combination of lagarngian relaxation and lagrangian heuristic.\n\n\n\n\n\n","category":"method"},{"location":"api/#TwoStageSpanningTree.nb_scenarios-Tuple{TwoStageSpanningTreeInstance}","page":"API","title":"TwoStageSpanningTree.nb_scenarios","text":"nb_scenarios(\n    instance::TwoStageSpanningTreeInstance\n) -> Int64\n\n\nReturn the number of scenarios of instance.\n\n\n\n\n\n","category":"method"},{"location":"api/#TwoStageSpanningTree.plot_grid_graph","page":"API","title":"TwoStageSpanningTree.plot_grid_graph","text":"plot_grid_graph(graph, n, m, weights=nothing)\n\nArguments\n\ngraph: grid graph to plot\nn: n dimension\nm: m dimension\nweights: edge weights to display (optional)\n\n\n\n\n\n","category":"function"},{"location":"api/#TwoStageSpanningTree.plot_scenario-Tuple{TwoStageSpanningTreeSolution, TwoStageSpanningTreeInstance, Any}","page":"API","title":"TwoStageSpanningTree.plot_scenario","text":"plot_scenario(\n    solution::TwoStageSpanningTreeSolution,\n    instance::TwoStageSpanningTreeInstance,\n    scenario;\n    show_node_indices,\n    δ,\n    δ₂,\n    n,\n    m\n)\n\n\nPlot the two-stage tree from solution for requested scenario.\n\n\n\n\n\n","category":"method"},{"location":"api/#TwoStageSpanningTree.solution_from_first_stage_forest-Tuple{BitVector, TwoStageSpanningTreeInstance}","page":"API","title":"TwoStageSpanningTree.solution_from_first_stage_forest","text":"solution_from_first_stage_forest(\n    forest::BitVector,\n    instance::TwoStageSpanningTreeInstance\n) -> TwoStageSpanningTreeSolution\n\n\nReturn the associated two-stage solution from given first stage forest and instance.\n\n\n\n\n\n","category":"method"},{"location":"api/#TwoStageSpanningTree.solution_value-Tuple{TwoStageSpanningTreeSolution, TwoStageSpanningTreeInstance}","page":"API","title":"TwoStageSpanningTree.solution_value","text":"solution_value(\n    solution::TwoStageSpanningTreeSolution,\n    instance::TwoStageSpanningTreeInstance\n) -> Any\n\n\nCompute the objective value of given solution for given instance.\n\n\n\n\n\n","category":"method"},{"location":"","page":"TwoStageSpanningTree","title":"TwoStageSpanningTree","text":"EditURL = \"https://github.com/axelparmentier/InferOpt.jl/blob/main/README.md\"","category":"page"},{"location":"#TwoStageSpanningTree","page":"TwoStageSpanningTree","title":"TwoStageSpanningTree","text":"","category":"section"},{"location":"","page":"TwoStageSpanningTree","title":"TwoStageSpanningTree","text":"(Image: Stable) (Image: Dev) (Image: Build Status) (Image: Coverage) (Image: Code Style: Blue)","category":"page"},{"location":"","page":"TwoStageSpanningTree","title":"TwoStageSpanningTree","text":"The goal of this package is to demonstrate and compare several mathematical programming techniques on the same toy problem: the two stage minimum spanning tree problem.","category":"page"},{"location":"","page":"TwoStageSpanningTree","title":"TwoStageSpanningTree","text":"It showcases:","category":"page"},{"location":"","page":"TwoStageSpanningTree","title":"TwoStageSpanningTree","text":"Cut generation\nColumn generation\nBenders decomposition\nLagrangian relaxation","category":"page"},{"location":"#Installation","page":"TwoStageSpanningTree","title":"Installation","text":"","category":"section"},{"location":"","page":"TwoStageSpanningTree","title":"TwoStageSpanningTree","text":"This package is not registered, but can be installed as follows:","category":"page"},{"location":"","page":"TwoStageSpanningTree","title":"TwoStageSpanningTree","text":"import Pkg\nPkg.add(url=\"https://github.com/BatyLeo/TwoStageSpanningTree.jl\")","category":"page"},{"location":"problem_statement/#Problem-statement","page":"Problem statement","title":"Problem statement","text":"","category":"section"},{"location":"problem_statement/","page":"Problem statement","title":"Problem statement","text":"We consider a two-stage stochastic variant of the classic minimum spanning tree problem.","category":"page"},{"location":"problem_statement/","page":"Problem statement","title":"Problem statement","text":"Rather than immediately constructing a spanning tree and incurring a cost c_e for each selected edge in the tree, we instead can build only a partial tree (forest) during the first stage and paying first stage costs c_e for the selected edges. Then, second stage costs d_e are revealed and replace first stage costs. The task then involves completing the first stage forest into a spanning tree.","category":"page"},{"location":"problem_statement/","page":"Problem statement","title":"Problem statement","text":"The objective is to minimize the total incurred cost in expectation.","category":"page"},{"location":"problem_statement/#Instance","page":"Problem statement","title":"Instance","text":"","category":"section"},{"location":"problem_statement/","page":"Problem statement","title":"Problem statement","text":"Let G = (VE) be an undirected graph, and S be a finite set of scenarios.","category":"page"},{"location":"problem_statement/","page":"Problem statement","title":"Problem statement","text":"For each edge e in E, we have a first stage cost c_einmathbbR.","category":"page"},{"location":"problem_statement/","page":"Problem statement","title":"Problem statement","text":"For each edge e in E and scenario s in S, we have a second stage cost d_esinmathbbR.","category":"page"},{"location":"problem_statement/#MIP-formulation","page":"Problem statement","title":"MIP formulation","text":"","category":"section"},{"location":"problem_statement/","page":"Problem statement","title":"Problem statement","text":"Unlike the regular minimum spanning tree problem, this two-stage variant is NP-hard. However, it can still be formulated as linear program with binary variables, and exponential number of constraints.","category":"page"},{"location":"problem_statement/","page":"Problem statement","title":"Problem statement","text":"beginarraylll\nminlimits_y z  sumlimits_ein Ec_e y_e + frac1Ssumlimits_s in Sd_esz_es  \nmathrmst  sumlimits_ein Ey_e + z_es = V - 1  forall s in S\n sumlimits_ein E(Y) y_e + z_es leq Y - 1quad  forall emptyset subsetneq Y subsetneq V forall sin S\n y_ein 0 1  forall ein E\n z_esin 0 1  forall ein E forall sin S\nendarray","category":"page"},{"location":"problem_statement/","page":"Problem statement","title":"Problem statement","text":"where y_e is a binary variable indicating if e is in the first stage solution, and z_es is a binary variable indicating if e is in the second stage solution for scenario s.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"EditURL = \"literate/algorithms.jl\"","category":"page"},{"location":"algorithms/#Algorithms","page":"Algorithms","title":"Algorithms","text":"","category":"section"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"This package implements four different algorithms to solve the two-stage minimum weight spanning tree problem.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"Random instances for the problem can be generated as follows:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"using TwoStageSpanningTree, BenchmarkTools\nn = 5\nm = 4\ninstance = TwoStageSpanningTreeInstance(; n, m, nb_scenarios=20, seed=0);\nnothing #hide","category":"page"},{"location":"algorithms/#1.-Cut-generation-algorithm","page":"Algorithms","title":"1. Cut generation algorithm","text":"","category":"section"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"As presented in the problem statement, the MIP formulation of the minimum weight two-stage spanning tree problem has an exponential number of constraints. We cannot solve it directly using a MIP solver, but we can solve it with a subset of constraints and iteratively add the most violated one, up until all constraint are satisfied.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"Finding the most violated constraint (for a given scenario s) is called the separation problem, and can be formulated as:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"beginaligned\nmin_Yquad  Y - 1 - sum_ein E(Y)(y_e + z_es)\ntextstquad  emptyset subsetneq Ysubsetneq V\nendaligned","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"with y, z fixed and obtained by minimizing the problem restricted to a subset of constraints.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"If the value of this problem is positive for all scenarios, then all constraints are satisfied and the optimal solution is found.","category":"page"},{"location":"algorithms/#MIP-separation-problem","page":"Algorithms","title":"MIP separation problem","text":"","category":"section"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"A straightforward way to solve the separation problem, is to formulate it as the following MILP:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"beginarrayrll\nminlimits_alpha beta  sumlimits_vin Valpha_v - 1 - sumlimits_e in E beta_e (y_e + z_es) \nmathrmst  2 beta_e leq alpha_u + alpha_v qquad  forall e = (uv)in E \n sumlimits_vin V alpha_v geq 1\n alpha beta in 01\nendarray","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"This separation solver is implemented as MILP_separation_problem and can be given as input option to the cut_generation method:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"mip_solution = cut_generation(instance; separation_problem=MILP_separation_problem)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"The solution feasibility can be tested with the is_feasible method:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"is_feasible(mip_solution, instance)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"The objective value of a given solution can be computed using the solution_value method:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"solution_value(mip_solution, instance)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"Solutions can be visualized scenario by scenario using the plot_scenario method:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"plot_scenario(mip_solution, instance, 1; n, m)","category":"page"},{"location":"algorithms/#Cut-separation-problem","page":"Algorithms","title":"Cut separation problem","text":"","category":"section"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"The separation problem can alternatively be formulated as a min-cut problem, which has better performance and scaling.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"The separation problem","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"min  Y - 1 - sum_e in E(Y) (y_e + z_es) quad textsubject to quad emptyset subsetneq Y subsetneq V","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"is equivalent to","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"min  Y + sum_e notin E(Y) (y_e + z_es) - V quad textsubject to quad emptyset subsetneq Y subsetneq V","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"Let us define the digraph mathcalD = (mathcalV mathcalA) with vertex set mathcalV = st cup V cup E and the following arcs.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"Arc a Capacity u_a\n(se) for e in E y_e + z_es\n(eu) and (ev) for e = (uv) in E +infty\n(vt) for v in V 1","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"The separation problem is equivalent to finding a non-empty minimum-capacity s-t cut Y in mathcalD. This can be done with the following MILP:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"beginarrayrll\n\tmin   sumlimits_a in mathcalA u_a beta_a \n\tmathrmst   alpha_s - alpha_t geq 1 \n\t beta_a geq alpha_u - alpha_v  text for all  a= (uv) in mathcalA \n\t sumlimits_v in V alpha_v geq 1 \n\t alpha beta in 01\nendarray","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"This separation solving method is implemented by cut_separation_problem and is also compatible with cut_generation.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"We observe that using it is faster than the other method.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"cut_solution = cut_generation(instance; separation_problem=cut_separation_problem)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"@benchmark cut_generation(instance; separation_problem=MILP_separation_problem)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"@benchmark cut_generation(instance; separation_problem=cut_separation_problem)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"is_feasible(cut_solution, instance)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"solution_value(cut_solution, instance)","category":"page"},{"location":"algorithms/#2.-Column-generation","page":"Algorithms","title":"2. Column generation","text":"","category":"section"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"Since minimum spanning tree can be solved efficiently, it is natural to perform a Dantzig-Wolfe reformulation of the problem previously introduced.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"It leads to the following formulation.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"    beginarrayrll\n        min displaystylesum_e in Ec_e y_e +  frac1Ssum_e in Esum_s in Sd_esz_es\n        mathrmst  y_e + z_es = displaystylesum_T in mathcalTcolon e in T lambda_T^s  textfor all ein E and s in S \n         displaystylesum_T in mathcalT lambda_T^s = 1  textfor all s in S \n         yzlambdain 01\n    endarray","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"The linear relaxation of this problem can be solved by column generation, and the problem itself can be solved using a Branch-and-Price. The linear relaxation is implemented by column_generation, and an heuristic using columns outputed by it is implemented by column_heuristic:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"column_solution = column_heuristic(instance)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"@benchmark column_heuristic(instance)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"is_feasible(column_solution, instance)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"solution_value(column_solution, instance)","category":"page"},{"location":"algorithms/#3.-Benders-decomposition","page":"Algorithms","title":"3. Benders decomposition","text":"","category":"section"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"The integer optimal solution of the column generation formulation can be found using a Branch-and-price, quite heavy to implement. Another option is to apply a Benders decomposition to decouple the scenarios.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"When first stage variables y are fixed, the subproblem for scenario s becomes:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"beginaligned\nmin_z lambdaquad  sum_ein Ed_es z_es\ntextstquad  z_es = sum_Tin mathcalTcolon ein Tlambda_T^s - y_e  forall e in E\n sum_TinmathcalTlambda_T^s = 1\n z lambdageq 0\nendaligned","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"We can simplify further the formulation by removing variable z:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"beginaligned\nmin_z lambdaquad  sum_TinmathcalTsum_ein Td_eslambda_T^s - cst(y_e) \ntextstquad  sum_Tin mathcalTcolon ein Tlambda_T^s geq y_e  forall e in E\n sum_TinmathcalTlambda_T^s = 1\n z lambdageq 0\nendaligned","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"We take its dual:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"beginaligned\nmax_mu nuquad  nu_s + sum_ein E y_e mu_es - cst \ntextstquad  sum_ein T (d_es - mu_es) - nu_s geq 0  forall TinmathcalT\n mugeq 0 nuinmathbbR\nendaligned","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"This dual can be solved using constraint generation, with once again a usual minimum spanning tree separation problem that can be solved using Kruskal algorithm:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"min sum_ein T (d_es - mu_es)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"If the primal is feasible, we generate an optimality cut:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"theta_s geq nu_s + sum_ein E mu_esy_e - sum_ein E d_es y_e","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"When the primal is unfeasible, there is an unbounded ray for the dual, i.e. mu nu such that nu_s + sum_e mu_es y_e  0 and -nu_s - sum_ein Tmu_es. (alpha nu and alphamu are also solutions for all alpha  0). Such solution can be found by solving:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"beginaligned\nmax_mu nuquad  nu_s + sum_ein E mu_es y_e \ntextstquad  -nu_s - sum_ein Tmu_es geq 0  forall Tin mathcalT\n 0 leq mu_es leq 1  forall ein E\n nu_sleq 1\nendaligned","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"Let us denote mathcalF the feasibility cuts and mathcalO_s the optimality cuts set. We obtain the following Benders master problem:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"beginaligned\nmax_yquad  sum_ein E c_e y_e + frac1Ssum_sin Stheta_s \ntextstquad  theta_s geq nu_s + sum_ein E mu_es y_e - sum_ein E d_es y_e  forall sin S forall (nu mu) in mathcalO_s\n nu + sum_ein E mu_e y_e  forall (nu mu)in mathcalF\n yin0 1\nendaligned","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"The benders_decomposition implements this method:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"benders_solution = benders_decomposition(instance)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"@benchmark benders_decomposition(instance)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"is_feasible(benders_solution, instance)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"solution_value(benders_solution, instance)","category":"page"},{"location":"algorithms/#4.-Lagrangian-relaxation","page":"Algorithms","title":"4. Lagrangian relaxation","text":"","category":"section"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"Let us introduce one copy of first stage variables y per scenario. An equivalent formulation of the problem is","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"beginarrayll\nmin  displaystyle sum_ein Ec_e y_e + sum_e in E sum_s in Sd_esz_es \nmathrmst  mathbfy_s + mathbfz_s in mathcalP quadquad textfor all s in S  \n y_es = y_e quad quad quad textfor all e in E and s in S\nendarray","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"Let us relax (dualize) the constraint y_es = y_e. We denote by theta_es the associated Lagrange multiplier.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"The Lagrangian dual problem becomes","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"beginarrayrlrlrl\nmax_thetamathcalG(theta)= min_y sum_e in E(c_e + frac1Ssum_s in S theta_es)y_e \n+ frac1Ssum_s in Smin_mathbfy_smathbfz_s sum_e in Ed_esz_es - theta_esy_es\nmathrmst  0 leq mathbfy leq M\n mathbfy_s + mathbfz_s in mathcalP quadquad textfor all s in S\nendarray","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"where M is a large constant. In theory, we would take M=+infty, but taking a finite M leads to more informative gradients.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"We have","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"(nabla mathcalG(theta))_es= frac1S (y_e - y_es)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"Considering the sum on the second stage scenarios as an expectation, we can get stochastic gradients and maximize mathcalG using gradient ascent.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"Once a solution of the relaxed problem is found, we have one solution y_s per scenario s. We can then use an heuristic to reconstruct a good first stage decision y.","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"The lagrangian_relaxation method implements this heuristic:","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"solution, (; ub_history, lb_history) = lagrangian_relaxation(instance; nb_epochs=25000)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"@benchmark lagrangian_relaxation(instance; nb_epochs=25000)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"is_feasible(benders_solution, instance)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"solution_value(benders_solution, instance)","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"We can plot the evolution of both lower and upper bounds along iterations","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"using Plots\nf = plot()\nplot!(f, ub_history; label=\"Upper bound: lagrangian heuristic\", color=:orange)\nplot!(f, lb_history; label=\"Lower bound: lagrangian relaxation\", color=:purple)\nf","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"","category":"page"},{"location":"algorithms/","page":"Algorithms","title":"Algorithms","text":"This page was generated using Literate.jl.","category":"page"}]
}
