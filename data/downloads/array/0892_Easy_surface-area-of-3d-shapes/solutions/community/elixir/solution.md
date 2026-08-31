# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/4282009/](https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/4282009/)

---

# Approach
Uses tail call recursion to iterate every element in the grid and accumulates surface area based on the adjacent elements.

The total surface area of an element = sum of
top = 1
bottom = 1
left = abs(element - previous element in the row)
right = abs(element - next element in the row)
up = abs(element - previous row element in the same column)
down = abs(element - next row element in the same column)

# Complexity
- Time complexity:
O(n) where n is the total number of elements in the grid

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec surface_area(grid :: [[integer]]) :: integer
  def surface_area(grid), do: do_surface_area(grid, 0, %{})

  defp do_surface_area([], area, prev_row), do: area + (Map.values(prev_row) |> Enum.sum)
  defp do_surface_area([row | tl], area, prev_row) do 
    {row_area, prev_row} = get_row_area(0, row, 0, 0, prev_row)
    do_surface_area(tl, area + row_area, prev_row)
  end

  defp get_row_area(prev, [], _col, area, prev_row), do: {area + prev, prev_row}
  defp get_row_area(prev, [hd | tl], col, area, prev_row) do
    area = area + abs(prev - hd) + abs(Map.get(prev_row, col, 0) - hd) + (if hd == 0, do: 0, else: 2)
    get_row_area(hd, tl, col + 1, area, Map.put(prev_row, col, hd))
  end
end
```