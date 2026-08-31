# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/ant-on-the-boundary/solutions/4693511/](https://leetcode.com/problems/ant-on-the-boundary/solutions/4693511/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 312ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 71.99MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec return_to_boundary_count(nums :: [integer]) :: integer
  def return_to_boundary_count(nums) do
    Enum.reduce(nums, {0, 0}, fn num, {ans, pos} ->
      pos = pos + num
      if pos == 0 do
        {ans + 1, pos}
      else
        {ans, pos}
      end
    end) |> elem(0)
  end
end

```