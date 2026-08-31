# Elixir | 100% | O(m*n) | Nested Enum.reduce

**Author:** tyulpan
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/3613454/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/3613454/)

---

# Code
```
defmodule Solution do
  @spec count_negatives(grid :: [[integer]]) :: integer
  def count_negatives(grid) do
    Enum.reduce(grid, 0, fn row, acc ->
      Enum.reduce(row, 0, fn value, counter ->
        if value < 0, do: counter + 1, else: counter
      end) + acc
    end)
  end
end
```