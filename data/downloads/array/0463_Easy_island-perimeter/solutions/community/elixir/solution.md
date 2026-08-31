# Elixir - Map Solution

**Author:** Nono31
**Votes:** 1
**Link:** [https://leetcode.com/problems/island-perimeter/solutions/5039561/](https://leetcode.com/problems/island-perimeter/solutions/5039561/)

---

# Code
```
defmodule Solution do
  @spec island_perimeter(grid :: [[integer]]) :: integer
  def island_perimeter(grid) do
    lands = grid |> Enum.with_index() |> Enum.reduce(%{}, fn {line, i}, lands ->
      line |> Enum.with_index() |> Enum.reduce(lands, fn {is_land?, j}, lands ->
        if is_land? == 0 do
          lands
        else
          Map.put(lands, {i, j}, 0)
        end
      end)
    end)
    lands |> Map.keys() |> Enum.reduce(0, fn {i, j}, count ->
      count = count + Map.get(lands, {i - 1 , j}, 1) +
        Map.get(lands, {i + 1 , j}, 1) +
        Map.get(lands, {i, j - 1}, 1) +
        Map.get(lands, {i, j + 1}, 1)
    end)
  end
end
```