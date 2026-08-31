# Elixir - MapSet - Sorting - DFS - Memo

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5048126/](https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5048126/)

---

# Approach
Create a map of farmlands.
Sort them up.
Visit group keeping track of visited lands.


# Code
```
defmodule Solution do
  @spec find_farmland(grid :: [[integer]]) :: [[integer]]
  def find_farmland(grid) do
    lands = grid |> Enum.with_index() |> Enum.reduce(MapSet.new(), fn {line, i}, lands ->
      line |> Enum.with_index() |> Enum.reduce(lands, fn {is_land?, j}, lands ->
        if is_land? == 0 do
          lands
        else
          MapSet.put(lands, {i, j})
        end
      end)
    end)
    
    lands
    |> Enum.sort()
    |> Enum.reduce({MapSet.new(), []}, fn {i, j} = land, {visited, res}->
      if MapSet.member?(visited, land) do
        {visited, res}
      else
        {visited, [x, y]} = mesure_farmland(visited, lands, land)
        {visited, [[i, j, x, y] | res]}
      end
    end) |> elem(1)
  end

  defp mesure_farmland(visited, lands, {i, j} = land) do
    with true <- MapSet.member?(lands, land),
         false <- MapSet.member?(visited, land) do
      visited = MapSet.put(visited, land)
      {visited, [x_right, y_right]} = mesure_farmland(visited, lands, {i + 1, j})
      {visited, [x_down, y_down]} = mesure_farmland(visited, lands, {i, j + 1})
      x = max(x_right, x_down) |> max(i)
      y = max(y_right, y_down) |> max(j)
      {visited, [x, y]}
    else
      _ -> {visited, [-1, -1]}
    end
  end
end
```