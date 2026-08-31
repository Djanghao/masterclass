# Elixir - Graph Solution

**Author:** Aetherus
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-islands/solutions/3785251/](https://leetcode.com/problems/number-of-islands/solutions/3785251/)

---

# Intuition
Just cheating using `:digraph` and `:digraph_utils`.

# Approach
1. Create an empty graph.
2. Add the coordinates of all `1`'s as the vertices into the graph.
3. If two `1`'s are adjacent to each other, add an edge between their coordinates.
4. Count the components in the graph.

# Code
```
defmodule Solution do
  @spec num_islands(grid :: [[char]]) :: integer
  def num_islands(grid) do
    graph = :digraph.new([:acyclic])

    for {row, i} <- Stream.with_index(grid),
        {?1, j} <- Stream.with_index(row),
        do: :digraph.add_vertex(graph, {i, j})

    for {row, i} <- Stream.with_index(grid),
        [{?1, j1}, {?1, j2}] <- row |> Stream.with_index() |> Stream.chunk_every(2, 1, :discard),
        do: :digraph.add_edge(graph, {i, j1}, {i, j2})

    grid_t = Enum.zip_with(grid, &Function.identity/1)

    for {row, j} <- Stream.with_index(grid_t),
        [{?1, i1}, {?1, i2}] <- row |> Stream.with_index() |> Stream.chunk_every(2, 1, :discard),
        do: :digraph.add_edge(graph, {i1, j}, {i2, j})

    graph
    |> :digraph_utils.components()
    |> length()
  end
end
```