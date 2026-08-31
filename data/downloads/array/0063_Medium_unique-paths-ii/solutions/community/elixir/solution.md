# Elixir solution by calculating number of ways to reach each cell

**Author:** tiagoavila09
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-paths-ii/solutions/3922439/](https://leetcode.com/problems/unique-paths-ii/solutions/3922439/)

---

# Complexity
- Time complexity: $$O(m*n)$$ where m is the number of rows and n the number of columns
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m*n)$$ because a map with each cell is created to store the possible ways to reach a cell
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec unique_paths_with_obstacles(obstacle_grid :: [[integer]]) :: integer
  def unique_paths_with_obstacles([[0]]), do: 1
  def unique_paths_with_obstacles([[1]]), do: 0
  def unique_paths_with_obstacles(obstacle_grid) do
    graph = obstacle_grid
    |> parse_obstacle_grid_to_list_with_row_col_values()
    |> iterate_over_cells_and_calculate_number_of_ways()
    |> get_number_of_ways_to_reach_target_cell(obstacle_grid)
  end

  defp parse_obstacle_grid_to_list_with_row_col_values(obstacle_grid) do
    obstacle_grid
    |> Enum.with_index()
    |> Enum.flat_map(fn {row_data, row} -> 
      row_data
      |> Enum.with_index()
      |> Enum.map(fn {obstacle_value, col} -> {{row, col}, obstacle_value} end)
    end)
  end

  defp iterate_over_cells_and_calculate_number_of_ways(obstacle_list) do
    obstacle_list
    |> Enum.reduce(%{}, &calculate_number_of_ways_to_reach_cell/2)
  end

  defp calculate_number_of_ways_to_reach_cell({{0, 0}, 0}, acc), do: acc |> Map.put({0, 0}, 1)
  defp calculate_number_of_ways_to_reach_cell({{0, 0}, 1}, acc), do: acc |> Map.put({0, 0}, 0)
  defp calculate_number_of_ways_to_reach_cell({{row, col}, 0}, acc) do
    ways_count = [{row - 1, col}, {row, col - 1}]
    |> Enum.reduce(0, fn {neighbor_row, neighbor_col}, count_acc -> 
      count_acc + Map.get(acc, {neighbor_row, neighbor_col}, 0)
    end)

    acc |> Map.put({row, col}, ways_count)
  end
  defp calculate_number_of_ways_to_reach_cell({{row, col}, 1}, acc) do
    acc |> Map.put({row, col}, 0)
  end

  defp get_number_of_ways_to_reach_target_cell(unique_paths_map, obstacle_grid) do
    target_row = length(obstacle_grid) - 1 
    target_col = length(hd(obstacle_grid)) - 1

    unique_paths_map |> Map.get({target_row, target_col})
  end
end
```