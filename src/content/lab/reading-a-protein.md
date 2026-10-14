---
title: "Reading a protein like a landscape"
dek: "A first look at the green fluorescent protein: how its eleven strands close into a barrel, where the chromophore hides, and a redrawn version of the figure that made me curious."
date: 2026-10-12
no: "L-005"
meta: ["PDB 1EMA", "PyMOL · Python", "Status: in progress"]
series: "Experiments in Progress"
featured: true
---

This is example text, here to show how an article looks. Replace it with your own notes.

## The question

What made me curious, in two or three sentences.

## Method

```python
from pymol import cmd
cmd.fetch('1EMA')
cmd.show_as('cartoon')
```

## What I found

A short summary, a figure, and a link to the [GitHub repository](https://github.com/).
