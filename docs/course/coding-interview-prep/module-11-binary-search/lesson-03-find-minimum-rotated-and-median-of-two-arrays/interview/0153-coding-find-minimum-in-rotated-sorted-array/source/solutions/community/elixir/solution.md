# Non-optimal binary search solution

**Author:** joeyates
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/4790004/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/4790004/)

---

# Approach
As Elixir does not have $$O(1)$$ time List access, it's
difficult to see how an $$O(ln(n))$$ solution can be found.

# Complexity
- Time complexity: $$O(nln(n))$$

- Space complexity: $$O(n)$$

# Code
```
defmodule Solution do
  @spec find_min(nums :: [integer]) :: integer
  def find_min([n]), do: n

  def find_min(nums) do
    count = length(nums)
    mid = div(count, 2)
    left = Enum.slice(nums, 0, mid)
    remainder = count - mid
    right = Enum.slice(nums, mid, remainder)
    min(find_min(left), find_min(right))
  end
end
```