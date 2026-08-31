# [Elixir] Dijkstra's algorithm

**Author:** juumixx
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/2760084/](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/2760084/)

---

First we convert the input to a map of `{x, y}` coordiinates.
Then we iterate recursively through our map, beginning at `{0, 0} => k`.
Paths not in our map or where `k < 0` get eliminated immediately because they are unreachable.
For each of the `next` positions, we find the maximum possible `k`.
As soon as we found a path to the goal, we return it.
If there are no possible positions or after `width*height` steps it's impossible to get to the goal we return `-1`. This is not optimal, we could keep track of all positions we have been previously (with equal or greater `k`) and stop when there are no new positions, but I was too lazy to implement this because this solution was fast enough for 100% (=
Fell free to share your optimized solution.

```
defmodule Solution do
  import Enum, only: [with_index: 1, count: 1]

  @spec shortest_path(grid :: [[integer]], k :: integer) :: integer
  def shortest_path(grid, k) do
    map =
      for {row, y} <- with_index(grid),
          {i, x} <- with_index(row),
          into: %{} do
        {{x, y}, i}
      end

    goal = {count(List.first(grid)) - 1, count(grid) - 1}
    dijkstra(map, %{{0, 0} => k}, goal, 0)
  end

  defp dijkstra(_map, positions, _goal, _steps) when map_size(positions) == 0, do: -1
  defp dijkstra(_map, _positions, {x, y}, steps) when steps > (x + 1) * (y + 1), do: -1

  defp dijkstra(map, positions, goal, steps) do
    if positions[goal] do
      steps
    else
      next =
        for {{x, y}, k} <- positions,
            {x, y} <- [
              {x - 1, y},
              {x + 1, y},
              {x, y - 1},
              {x, y + 1}
            ],
            Map.has_key?(map, {x, y}),
            k = k - map[{x, y}],
            k >= 0,
            reduce: %{} do
          acc -> Map.update(acc, {x, y}, k, fn v -> max(k, v) end)
        end

      dijkstra(map, next, goal, steps + 1)
    end
  end
end
```
updated: using `for`