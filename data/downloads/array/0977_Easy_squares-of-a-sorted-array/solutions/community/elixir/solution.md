# Elixir One Liner (Beats 100%)

**Author:** lreid295
**Votes:** 0
**Link:** [https://leetcode.com/problems/squares-of-a-sorted-array/solutions/4811171/](https://leetcode.com/problems/squares-of-a-sorted-array/solutions/4811171/)

---

# Intuition
Map the squared values then sort.

# Complexity
- Time complexity: `O(n)`

- Space complexity: `O(n)`

# Code
```
defmodule Solution do
  @spec sorted_squares(nums :: [integer]) :: [integer]
  def sorted_squares(nums) do
    nums |> Enum.map(& &1*&1) |> Enum.sort()
  end
end
```