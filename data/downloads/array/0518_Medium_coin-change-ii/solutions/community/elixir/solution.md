# Elixir bottom-up DP

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/coin-change-ii/solutions/3892835/](https://leetcode.com/problems/coin-change-ii/solutions/3892835/)

---

# Code
```
defmodule Solution do
  @spec change(amount :: integer, coins :: [integer]) :: integer
  def change(amount, coins) do
    Enum.reduce(coins, %{0 => 1}, fn x, dp ->
      Enum.reduce(0..amount - x//1, dp, fn i, dp ->
        Map.get(dp, i, 0)
        |> then(fn val -> Map.update(dp, i + x, val, &(&1 + val)) end)
      end)
    end)
    |> Map.get(amount, 0)
  end
end
```