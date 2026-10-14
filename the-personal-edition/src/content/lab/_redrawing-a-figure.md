---
title: "Redrawing a figure from a 1996 crystallography paper"
dek: "What I learned by rebuilding one figure from the raw coordinates instead of copying it."
date: 2026-09-14
no: "L-003"
meta: ["Figure study"]
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
