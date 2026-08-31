# Beats 100/100

**Author:** kkalb
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/6094079/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/6094079/)

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
```elixir []
defmodule Solution do
  @spec search_range(nums :: [integer], target :: integer) :: [integer]
  def search_range(nums, target) do
    solve(nums, target, -1, -1, 0)
  end

  defp solve([num | []], target, -1, -1, _idx) when num > target do
    [-1, -1]
  end

  defp solve([num | []], target, -1, -1, _idx) when num < target do
    [-1, -1]
  end

  defp solve([num | nums], target, -1, -1, idx) when num == target do
    solve(nums, target, idx, idx, idx + 1)
  end

  defp solve([num | nums], target, lp, _rp, idx) when num == target do
    solve(nums, target, lp, idx, idx + 1)
  end

  defp solve([num | nums], target, lp, rp, idx) when num < target do
    solve(nums, target, lp, rp, idx + 1)
  end

  defp solve(_nums, _target, lp, rp, _idx) do
    [lp, rp]
  end
end
```