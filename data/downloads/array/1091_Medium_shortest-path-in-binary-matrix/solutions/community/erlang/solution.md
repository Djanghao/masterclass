# Elixir cheating solution using digraph and dijkstra

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/2043311/](https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/2043311/)

---

```elixir
defmodule Solution do
  @spec shortest_path_binary_matrix(grid :: [[integer]]) :: integer
  def shortest_path_binary_matrix(grid) do
    grid =
      grid
      |> Enum.map(&List.to_tuple/1)
      |> List.to_tuple()

    width = tuple_size(grid)

    graph = :digraph.new([:cyclic])

    for i <- 0..width-1,
        j <- 0..width-1,
        get(grid, i, j) == 0 do

      :digraph.add_vertex(graph, {i, j})

      if i > 0 and j > 0 and get(grid, i-1, j-1) == 0 do
        :digraph.add_edge(graph, {i-1, j-1}, {i, j})
        :digraph.add_edge(graph, {i, j}, {i-1, j-1})
      end

      if i > 0 and get(grid, i-1, j) == 0 do
        :digraph.add_edge(graph, {i-1, j}, {i, j})
        :digraph.add_edge(graph, {i, j}, {i-1, j})
      end

      if i > 0 and j < width-1 and get(grid, i-1, j+1) == 0 do
        :digraph.add_edge(graph, {i-1, j+1}, {i, j})
        :digraph.add_edge(graph, {i, j}, {i-1, j+1})
      end

      if j > 0 and get(grid, i, j-1) == 0 do
        :digraph.add_edge(graph, {i, j-1}, {i, j})
        :digraph.add_edge(graph, {i, j}, {i, j-1})
      end
    end

    case :digraph.get_short_path(graph, {0, 0}, {width-1, width-1}) do
      false -> -1
      path -> length(path)
    end
  end

  defp get(grid, i, j) do
    grid |> elem(i) |> elem(j)
  end
end
```