# Elixir - Memoization

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/5385496/](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/5385496/)

---

# Intuition
For each vertex,
- its in-neighbors are its ancestors
- its in-neighbors' ancestors are its ancestors

# Code
```elixir
defmodule Solution do
  @spec get_ancestors(n :: integer(), edges :: [[integer()]]) :: [[integer()]]
  def get_ancestors(n, edges) do
    inbounds =
      edges
      |> Enum.group_by(&List.last/1, &hd/1)
      |> Map.new(fn {k, v} ->
        {k, :gb_sets.from_list(v)}
      end)

    Task.async(fn ->
      for vertex <- 0..n-1//1 do
        to_ancestors(inbounds, vertex) |> :gb_sets.to_list()
      end
    end)
    |> Task.await()
  end

  defp to_ancestors(inbounds, vertex) do
    memoized({:dp, vertex}, fn ->
      in_neighbors = Map.get(inbounds, vertex, :gb_sets.new())

      in_neighbors
      |> :gb_sets.iterator()
      |> Stream.unfold(fn iter ->
        with :none <- :gb_sets.next(iter), do: nil
      end)
      |> Stream.map(&to_ancestors(inbounds, &1))
      |> Enum.reduce(in_neighbors, &:gb_sets.union/2)
    end)       
  end

  defp memoized(key, fun) do
    with nil <- Process.get(key) do
      fun.() |> tap(&Process.put(key, &1))
    end
  end
end
```