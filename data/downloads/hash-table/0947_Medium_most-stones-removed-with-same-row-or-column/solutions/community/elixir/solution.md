# Elixir DSU

**Author:** stevensonmt
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/4306888/](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/4306888/)

---

Would love suggestions on tracking roots in a single pass to optimize this. But I'm pretty excited to have solved this finally after making my first fumbling attempts in 2019.

# Code
```
defmodule DSU do

  @moduledoc """
   Disjoint set union structure and functions for the
   union and find methods.
   """

  def new(), do: %{}

  def find(%{} = parents, x) do
    case Map.fetch(parents, x) do
      :error -> {x, Map.put(parents, x, x)}
      {:ok, ^x} -> {x, parents}
      {:ok, y} -> update_parent(parents, x, y)
    end
  end

  defp update_parent(%{} = parents, x, y) do 
  {parent, new_parents} = find(parents, y)
    {parent, Map.put(new_parents, x, parent) }
  end

  def union(%{} = parents, x, y) do 
    [x,y]
    |> Enum.reduce({parents, []}, fn i, {ps, rs} -> 
      {r, new_ps} = find(ps, i)
      {new_ps, [r | rs]}
    end)
    |> maybe_new_root()
  end    

  defp maybe_new_root(parents, [r, r]), do: parents
  defp maybe_new_root({%{} = parents, [r1, r2]}) do 
    [r1, r2] = Enum.sort([r1, r2])
    update_parent(parents, r2, r1)
    |> elem(1)
  end

  def roots(%{} = parents) do
    parents
    |> Map.keys()
    |> Enum.reduce(MapSet.new(), fn k, roots -> 
      {root, _} = find(parents, k)
      MapSet.put(roots, root)
    end)
  end

  def root_count(%MapSet{} = roots), do: MapSet.size(roots)

  def root_count(%{} = parents), do: root_count(roots(parents))
end

defmodule Solution do

  @spec remove_stones(stones :: [[integer]]) :: integer
  def remove_stones([]), do: 0
  def remove_stones([_a]), do: 0
  def remove_stones(stones) do
    {total, dsu} =
      stones
      |> Enum.reduce({0, DSU.new()}, fn [a,b], {stone_count, dsu} ->
    
        {stone_count + 1, DSU.union(dsu, a, 10001 + b)}
        end)
        
    total - DSU.root_count(dsu)

  end


end
```