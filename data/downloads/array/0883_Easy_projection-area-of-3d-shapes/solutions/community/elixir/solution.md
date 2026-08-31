# Elixir, tail call recursion, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/4281585/](https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/4281585/)

---

# Approach
Uses tail call recursion to iterate every element in the grid. Keeps track of total non zero elements, the sum of maximum elements in all rows and the sum of maximum elements in all columns. The result will equals the sum of the above three.

Plane XY -> You look from the top and hence area will be total non zero elements

Plane XZ -> You look from the front and hence the area will be sum of maximum element in each column

Plane YZ -> You look from the size and hence the area will the sum of maximum element in each row

# Complexity
- Time complexity:
O(n) where n is the total number of elements in the grid

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec projection_area(grid :: [[integer]]) :: integer
  def projection_area(grid), do: do_projection_area(grid, 0, %{}, 0)
  
  defp do_projection_area([], cubes, col_max_map, row_max_sum), do: cubes + row_max_sum + (Map.values(col_max_map) |> Enum.sum)
  defp do_projection_area([row | tl], cubes, col_max_map, row_max_sum) do 
    {row_cubes, col_max_map, row_max} = get_row_col_max(row, 0, 0, col_max_map, 0)
    do_projection_area(tl, cubes + row_cubes, col_max_map, row_max_sum + row_max)
  end

  defp get_row_col_max([], row_cubes, _col, col_max_map, row_max), do: {row_cubes, col_max_map, row_max}
  defp get_row_col_max([0 | tl], row_cubes, col, col_max_map, row_max), do: get_row_col_max(tl, row_cubes, col + 1, col_max_map, row_max)
  defp get_row_col_max([hd | tl], row_cubes, col, col_max_map, row_max) do 
    col_max = Map.get(col_max_map, col, 0)
    col_max_map = if hd > col_max, do: Map.put(col_max_map, col, hd), else: col_max_map
    get_row_col_max(tl, row_cubes + 1, col + 1, col_max_map, max(row_max, hd))
  end
end
```