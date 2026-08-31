# Simple Elixir Solution using connected components

**Author:** tsycho
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-provinces/solutions/5466291/](https://leetcode.com/problems/number-of-provinces/solutions/5466291/)

---

# Code
```elixir []
defmodule Solution do
  @spec find_circle_num(is_connected :: [[integer]]) :: integer
  def find_circle_num(is_connected) do
    n = length(is_connected)

    graph =
      is_connected
      |> Enum.reduce({1, %{}}, fn adj, {idx, g} ->
        {idx + 1, g |> Map.put(idx, adj)}
      end)
      |> elem(1)

    1..n
    |> Enum.reduce({0, MapSet.new()}, fn i, {components, visited} ->
      if visited |> MapSet.member?(i) do
        {components, visited}
      else
        visited = dfs([i], graph, visited)
        {components + 1, visited}
      end
    end)
    |> elem(0)
  end

  def dfs([], _, visited), do: visited

  def dfs([node | rest], graph, visited) do
    visited = visited |> MapSet.put(node)

    stack =
      graph[node]
      |> Enum.reduce({1, rest}, fn connected?, {idx, stack} ->
        if connected? != 0 && not MapSet.member?(visited, idx) do
          {idx + 1, [idx | stack]}
        else
          {idx + 1, stack}
        end
      end)
      |> elem(1)

    dfs(stack, graph, visited)
  end
end
```