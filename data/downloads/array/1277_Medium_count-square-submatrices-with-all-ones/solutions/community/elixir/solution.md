# Elixir bottom-up DP

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-square-submatrices-with-all-ones/solutions/5973009/](https://leetcode.com/problems/count-square-submatrices-with-all-ones/solutions/5973009/)

---

# Code
```Elixir []
defmodule Solution do
  @spec count_squares(matrix :: [[integer]]) :: integer
  def count_squares(matrix) do
    Enum.reduce(matrix, {0, Stream.cycle([0])}, fn row, {ans, prev} ->
      Enum.zip(row, prev)
      |> Enum.map_reduce({ans, 0, 0}, fn 
        {0, _}, {ans, _, _} -> {0, {ans, 0, 0}}
        {1, up}, {ans, left, up_left} ->
          x2 = 1 + Enum.min([up, left, up_left])
          {x2, {ans + x2, x2, up}}
      end)
      |> then(fn {row2, {ans, _, _}} -> {ans, row2} end)
    end)
    |> elem(0)
  end
end
```