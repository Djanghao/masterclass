# Elixir - chunk_every

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/5629542/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/5629542/)

---

# Intuition
Split the prices to a list of non-strictly monotonic chunks. For each chunk, calculate the max price - min price, then sum them up.

# Code
```elixir
defmodule Solution do
  @spec max_profit(prices :: [integer]) :: integer
  def max_profit(prices) do
    prices
    |> Stream.chunk_while(
      [],
      fn
        price, [] -> {:cont, [price]}
        price, [h | _] = acc when price >= h -> {:cont, [price | acc]}
        price, acc -> {:cont, acc, [price]} 
      end,
      fn acc -> {:cont, acc, []} end
    )
    |> Stream.filter(&match?([_, _ | _], &1))
    |> Stream.map(fn chunk ->
      hd(chunk) - List.last(chunk)
    end)
    |> Enum.sum()
  end
end
```

**UPDATE**

Optimized code

```elixir
defmodule Solution do
  @spec max_profit(prices :: [integer]) :: integer
  def max_profit([]), do: 0

  def max_profit([h | t]) do
    solve(t, h, h, 0)
  end

  defp solve([], min, max, total) do
    total - min + max
  end

  defp solve([h | t], min, max, total) when h < max do
    solve(t, h, h, total - min + max)
  end

  defp solve([h | t], min, _max, total) do
    solve(t, min, h, total)
  end
end
```