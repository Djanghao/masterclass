# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-network-rank/solutions/5828119/](https://leetcode.com/problems/maximal-network-rank/solutions/5828119/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 180ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 90.61MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec maximal_network_rank(n :: integer, roads :: [[integer]]) :: integer
  def maximal_network_rank(n, roads) do
    connections =
      Enum.reduce(0..n-1, %{}, fn i, connections ->
        Map.put(connections, i, 0)
      end)
    graph =
      Enum.reduce(0..n-1, %{}, fn i, graph ->
        Enum.reduce(0..n-1, graph, fn j, graph ->
          Map.put(graph, {i, j}, false)
        end)
      end)
    {connections, graph} =
      Enum.reduce(roads, {connections, graph}, fn [a, b], {connections, graph} ->
        connections = Map.put(connections, a, connections[a] + 1)
        connections = Map.put(connections, b, connections[b] + 1)
        graph = Map.put(graph, {a, b}, true)
        graph = Map.put(graph, {b, a}, true)
        {connections, graph}
      end)
    Enum.reduce(0..n-1, 0, fn i, max_rank ->
      if i + 1 == n do
        max_rank
      else
        Enum.reduce(i+1..n-1, max_rank, fn j, max_rank ->
          rank =
            if graph[{i, j}] do
              connections[i] + connections[j] - 1
            else
              connections[i] + connections[j]
            end
          max(max_rank, rank)
        end)
      end
    end)
  end
end

```