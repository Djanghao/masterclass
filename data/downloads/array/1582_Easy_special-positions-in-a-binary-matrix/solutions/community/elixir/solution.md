# Elixir, uses maps

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4388422/](https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4388422/)

---

# Approach
Iterate all the elements in the matrix and keep track of two maps with row and col indexes as keys and the 1 counts as values. Collect all the point's indexes that have one. Iterate the collected one points and check if their row index and col index in the maps have only one ones each.

# Complexity
- Time complexity:
O(m * n)

- Space complexity:
O(m + n)

# Code
```
defmodule Solution do
  @spec num_special(mat :: [[integer]]) :: integer
  def num_special(mat), do: do_num_special(mat, 0, %{}, %{}, [])

  defp do_num_special([row | tl], row_i, row_one_count, col_one_count, one_points) do
    {row_one_count, col_one_count, one_points} = count_row(row, row_i, 0, row_one_count, col_one_count, one_points)
    do_num_special(tl, row_i + 1, row_one_count, col_one_count, one_points)
  end
  defp do_num_special(_, _, row_one_count, col_one_count, one_points) do
    for [x, y] <- one_points, row_one_count[x] == 1, col_one_count[y] == 1, reduce: 0 do
      count -> count + 1
    end
  end

  defp count_row([hd | tl], i, j, row_one_count, col_one_count, one_points) do
    cond do
      hd == 0 -> count_row(tl, i, j + 1, row_one_count, col_one_count, one_points)
      true -> 
        row_one_count = Map.update(row_one_count, i, 1, &(&1 + 1))
        col_one_count = Map.update(col_one_count, j, 1, &(&1 + 1))
        count_row(tl, i, j + 1, row_one_count, col_one_count, [[i, j] | one_points])
    end
  end
  defp count_row(_, _, _, row_one_count, col_one_count, one_points), do: {row_one_count, col_one_count, one_points}
end
```