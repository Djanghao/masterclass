# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-range-i/solutions/4285547/](https://leetcode.com/problems/smallest-range-i/solutions/4285547/)

---

# Approach
Uses tail call recursion to find the min and max numbers in the list. Returns the result based on the difference between min, max and the k value.

If the difference is less than or equal to 2 * k, then the result is zero, else the result is difference - 2 * k.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec smallest_range_i(nums :: [integer], k :: integer) :: integer
  def smallest_range_i(nums, k) do
    {min, max} = get_min_max(nums, 10001, -1)
    max(0, (max - min) - (2 * k))
  end

  defp get_min_max([], min, max), do: {min, max}
  defp get_min_max([hd | tl], min, max) do
    min = if hd < min, do: hd, else: min
    max = if hd > max, do: hd, else: max
    get_min_max(tl, min, max)
  end
end
```