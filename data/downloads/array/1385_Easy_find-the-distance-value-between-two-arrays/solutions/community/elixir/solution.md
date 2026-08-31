# Elixir 100% 1 Line

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/4898741/](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/4898741/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  def find_the_distance_value(arr1, arr2, d) do
    Enum.count(arr1, fn nums ->
      Enum.all?(arr2, fn nums2 -> abs(nums2 - nums) > d end)
    end)
  end
end



```