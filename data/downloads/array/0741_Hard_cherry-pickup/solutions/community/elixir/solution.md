# Elixir DP Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/cherry-pickup/solutions/2089304/](https://leetcode.com/problems/cherry-pickup/solutions/2089304/)

---

```elixir
defmodule Solution do
  @min -300

  @spec cherry_pickup(grid :: [[integer]]) :: integer
  def cherry_pickup(grid) do
    n = Enum.count(grid) - 1

    grid =
      grid
      |> Enum.with_index()
      |> Enum.reduce(%{}, fn {row, i}, acc ->
        row
        |> Enum.with_index()
        |> Enum.reduce(acc, fn {n, j}, acc ->
          Map.put(acc, {i, j}, n)
        end)
      end)

    dp = %{{0, 0, 0} => grid[{0, 0}]}

    for x1 <- 0..n, y1 <- 0..n, x2 <- 0..n, reduce: dp do
      dp ->
        y2 = x1 + y1 - x2

        if Map.get(dp, {x1, y1, x2}, @min) > 0 || y2 < 0 || y2 > n || grid[{x1, y1}] == -1 ||
             grid[{x2, y2}] == -1 do
          dp
        else
          pre =
            Enum.max([
              Map.get(dp, {x1 - 1, y1, x2 - 1}, @min),
              Map.get(dp, {x1 - 1, y1, x2}, @min),
              Map.get(dp, {x1, y1 - 1, x2 - 1}, @min),
              Map.get(dp, {x1, y1 - 1, x2}, @min)
            ])

          if pre < 0 do
            dp
          else
            cherries =
              (x1 == x2 && grid[{x1, y1}]) ||
                grid[{x1, y1}] + grid[{x2, y2}]

            Map.put(dp, {x1, y1, x2}, pre + cherries)
          end
        end
    end
    |> Map.get({n, n, n}, 0)
  end
end
```