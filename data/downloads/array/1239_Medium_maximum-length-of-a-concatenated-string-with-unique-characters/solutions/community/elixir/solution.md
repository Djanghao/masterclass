# Elixir BFS solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/4611711/](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/4611711/)

---

# Code
```Elixir
defmodule Solution do
  @spec max_length(arr :: [String.t]) :: integer
  def max_length(arr) do
    Enum.flat_map(arr, fn str ->
      String.to_charlist(str)
      |> MapSet.new()
      |> then(fn set ->
        if MapSet.size(set) == String.length(str) do
          [set]
        else
          []
        end
      end)
    end)
    |> Enum.reduce([MapSet.new()], fn set, list ->
      Enum.flat_map(list, fn set2 ->
        if MapSet.disjoint?(set, set2) do
          [set2, MapSet.union(set, set2)]
        else
          [set2]
        end
      end)
      |> Enum.uniq()
    end)
    |> Enum.map(&MapSet.size/1)
    |> Enum.max()
  end
end
```