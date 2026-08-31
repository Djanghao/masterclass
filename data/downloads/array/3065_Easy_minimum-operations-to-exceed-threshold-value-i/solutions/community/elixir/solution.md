# Elixir solition

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/4845461/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/4845461/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 374ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 71.98MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec min_operations(nums :: [integer], k :: integer) :: integer
  def min_operations(nums, k) do
    nums
    |> Enum.filter(fn(num) -> num < k end)
    |> Enum.count
  end
end

```