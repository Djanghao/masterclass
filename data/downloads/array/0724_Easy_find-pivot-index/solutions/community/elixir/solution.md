# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-pivot-index/solutions/4255202/](https://leetcode.com/problems/find-pivot-index/solutions/4255202/)

---

# Approach
Calculates sum of all numbers in one pass. Iterates each number in the list and checks if the sum on the left equals the sum on the right.

The sum on the right can be calculated by subtracting the sum upto the current index from the total sum.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec pivot_index(nums :: [integer]) :: integer
  def pivot_index(nums), do: do_pivot_index(nums, 0, Enum.sum(nums), 0)

  defp do_pivot_index([], prev_sum, sum, i), do: -1 
  defp do_pivot_index([hd | tl], prev_sum, sum, i) do
    curr_sum = prev_sum + hd
    if prev_sum == sum - curr_sum, do: i, else: do_pivot_index(tl, curr_sum, sum, i + 1)
  end
end
```