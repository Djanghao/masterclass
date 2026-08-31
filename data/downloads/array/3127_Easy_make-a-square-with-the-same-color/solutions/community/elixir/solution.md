# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5107966/](https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5107966/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 313ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.12MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec can_make_square(grid :: [[char]]) :: boolean
  def can_make_square(grid) do
    Enum.reduce_while(0..1, {false, 0}, fn i, {res, i} ->
      {res, _j} =
        Enum.reduce_while(0..1, {res, 0}, fn j, {_res, j} ->
          if is_possible(grid, i, j) do
            {:halt, {true, j + 1}}
          else
            {:cont, {false, j + 1}}
          end
        end)
      if res do
        {:halt, {true, i + 1}}
      else
        {:cont, {false, i + 1}}
      end
    end)
    |> elem(0)
  end

  @spec is_possible(grid :: [[char]], i :: integer, j :: integer) :: bool
  def is_possible(grid, i, j) do
    {cnt_w, cnt_b} =
      Enum.reduce(i..i+1, {0, 0}, fn x, {cnt_w, cnt_b} ->
        Enum.reduce(j..j+1, {cnt_w, cnt_b}, fn y, {cnt_w, cnt_b} ->
          if Enum.at(Enum.at(grid, x), y) == ?W do
            {cnt_w + 1, cnt_b}
          else
            {cnt_w, cnt_b + 1}
          end
        end)
      end)
    if cnt_w > 2 or cnt_b > 2 do
      true
    else
      false
    end
  end
end

```