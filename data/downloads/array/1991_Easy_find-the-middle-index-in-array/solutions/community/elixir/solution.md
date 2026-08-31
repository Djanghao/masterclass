# Elixir, O(n)

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-middle-index-in-array/solutions/4567652/](https://leetcode.com/problems/find-the-middle-index-in-array/solutions/4567652/)

---

# Approach
Iterate the numbers and generate prefix sum. Iterate the prefix sum list to calculate the middle index.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec find_middle_index(nums :: [integer]) :: integer
  def find_middle_index(nums) do
    {total, pre_sum} = prefix_sum(nums, 0, [])
    do_find_middle_index(pre_sum, 0, 0, total)
  end

  defp do_find_middle_index([hd | tl], i, left_sum, total) do
    if left_sum == total - hd, do: i, else: do_find_middle_index(tl, i + 1, hd, total)  
  end
  defp do_find_middle_index(_, _, _, _), do: -1

  defp prefix_sum([hd | tl], prev_sum, acc) do
    el = prev_sum + hd
    prefix_sum(tl, el, [el | acc])
  end
  defp prefix_sum(_, total, acc), do: {total, Enum.reverse(acc)}
end
```