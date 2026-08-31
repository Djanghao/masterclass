# Elixir - BFS

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6087621/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6087621/)

---

# Approach
For each query in `queries`, just add an edge to the graph and do BFS.

# Code
```elixir []
defmodule Solution do
  @spec shortest_distance_after_queries(n :: integer, queries :: [[integer]]) :: [integer]
  def shortest_distance_after_queries(n, queries) do
    n = n - 1
    graph = Map.new(1..n, fn i -> {i - 1, [i]} end)
    {result, _} = Enum.map_reduce(queries, graph, &update_and_bfs(&2, &1, n))
    result
  end

  defp update_and_bfs(graph, [a, b], n) do
    graph = Map.update!(graph, a, &[b | &1])
    steps = bfs(:queue.from_list([{0, 0}]), graph, n, MapSet.new())
    {steps, graph}
  end

  defp bfs(queue, graph, dest, seen) do
    {{:value, {v, steps}}, queue} = :queue.out(queue)

    if v == dest do
      steps
    else
      seen = MapSet.put(seen, v)

      queue =
        for neighbor <- graph[v],
            neighbor not in seen,
            reduce: queue,
            do: (queue -> :queue.in({neighbor, steps + 1}, queue))

      bfs(queue, graph, dest, seen)
    end
  end
end
```