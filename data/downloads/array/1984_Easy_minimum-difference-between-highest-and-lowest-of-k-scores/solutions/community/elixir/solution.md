# Elixir, uses Enum.sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/4567550/](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/4567550/)

---

# Approach
Sort the numbers using Enum.sort/1. Drop k - 1 members in the sorted list and iterate both the lists to accumulate the minimum difference.

# Complexity
- Time complexity:
O(n.log(n))
- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec minimum_difference(nums :: [integer], k :: integer) :: integer
  def minimum_difference(nums, k) do
    sorted_nums = Enum.sort(nums)
    do_minimum_difference(sorted_nums, Enum.drop(sorted_nums, k - 1), nil)
  end

  defp do_minimum_difference([n1 | tl1], [n2 | tl2], min_diff) do
    do_minimum_difference(tl1, tl2, min(n2 - n1, min_diff))
  end
  defp do_minimum_difference(_, _, min_diff), do: min_diff || 0
end
```