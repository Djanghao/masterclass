# Elixir solution use Enum.reduce().

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3931863/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3931863/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 285ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 85MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec find_prefix_score(nums :: [integer]) :: [integer]
  def find_prefix_score(nums) do
    Enum.reduce(nums, {0, [0]}, fn num, {t_max, ans} ->
      t_max = max(t_max, num)
      {t_max, [num + t_max + (ans |> hd) | ans]}
    end) |> elem(1) |> Enum.reverse() |> tl
  end
end

```