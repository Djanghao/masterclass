# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solutions/5014637/](https://leetcode.com/problems/best-sightseeing-pair/solutions/5014637/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 377ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 114.22MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec max_score_sightseeing_pair(values :: [integer]) :: integer
  def max_score_sightseeing_pair(values) do
    Enum.reduce(values |> tl, {1, 0, values |> hd}, fn val_i, {i, ans, prev}->
      {i + 1, max(ans, val_i - i + prev), max(prev, val_i + i)}
    end)
    |> elem(1)
  end
end

```