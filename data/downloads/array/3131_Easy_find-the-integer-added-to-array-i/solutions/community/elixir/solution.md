# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5109314/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5109314/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 314ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 71.40MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec added_integer(nums1 :: [integer], nums2 :: [integer]) :: integer
  def added_integer(nums1, nums2) do
    Enum.min(nums2) - Enum.min(nums1)
  end
end

```