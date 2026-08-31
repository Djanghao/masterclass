# Elixir, uses :array

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/4330793/](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/4330793/)

---

# Approach
Iterate the indices and increment the row and col index by 1 every time it is occuring. Iterate the accumulated rows and cols and update the result by 1 if row[i] + col[j] is odd.

# Complexity
- Time complexity:
O(n) + (rows * cols)

- Space complexity:
O(n) * (rows + cols)

# Code
```
defmodule Solution do
  @spec odd_cells(m :: integer, n :: integer, indices :: [[integer]]) :: integer
  def odd_cells(m, n, indices) do 
    {rows, cols} = get_incremented_rows_cols(indices, :array.new(size: m, fixed: true, default: 0), :array.new(size: n, fixed: true, default: 0))
    for x <- 0..m-1, y <- 0..n-1, reduce: 0 do
      acc -> 
        val = :array.get(x, rows) + :array.get(y, cols)
        if rem(val, 2) == 0, do: acc, else: acc + 1
    end
  end

  defp get_incremented_rows_cols([[r, c] | tl], rows, cols) do
    row_val = :array.get(r, rows)
    col_val = :array.get(c, cols)
    get_incremented_rows_cols(tl, :array.set(r, row_val + 1, rows),  :array.set(c, col_val + 1, cols))
  end
  defp get_incremented_rows_cols([], rows, cols), do: {rows, cols}
end
```