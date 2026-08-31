# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/4590500/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/4590500/)

---

# Approach
Iterate the number and their indexes to find the result.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec smallest_equal(nums :: [integer]) :: integer
  def smallest_equal(nums), do: do_smallest_equal(nums, 0)

  defp do_smallest_equal([hd | tl], i) do
    if rem(i, 10) == hd, do: i, else: do_smallest_equal(tl, i + 1)
  end
  defp do_smallest_equal(_, _), do: -1
end
```