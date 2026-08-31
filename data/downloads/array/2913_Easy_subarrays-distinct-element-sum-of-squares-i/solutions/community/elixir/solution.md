# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/4241434/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/4241434/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 770ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 64.5MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec sum_counts(nums :: [integer]) :: integer
  def sum_counts(nums) do
    m = Enum.count(nums)
    Enum.reduce(0..m-1, 0, fn i, ans ->
      Enum.reduce(i..m-1, ans, fn j, ans ->
        temp = MapSet.size(MapSet.new(Enum.slice(nums, i..j)))
        ans + temp*temp
      end)
    end)
  end
end

```