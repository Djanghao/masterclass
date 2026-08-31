# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/4482336/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/4482336/)

---

# Approach
Iterate the numbers one by one, check with the previous number and keep track of the current ascending sum and the maximum ascending sum. Return the maximum ascending sum at the end.

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec max_ascending_sum(nums :: [integer]) :: integer
  def max_ascending_sum([hd | tl]), do: do_max_asc_sum(tl, hd, hd, 0)

  defp do_max_asc_sum([hd | tl], prev, cur_sum, max_sum) do
    cond do
      hd > prev -> do_max_asc_sum(tl, hd, cur_sum + hd, max_sum)
      true -> do_max_asc_sum(tl, hd, hd, max(max_sum, cur_sum))
    end
  end
  defp do_max_asc_sum(_, _, cur_sum, max_sum), do: max(cur_sum, max_sum)
end
```