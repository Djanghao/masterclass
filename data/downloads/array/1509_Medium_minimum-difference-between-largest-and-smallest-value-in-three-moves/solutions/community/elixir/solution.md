# Elixir - Memoization

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5406256/](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5406256/)

---

- Time Complexity: $$O(n \\log n)$$ for sorting.
- Space Complexity: $$O(n)$$ because the size of the memo is at most 4.

# Code
```elixir
defmodule Solution do
  @spec min_difference(nums :: [integer]) :: integer
  def min_difference([]), do: 0
  def min_difference([_]), do: 0
  def min_difference([_, _]), do: 0
  def min_difference([_, _, _]), do: 0

  def min_difference(nums) do
    nums = nums |> Enum.sort() |> List.to_tuple()

    Task.async(fn ->
      solve(nums, 0, tuple_size(nums) - 1, 3)
    end)
    |> Task.await()
  end

  defp solve(nums, i, j, 0), do: elem(nums, j) - elem(nums, i)

  defp solve(nums, i, j, countdown) do
    memoized({i, j, countdown}, fn ->
      diff1 = solve(nums, i + 1, j, countdown - 1)
      diff2 = solve(nums, i, j - 1, countdown - 1)
      min(diff1, diff2)
    end)
  end

  defp memoized(key, fun) do
    with nil <- Process.get(key) do
      fun.() |> tap(&Process.put(key, &1))
    end
  end
end
```

## UPDATE

Same idea without memoization:

```elixir
defmodule Solution do
  @spec min_difference(nums :: [integer]) :: integer
  def min_difference(nums) do
    nums =  
      nums
      |> Enum.sort()
      |> List.to_tuple()

    len = tuple_size(nums)

    if len <= 4 do
      0
    else
      (elem(nums, len - 4) - elem(nums, 0))
      |> min(elem(nums, len - 3) - elem(nums, 1))
      |> min(elem(nums, len - 2) - elem(nums, 2))
      |> min(elem(nums, len - 1) - elem(nums, 3))
    end
  end
end
```