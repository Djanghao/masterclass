# Elixir BFS solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/3170994/](https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/3170994/)

---

Comprehension style.
# Code
```elixir
defmodule Solution do
  @spec shortest_alternating_paths(n :: integer, red_edges :: [[integer]], blue_edges :: [[integer]]) :: [integer]
  def shortest_alternating_paths(n, red_edges, blue_edges) do
    adj =
      read_edges(%{}, red_edges, true)
      |> read_edges(blue_edges, false)
    curr = [{0, true}, {0, false}]
    visited = MapSet.new(curr)
    ans = bfs({curr, %{0 => 0}, visited}, 1, adj)
    for i <- 0..n - 1 do
      Map.get(ans, i, -1)
    end
  end

  defp read_edges(adj, edges, is_red) do
    for [a, b] <- edges, reduce: adj do adj ->
      Map.update(adj, {a, is_red}, [b], &([b | &1]))
    end
  end

  defp bfs({[], ans, _}, _, _), do: ans
  defp bfs({curr, ans, visited}, step, adj) do
    for {i, is_red} <- curr, j <- Map.get(adj, {i, is_red}, []),
    not MapSet.member?(visited, {j, not is_red}),
    reduce: {[], ans, visited} do {next, ans, visited} ->
      {
        [{j, not is_red} | next],
        Map.put_new(ans, j, step),
        MapSet.put(visited, {j, not is_red})
      }
    end
    |> bfs(step + 1, adj)
  end
end
```