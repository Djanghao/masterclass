# Elixir, uses Enum.sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-perimeter-triangle/solutions/4301119/](https://leetcode.com/problems/largest-perimeter-triangle/solutions/4301119/)

---

# Approach
Sorts the nums in descending order. Then checks the first three lengths that form a valid triangle and returns the sum of all 3 lengths.

# Complexity
- Time complexity:
O(nlog(n))

- Space complexity:
O(nlog(n))

# Code
```
defmodule Solution do
  @spec largest_perimeter(nums :: [integer]) :: integer
  def largest_perimeter(nums), do: do_largest_perimeter(Enum.sort(nums, :desc))

  defp do_largest_perimeter([x, y, z | tl]), do: if y + z > x, do: x + y + z, else: do_largest_perimeter([y, z | tl])
  defp do_largest_perimeter(_), do: 0
end
```