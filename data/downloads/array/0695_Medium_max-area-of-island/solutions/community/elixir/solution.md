# Elixir - DFS

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-area-of-island/solutions/2283799/](https://leetcode.com/problems/max-area-of-island/solutions/2283799/)

---

```elixir
defmodule Solution do
  @spec max_area_of_island(grid :: [[integer]]) :: integer
  def max_area_of_island(grid) do
    grid =
      for {row, i} <- Enum.with_index(grid),
          {1, j} <- Enum.with_index(row),
          into: MapSet.new(),
          do: {i, j}

    max_isle(grid, 0)
  end
    
  defp max_isle(grid, max_area) do
    case Enum.at(grid, 0) do
      nil ->
        max_area
      coord ->
        {area, grid} = area(grid, coord)
        max_isle(grid, max(max_area, area))
    end
  end
    
  defp area(grid, {i, j} = coord) do
    if MapSet.member?(grid, coord) do
      grid = MapSet.delete(grid, coord)
      {a1, grid} = area(grid, {i, j + 1})
      {a2, grid} = area(grid, {i, j - 1})
      {a3, grid} = area(grid, {i + 1, j})
      {a4, grid} = area(grid, {i - 1, j})
      {a1 + a2 + a3 + a4 + 1, grid}
    else
      {0, grid}
    end
  end
end
```