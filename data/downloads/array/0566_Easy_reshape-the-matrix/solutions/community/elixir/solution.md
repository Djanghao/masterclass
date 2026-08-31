# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/reshape-the-matrix/solutions/4224823/](https://leetcode.com/problems/reshape-the-matrix/solutions/4224823/)

---

# Approach
Uses tail call recursion to iterate the elements in the matrix one by one and creates the new matrix of required dimensions.

# Complexity
- Time complexity:
O(min(r * c, m * n)) where m number of rows in the input matrix and n is the number columns in the input matrix

- Space complexity:
O(r * c)

# Code
```
defmodule Solution do
  @spec matrix_reshape(mat :: [[integer]], r :: integer, c :: integer) :: [[integer]]
  def matrix_reshape(mat, r, c), do: do_matrix_reshape(mat, {0, 0}, {r, c}, [], []) || mat

  defp do_matrix_reshape(mat, {i, j}, {r, c}, new_row, res) do
    cond do
      j == c -> do_matrix_reshape(mat, {i + 1, 0}, {r, c}, [], [Enum.reverse(new_row) | res])
      i == r -> if mat == [[]], do: Enum.reverse(res), else: nil
      mat == [[]] -> nil 
      hd(mat) == [] -> do_matrix_reshape(tl(mat), {i, j}, {r, c}, new_row, res)
      true -> [[el | row_tl] | mat_tl] = mat
              do_matrix_reshape([row_tl | mat_tl], {i, j + 1}, {r, c}, [el | new_row], res)
    end
  end
end
```