# Pure Elixir Solution

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence/solutions/4509766/](https://leetcode.com/problems/longest-increasing-subsequence/solutions/4509766/)

---


# Code
```
defmodule Solution do
  @spec length_of_lis(nums :: [integer]) :: integer
  def length_of_lis(nums) do
    {_, max} =
      Enum.reduce(nums, {[{-99_999_999_999_999_999, 0}], 0}, fn num, {prev, max} ->
        length = prev(prev, num, 0) + 1
        max = max(max, length)
        {[{num, length} | prev], max}
      end)

    max
  end

  defp prev([], _num, max), do: max

  defp prev([{prev_num, length} | t], num, max) do
    max = if num > prev_num, do: max(length, max), else: max
    max(max, prev(t, num, max))
  end
end
```