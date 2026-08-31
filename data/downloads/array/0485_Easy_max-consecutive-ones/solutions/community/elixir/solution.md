# Simple Solution

**Author:** Ayoush_Chourasia
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/5151027/](https://leetcode.com/problems/max-consecutive-ones/solutions/5151027/)

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
  @spec find_max_consecutive_ones(nums :: [integer]) :: integer
  def find_max_consecutive_ones(nums) do
    result = Enum.reduce(nums, {0, 0}, fn x, acc ->
      if x == 1 do
        {elem(acc, 0), elem(acc, 1) + 1}
      else
        {max(elem(acc, 0), elem(acc, 1)), 0}
      end
    end)

    max(elem(result, 0), elem(result, 1))
  end
end

```