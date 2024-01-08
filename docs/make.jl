using TwoStageSpanningTree
using Documenter
using Literate

DocMeta.setdocmeta!(TwoStageSpanningTree, :DocTestSetup, :(using TwoStageSpanningTree); recursive=true)

# Copy README.md into docs/src/index.md (overwriting)
open(joinpath(@__DIR__, "src", "index.md"), "w") do io
    println(
        io,
        """
        ```@meta
        EditURL = "https://github.com/axelparmentier/InferOpt.jl/blob/main/README.md"
        ```
        """,
    )
    # Write the contents out below the meta bloc
    for line in eachline(joinpath(dirname(@__DIR__), "README.md"))
        println(io, line)
    end
end

tuto_md_dir = joinpath(@__DIR__, "src")
tuto_jl_dir = joinpath(tuto_md_dir, "literate")
Literate.markdown(joinpath(tuto_jl_dir, "algorithms.jl"), tuto_md_dir; documenter=true, execute=false)

makedocs(;
    modules=[TwoStageSpanningTree],
    authors="Léo Baty and contributors",
    repo="https://github.com/BatyLeo/TwoStageSpanningTree.jl/blob/{commit}{path}#{line}",
    sitename="TwoStageSpanningTree.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://BatyLeo.github.io/TwoStageSpanningTree.jl",
        edit_link="main",
        assets=String[],
        repolink="https://github.com/BatyLeo/TwoStageSpanningTree.jl"
    ),
    pages=[
        "index.md",
        "problem_statement.md",
        "algorithms.md",
        "api.md"
    ],
)

for file in
    [joinpath(tuto_md_dir, "index.md"), joinpath(tuto_md_dir, "algorithms.md")]
    rm(file)
end

deploydocs(;
    repo="github.com/BatyLeo/TwoStageSpanningTree.jl",
    devbranch="main",
)
