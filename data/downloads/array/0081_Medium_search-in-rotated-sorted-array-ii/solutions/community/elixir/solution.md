# [Elixir] || Enum Module

**Author:** KettelBear
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/3888466/](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/3888466/)

---

# Intuition
Elixir does not do binary search in linked lists.

# Approach
I could convert the list to a tuple, so that I can access by index, but that is the same time complexity as just searching the list. Then there is the added time of searching the tuple.

With that said, just use the Enum module.

# Complexity
- Time complexity: $$O(n)$$

# Code
```
defmodule Solution do
  @spec search(nums :: [integer], target :: integer) :: boolean
  def search(nums, target), do: Enum.member?(nums, target)
end
```