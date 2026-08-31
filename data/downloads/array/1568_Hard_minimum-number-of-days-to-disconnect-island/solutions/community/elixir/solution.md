# Elixir - Flood Fill

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5620029/](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5620029/)

---

Pure FP languages make this problem easier than solving it in imperative languages, because we don't need back tracking. We have peristent data structures.

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$

# Code
```elixir
defmodule Solution do
  @spec min_days(grid :: [[integer]]) :: integer
  def min_days(grid) do
    land =
      for {row, i} <- Stream.with_index(grid),
          {1, j} <- Stream.with_index(row),
          into: MapSet.new(),
          do: {i, j}

    cond do
      disconnected?(land) -> 0
      land |> Stream.map(&MapSet.delete(land, &1)) |> Enum.any?(&disconnected?/1) -> 1
      true -> 2
    end
  end

  defp disconnected?(land) do
    case Enum.at(land, 0) do
      nil -> true
      tile -> land |> flood(tile) |> Enum.any?()
    end
  end

  defp flood(land, {i, j} = tile) do
    if tile in land do
      land
      |> MapSet.delete(tile)
      |> flood({i - 1, j})
      |> flood({i + 1, j})
      |> flood({i, j - 1})
      |> flood({i, j + 1})
    else
      land
    end
  end
end
```