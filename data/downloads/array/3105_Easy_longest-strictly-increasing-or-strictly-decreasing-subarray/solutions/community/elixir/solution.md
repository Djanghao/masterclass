# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/5003363/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/5003363/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 314ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.50MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec longest_monotonic_subarray(nums :: [integer]) :: integer
  def longest_monotonic_subarray(nums) do
    Enum.reduce(nums, {nums |> hd, 1, 1, 1}, fn num, {prev, incr, decr, ans} ->
      incr = if num > prev do; incr + 1 else 1 end
      decr = if num < prev do; decr + 1 else 1 end
      {num, incr, decr, Enum.max([ans, incr, decr])}
    end)
    |> elem(3)
  end
end

```