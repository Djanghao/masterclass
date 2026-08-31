# Elixir - Randomized Quick Sort

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-an-array/solutions/5531340/](https://leetcode.com/problems/sort-an-array/solutions/5531340/)

---

# Code
```elixir
defmodule Solution do
  @spec sort_array(nums :: [integer]) :: [integer]
  def sort_array([]) do
    []
  end

  def sort_array(nums) do
    pivot = Enum.random(nums)
    groups = Enum.group_by(nums, &compare(&1, pivot))
    sort_array(groups[:lt] || []) ++ (groups[:eq] || []) ++ sort_array(groups[:gt] || [])
  end

  defp compare(a, b) when a < b, do: :lt
  defp compare(a, b) when a > b, do: :gt
  defp compare(_, _), do: :eq
end
```