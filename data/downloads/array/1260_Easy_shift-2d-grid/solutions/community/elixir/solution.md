# Elixir, uses tuple and tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/shift-2d-grid/solutions/4331197/](https://leetcode.com/problems/shift-2d-grid/solutions/4331197/)

---

# Approach
Convert the list grid into a tuple grid for index based access.
Visualise the grid as a linear structure with a linear index

For e.g. for a 3 x 3 grid
[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]
0,     1,     2,     3,     4,     5,     6,     7,     8

Find the shifted index for the first or last element in the linear grid and use this index to get the subsequent shifted indexes. Create a result grid with shifted index elements

# Complexity
- Time complexity:
O(m * n)

- Space complexity:
O(m * n)

# Code
```
defmodule Solution do
  @spec shift_grid(grid :: [[integer]], k :: integer) :: [[integer]]
  def shift_grid(grid, k) do
    grid = Enum.map(grid, &List.to_tuple/1) |> List.to_tuple
    cols = elem(grid, 0) |> tuple_size
    total_elements = get_total_elements(grid)
    last_linear_ind = total_elements - 1
    last_shifted_linear_ind = shift_linear_ind(last_linear_ind, k, total_elements)
    do_shift_grid(last_linear_ind, last_shifted_linear_ind, cols, grid, [], [])
  end

  defp do_shift_grid(linear_ind, shifted_linear_ind, cols, grid, shifted_row, shifted_grid) when linear_ind >= 0 do
    shifted_linear_ind = if shifted_linear_ind >= 0, do: shifted_linear_ind, else: get_total_elements(grid) - 1
    shifted_row = [get_linear_ind_el(shifted_linear_ind, cols, grid) | shifted_row]
    cond do
      rem(linear_ind, cols) != 0  -> do_shift_grid(linear_ind - 1, shifted_linear_ind - 1, cols, grid, shifted_row, shifted_grid)
      true -> do_shift_grid(linear_ind - 1, shifted_linear_ind - 1, cols, grid, [], [shifted_row | shifted_grid])
    end
  end 
  defp do_shift_grid(_, _, _, _, _, shifted_grid), do: shifted_grid

  defp get_linear_ind_el(linear_ind, cols, grid), do: elem(grid, div(linear_ind, cols)) |> elem(rem(linear_ind, cols))

  defp get_total_elements(tuple), do: tuple_size(tuple) * (elem(tuple, 0) |> tuple_size)

  defp shift_linear_ind(i, k, n) do 
    shifted_ind = i - rem(k, n)
    if shifted_ind < 0, do: n + shifted_ind, else: shifted_ind
  end
end
```