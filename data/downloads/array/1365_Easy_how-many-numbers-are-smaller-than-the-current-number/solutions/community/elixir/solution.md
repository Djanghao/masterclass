# Simple elixir solution with map and filter

**Author:** karlthomas3
**Votes:** 0
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/5035986/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/5035986/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Extremely simple with map and filter
# Approach
<!-- Describe your approach to solving the problem. -->
Use Enum.map to iterate the list and for each element filter the smaller numbers and return the length.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
defmodule Solution do
  @spec smaller_numbers_than_current(nums :: [integer]) :: [integer]
  def smaller_numbers_than_current(nums) do
    nums |> Enum.map(fn num -> Enum.filter(nums, &(&1 < num)) |> length() end)
  end
end
```