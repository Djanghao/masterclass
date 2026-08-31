# Elixir - 1-Liner

**Author:** Aetherus
**Votes:** 2
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/5400007/](https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/5400007/)

---

# Code
```Elixir
defmodule Solution do
  @spec intersect(nums1 :: [integer], nums2 :: [integer]) :: [integer]
  def intersect(nums1, nums2) do
    nums1 -- nums1 -- nums2
  end
end
```