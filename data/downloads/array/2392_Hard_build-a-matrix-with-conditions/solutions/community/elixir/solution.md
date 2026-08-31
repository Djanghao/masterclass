# Elixir - Topological Sort

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5510110/](https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5510110/)

---

# Code
```Elixir
defmodule Solution do
  @spec build_matrix(k :: integer, row_conditions :: [[integer]], col_conditions :: [[integer]]) :: [[integer]]
  def build_matrix(k, row_conditions, col_conditions) do
    base = Map.new(1..k, &{&1, []})

    row_vals =
      row_conditions
      |> Enum.uniq()
      |> Enum.group_by(&hd/1, &List.last/1)
      |> Map.merge(base, fn _k, v1, _v2 -> v1 end)
      |> topsort()
      |> Enum.with_index(1)
      |> Map.new()

    col_vals =
      col_conditions
      |> Enum.uniq()
      |> Enum.group_by(&hd/1, &List.last/1)
      |> Map.merge(base, fn _k, v1, _v2 -> v1 end)
      |> topsort()
      |> Enum.with_index(1)
      |> Map.new()
    
    sparse = Map.new(1..k, fn val ->
      {{row_vals[val], col_vals[val]}, val}
    end)
  
    for i <- 1..k//1 do
      for j <- 1..k//1 do
        sparse[{i, j}] || 0
      end
    end
  rescue
    _ -> []
  end

  defp topsort(adj) do
    roots = Enum.reduce(adj, Map.keys(adj), fn {_, outs}, candidates ->
      candidates -- outs
    end)
    
    {_, acc} = do_topsort(roots, adj, MapSet.new(), [])

    if length(acc) == map_size(adj) do
      acc
    else
      raise "cyclic"
    end
  end
  
  defp do_topsort([h | t], adj, seen, acc) do
    {seen, acc} =
      if MapSet.member?(seen, h) do
        {seen, acc}
      else
        seen = MapSet.put(seen, h)
        {seen, acc} = do_topsort(adj[h], adj, seen, acc)
        {seen, [h | acc]}
      end

    do_topsort(t, adj, seen, acc)
  end

  defp do_topsort([], _adj, seen, acc) do
    {seen, acc}
  end
end
```