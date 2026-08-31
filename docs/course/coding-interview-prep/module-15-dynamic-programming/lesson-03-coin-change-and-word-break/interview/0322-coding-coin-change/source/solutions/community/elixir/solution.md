# Elixir DP Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/coin-change/solutions/2059224/](https://leetcode.com/problems/coin-change/solutions/2059224/)

---

```elixir
defmodule Solution do
  @spec coin_change(coins :: [integer], amount :: integer) :: integer
  def coin_change(coins, amount) do
    coins = Enum.sort(coins)

    for a <- 1..amount, reduce: %{0 => 0} do
      dp ->
        coins
        |> Enum.reduce_while(dp, fn c, dp ->
          cond do
            c > a ->
              {:halt, dp}

            dp[a - c] != nil ->
              {:cont, Map.update(dp, a, dp[a - c] + 1, &min(&1, dp[a - c] + 1))}

            true ->
              {:cont, dp}
          end
        end)
    end
    |> Map.get(amount, -1)
  end
end
```