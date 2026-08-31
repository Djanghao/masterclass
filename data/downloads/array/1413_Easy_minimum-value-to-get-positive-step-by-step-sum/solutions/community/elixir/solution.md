# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/4360190/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/4360190/)

---

# Approach
Iterate the numbers and keep track of the total sum so far. Find the smallest negative sum at any point in the iteration, invert it, add one to it and return the result.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec min_start_value(nums :: [integer]) :: integer
  def min_start_value(nums), do: do_min_start_value(nums, 0, 0)

  defp do_min_start_value([hd | tl], sum, min_neg_sum), do: do_min_start_value(tl, hd + sum, min(hd + sum, min_neg_sum))
  defp do_min_start_value([], sum, min_neg_sum), do: -(min(min_neg_sum, sum)) + 1
end
```