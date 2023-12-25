using TwoStageSpanningTree
using Documenter

DocMeta.setdocmeta!(TwoStageSpanningTree, :DocTestSetup, :(using TwoStageSpanningTree); recursive=true)

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
        "Home" => "index.md",
    ],
)

deploydocs(;
    repo="github.com/BatyLeo/TwoStageSpanningTree.jl",
    devbranch="main",
)
