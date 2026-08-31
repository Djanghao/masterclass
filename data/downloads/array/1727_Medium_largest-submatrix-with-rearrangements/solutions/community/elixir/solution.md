# Elixir Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4627301/](https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4627301/)

---

```
defmodule Solution do
  @spec largest_submatrix(matrix :: [[integer]]) :: integer
  def largest_submatrix(matrix) do
    cols = matrix |> hd() |> length()
    heights = Stream.repeatedly(fn -> 0 end) |> Enum.take(cols)

    matrix
    |> Enum.reduce({heights, 0}, fn row, {heights, acc} ->
      heights =
        Enum.zip(row, heights)
        |> Enum.map(fn {a, b} ->
          if a == 0, do: 0, else: a + b
        end)

      {heights, max(acc, max_submatrix(heights))}
    end)
    |> elem(1)
  end

  def max_submatrix(heights) do
    heights
    |> Enum.sort(&>=/2)
    |> Enum.with_index(1)
    |> Enum.reduce(0, fn {h, i}, acc ->
      max(acc, h * i)
    end)
  end
end

```