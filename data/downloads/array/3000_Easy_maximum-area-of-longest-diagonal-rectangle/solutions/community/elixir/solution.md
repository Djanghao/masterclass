# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4560165/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4560165/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 338ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.46MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec area_of_max_diagonal(dimensions :: [[integer]]) :: integer
  def area_of_max_diagonal(dimensions) do
    Enum.reduce(dimensions, {0, 0}, fn rect, {max_diag, max_area}->
      l = rect |> hd
      w = rect |> tl |> hd
      area = l*w
      diag = l*l + w*w
      if diag > max_diag or diag == max_diag and area > max_area do
        {diag, area}
      else
        {max_diag, max_area}
      end
    end) |> elem(1)
  end
end

```