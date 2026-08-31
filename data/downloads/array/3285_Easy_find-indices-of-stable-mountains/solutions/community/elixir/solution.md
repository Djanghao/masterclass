# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/5795177/](https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/5795177/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 0ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.74MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec stable_mountains(height :: [integer], threshold :: integer) :: [integer]
  def stable_mountains(height, threshold) do
    Enum.reduce(height |> tl, {height |> hd, 1, []}, fn hei, {prev, i, ans} ->
      if prev > threshold do
        {hei, i + 1, [i] ++ ans}
      else
        {hei, i + 1, ans}
      end
    end)
    |> elem(2)
    |> Enum.reverse()
  end
end

```