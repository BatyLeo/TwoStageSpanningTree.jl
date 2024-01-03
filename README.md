# TwoStageSpanningTree

[![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://BatyLeo.github.io/TwoStageSpanningTree.jl/stable/)
[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://BatyLeo.github.io/TwoStageSpanningTree.jl/dev/)
[![Build Status](https://github.com/BatyLeo/TwoStageSpanningTree.jl/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/BatyLeo/TwoStageSpanningTree.jl/actions/workflows/CI.yml?query=branch%3Amain)
[![Coverage](https://codecov.io/gh/BatyLeo/TwoStageSpanningTree.jl/branch/main/graph/badge.svg)](https://codecov.io/gh/BatyLeo/TwoStageSpanningTree.jl)
[![Code Style: Blue](https://img.shields.io/badge/code%20style-blue-4495d1.svg)](https://github.com/invenia/BlueStyle)

The goal of this package is to demonstrate and compare several mathematical programming techniques on the same toy problem: the two stage minimum spanning tree problem.

It showcases:
- Cut generation
- Column generation
- Benders decomposition
- Lagrangian relaxation

## Installation

This package is not registered, but can be installed as follows:
```julia
import Pkg
Pkg.add(url="https://github.com/BatyLeo/TwoStageSpanningTree.jl")
```
