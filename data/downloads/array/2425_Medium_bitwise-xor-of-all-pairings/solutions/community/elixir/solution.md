# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/4165906/](https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/4165906/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 302ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 83MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec xor_all_nums(nums1 :: [integer], nums2 :: [integer]) :: integer
  def xor_all_nums(nums1, nums2) do
    x = Enum.reduce(nums1, 0, fn num1, x -> Bitwise.bxor(x, num1) end)
    y = Enum.reduce(nums2, 0, fn num2, y -> Bitwise.bxor(y, num2) end)
    Bitwise.bxor(rem(Enum.count(nums1), 2)*y, rem(Enum.count(nums2), 2)*x)
  end
end

```