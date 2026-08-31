# Elixir, for comprehension and map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/4312227/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/4312227/)

---

# Approach
Uses for comprehension to iterate every point in the grid, find it's distance from the center and accumulate a map with distance as key and a list of points as values. Iterates the map and create a list sorted by the distance key.

# Complexity
- Time complexity:
O(rows * cols)

- Space complexity:
O(rows * cols)

# Code
```
defmodule Solution do
  @spec all_cells_dist_order(rows :: integer, cols :: integer, r_center :: integer, c_center :: integer) :: [[integer]]
  def all_cells_dist_order(rows, cols, r_center, c_center) do 
    acc = for x <- 0..rows-1, y <- 0..cols-1, reduce: %{} do
      acc -> dist = distance(x, y, r_center, c_center)
        acc = Map.update(acc, "max_dist", dist, &(max(&1, dist)))
        Map.update(acc, dist, [[x, y]], &([[x, y] | &1]))
    end
    convert_to_list(acc, acc["max_dist"], [])
  end

  defp convert_to_list(dist_map, dist, acc) when dist >= 0, do: convert_to_list(dist_map, dist - 1, prepend(dist_map[dist], acc))
  defp convert_to_list(_, _, acc), do: acc

  defp prepend([hd | tl], acc), do: prepend(tl, [hd | acc])
  defp prepend([], acc), do: acc

  defp distance(x, y, x1, y1), do: abs(x - x1) + abs(y - y1)
end
```