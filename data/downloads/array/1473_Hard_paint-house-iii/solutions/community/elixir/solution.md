# Elixir DP Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house-iii/solutions/2259103/](https://leetcode.com/problems/paint-house-iii/solutions/2259103/)

---

```elixir
defmodule Solution do
  @max 10_000_000

  @spec min_cost(
          houses :: [integer],
          cost :: [[integer]],
          m :: integer,
          n :: integer,
          target :: integer
        ) :: integer
  def min_cost(houses, cost, m, n, target) do
    hs =
      houses
      |> Enum.with_index()
      |> Enum.reduce(%{}, fn {h, i}, acc ->
        Map.put(acc, i, h)
      end)

    cs =
      cost
      |> Enum.with_index()
      |> Enum.reduce(%{}, fn {row, i}, acc ->
        row
        |> Enum.with_index()
        |> Enum.reduce(acc, fn {c, j}, acc ->
          Map.put(acc, {i, j}, c)
        end)
      end)

    # dp[house][group][color]
    dp =
      for i <- 0..m, j <- 0..m, k <- 0..n, reduce: %{} do
        acc ->
          if i == 0 && j == 0 do
            Map.put(acc, {i, j, k}, 0)
          else
            Map.put(acc, {i, j, k}, @max)
          end
      end

    dp =
      for i <- 1..m, j <- 1..i, reduce: dp do
        acc ->
          if hs[i - 1] == 0 do
            for color <- 1..n, reduce: acc do
              acc ->
                cal_cost(acc, n, cs[{i - 1, color - 1}], i, j, color)
            end
          else
            cal_cost(acc, n, 0, i, j, hs[i - 1])
          end
      end

    for k <- 1..n, reduce: @max do
      acc -> min(acc, dp[{m, target, k}])
    end
    |> then(fn ans ->
      if ans == @max, do: -1, else: ans
    end)
  end

  def cal_cost(dp, n, cost, house, group, color) do
    for pre_color <- 1..n, reduce: dp[{house, group, color}] do
      min_val ->
        pre_cost =
          if pre_color == color do
            dp[{house - 1, group, pre_color}]
          else
            dp[{house - 1, group - 1, pre_color}]
          end

        min(min_val, pre_cost + cost)
    end
    |> then(&Map.put(dp, {house, group, color}, &1))
  end
end
```