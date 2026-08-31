# BFS with Routes as Nodes

**Author:** brianide
**Votes:** 0
**Link:** [https://leetcode.com/problems/bus-routes/solutions/4279246/](https://leetcode.com/problems/bus-routes/solutions/4279246/)

---

# Annotated Code
```
defmodule Solution do
  @spec num_buses_to_destination(routes :: [[integer]], source :: integer, target :: integer) :: integer
  def num_buses_to_destination(_, source, target) when source == target, do: 0

  def num_buses_to_destination(routes, source, target) do
    # Convert the list of routes into an "array" (that is, an integer-indexed
    # map). This probably speeds up equality tests a little bit, but the real
    # reason we're doing it is because otherwise our IO.inspect output will be
    # incomprehensible.
    # While we're at it, we also sort the routes; see explanation below.
    table = Enum.with_index(routes, &{&2, Enum.sort(&1)}) |> Map.new()
    keys = Map.keys(table)

    # Build an adjacency list with the routes as our graph nodes, as described
    # in Approach 2 on the Editorial tab.
    #
    # The tl;dr is that we reimagine the problem as minimizing the number of
    # times we change bus routes. Instead of using the stops as graph nodes, we
    # use the routes, and say that an edge exists between any two routes that
    # share one or more stops. This leaves us with a much leaner graph that we
    # can BFS a lot faster.
    graph =
      for a <- keys,
          b <- keys,
          a != b,
          shared_stop?(table[a], table[b]),
          reduce: Map.new(keys, &{&1, []}) do
        acc -> Map.update!(acc, a, &[b | &1])
      end

    # Since our "source" stop might belong to multiple routes, we need to
    # initialize our BFS queue with all of them.
    start = for i <- keys, source in table[i], do: i

    # Our destination stop might belong to multiple routes as well.
    finish = for i <- keys, target in table[i], into: MapSet.new(), do: i

    bfs(graph, finish, 1, start, MapSet.new(start))
  end

  # Since we sorted the routes, we can iterate through them simultaneously to
  # quickly determine if they share a stop.
  defp shared_stop?([a | _], [b | _]) when a == b, do: true
  defp shared_stop?([a | more], [b | _] = list) when a < b, do: shared_stop?(more, list)
  defp shared_stop?([a | _] = list, [b | more]) when a > b, do: shared_stop?(more, list)
  defp shared_stop?([], _), do: false
  defp shared_stop?(_, []), do: false

  # If our queue is exhausted, then there's no valid path
  defp bfs(_, _, _, [], visited), do: -1

  # Standard BFS. Reducing over a level at a time (instead of going
  # node-by-node) saves us having to implement an actual FIFO queue.
  defp bfs(graph, finish, depth, queue, visited) do
    Enum.reduce_while(queue, {[], visited}, fn e, {queue, visited} ->
      if e in finish do
        {:halt, depth}
      else
        for n <- graph[e],
            n not in visited,
            reduce: {queue, visited} do
          {queue, visited} -> {[n | queue], MapSet.put(visited, n)}
        end
        |> then(&{:cont, &1})
      end
    end)
    |> case do
      {queue, visited} -> bfs(graph, finish, depth + 1, queue, visited)
      n -> n
    end
  end
end
```