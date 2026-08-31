# Elixir - Binary Search Tree (:gb_trees)

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/6088018/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/6088018/)

---

# Intuition
When a new road is added from A to B, you can simply remove all nodes between A and B.

When trying to add a road between A and B when either A or B has already been removed, then simply not to add this road.

# Code
```elixir []
defmodule Solution do
  @spec shortest_distance_after_queries(n :: integer, queries :: [[integer]]) :: [integer]
  def shortest_distance_after_queries(n, queries) do
    roads =
      1..n - 1
      |> Enum.map(&{&1 - 1, &1})
      |> :gb_trees.from_orddict()

    queries
    |> Enum.map_reduce({n - 1, roads}, fn [a, b], {steps, roads} ->
      {steps, roads} = map_reducer(steps, roads, a, b)
      {steps, {steps, roads}}
    end)
    |> elem(0)
  end

  defp map_reducer(steps, roads, a, b) do
    iter = :gb_trees.iterator_from(a, roads)

    nodes_to_remove =
      iter
      |> Stream.unfold(fn iter ->
        case :gb_trees.next(iter) do
          :none -> nil
          {i, j, iter} -> {{i, j}, iter}
        end
      end)
      |> Stream.take_while(fn {_i, j} ->
        j <= b
      end)
      |> Enum.map(&elem(&1, 0))

    case nodes_to_remove do
      [] ->
        {steps, roads}

      _ ->
        nodes_to_remove
        |> Enum.reduce({steps, roads}, fn i, {steps, roads} ->
          {steps - 1, :gb_trees.delete(i, roads)}
        end)
        |> then(fn {steps, roads} ->
          {steps + 1, :gb_trees.insert(a, b, roads)}
        end)
    end
  end
end
```