# Elixir, uses tuple, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/4534723/](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/4534723/)

---

# Approach
Convert the input and target matrix into tuples for index based access. Iterate all the elements in the target matrix and check if they are equal to any of the four rotated input matrix's equivalent position. 

# Complexity
- Time complexity:
O(m * n) where m and n are the total rows and columns in target matrix

- Space complexity:
O(m * n + k * l) where k and l are the total rows and columns in input matrix

# Code
```
defmodule Solution do
  @spec find_rotation(mat :: [[integer]], target :: [[integer]]) :: boolean
  def find_rotation(mat, target) do
    target_t = to_tuple(target)
    mat_t = to_tuple(mat)
    rows = get_max_row(target_t) + 1
    res = for i <- 0..get_max_row(target_t), j <- 0..get_max_col(target_t), el = get_el(target_t, i, j), reduce: {true, true, true, true} do
      res -> res = if elem(res,0) && (el != get_el(mat_t, i, j)), do: put_elem(res, 0, false), else: res
             res = if elem(res,1) && (el != get_el(mat_t, rows - j - 1, i)), do: put_elem(res, 1, false), else: res
             res = if elem(res,2) && (el != get_el(mat_t, rows - i - 1, rows - j - 1)), do: put_elem(res, 2, false), else: res
                   if elem(res,3) && (el != get_el(mat_t, j, rows - i - 1)), do: put_elem(res, 3, false), else: res
    end
    elem(res, 0) || elem(res, 1) || elem(res, 2) || elem(res, 3)
  end

  defp get_max_row(mat), do: tuple_size(mat) - 1
  defp get_max_col(mat), do: (elem(mat, 0) |> tuple_size) - 1
  
  defp get_el(mat, r, c), do: elem(mat, r) |> elem(c)

  defp to_tuple(mat), do: Enum.map(mat, &List.to_tuple/1) |> List.to_tuple
end
```