# Elixir, Kadane's algorithm, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/4579282/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/4579282/)

---

# Approach
Uses Kadane's algorithm to traverse the numbers, keep track of the minimum number and the maximum difference

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec maximum_difference(nums :: [integer]) :: integer
  def maximum_difference([hd | tl]), do: do_maximum_difference(tl, hd, -1)

  defp do_maximum_difference([hd | tl], min, max_difference) do
    cond do
      hd <= min -> do_maximum_difference(tl, hd, max_difference)
      true -> do_maximum_difference(tl, min, max(max_difference, hd - min))
    end
  end
  defp do_maximum_difference(_, _, max_difference), do: max_difference
end
```