# Elixir - Graph Solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/regions-cut-by-slashes/solutions/5614840/](https://leetcode.com/problems/regions-cut-by-slashes/solutions/5614840/)

---

# Intuition
For each cell, we can further split into 4 parts, upper, lower, left and right.

If the cell is blank, then the 4 parts are connected.
If the cell contains a `/`, then the upper and left parts are connected, the right and lower parts are connected.
Same idea for the cell contains a `\\`.

Each cell's right part is connected to its right adjacent cell's left part, and so on.

So we can build a graph with this idea, and just count the components. 

# Code
```elixir
defmodule Solution do
  @spec regions_by_slashes(grid :: [String.t]) :: integer
  def regions_by_slashes(grid) do
    graph = :digraph.new()

    for {row, i} <- Stream.with_index(grid, 1),
        j <- 1..byte_size(row),
        p <- [:u, :d, :l, :r],
        do: :digraph.add_vertex(graph, {i, j, p})

    for {row, i} <- Stream.with_index(grid, 1),
        j <- 1..byte_size(row) do
      :digraph.add_edge(graph, {i, j, :l}, {i, j - 1, :r})
      :digraph.add_edge(graph, {i, j, :r}, {i, j + 1, :l})
      :digraph.add_edge(graph, {i, j, :u}, {i - 1, j, :d})
      :digraph.add_edge(graph, {i, j, :d}, {i + 1, j, :u})
    end

    for {row, i} <- Stream.with_index(grid, 1),
        {cell, j} <- row |> :binary.bin_to_list() |> Stream.with_index(1) do
      case cell do
        ?/ ->
          :digraph.add_edge(graph, {i, j, :l}, {i, j, :u})
          :digraph.add_edge(graph, {i, j, :u}, {i, j, :l})
          :digraph.add_edge(graph, {i, j, :r}, {i, j, :d})
          :digraph.add_edge(graph, {i, j, :d}, {i, j, :r})

        ?\\\\ ->
          :digraph.add_edge(graph, {i, j, :l}, {i, j, :d})
          :digraph.add_edge(graph, {i, j, :d}, {i, j, :l})
          :digraph.add_edge(graph, {i, j, :r}, {i, j, :u})
          :digraph.add_edge(graph, {i, j, :u}, {i, j, :r})

        _ ->
          :digraph.add_edge(graph, {i, j, :l}, {i, j, :u})
          :digraph.add_edge(graph, {i, j, :u}, {i, j, :l})
          :digraph.add_edge(graph, {i, j, :r}, {i, j, :d})
          :digraph.add_edge(graph, {i, j, :d}, {i, j, :r})
          :digraph.add_edge(graph, {i, j, :l}, {i, j, :d})
          :digraph.add_edge(graph, {i, j, :d}, {i, j, :l})
          :digraph.add_edge(graph, {i, j, :r}, {i, j, :u})
          :digraph.add_edge(graph, {i, j, :u}, {i, j, :r})
      end
    end

    graph
    |> :digraph_utils.components()
    |> length()
  end
end
```