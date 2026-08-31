# Elixir Memorization DP Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/2941779/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/2941779/)

---

```
defmodule Solution do
  use Agent

  @spec max_profit(prices :: [integer]) :: integer
  def max_profit(prices) do
    init()

    dfs(prices, 0, true)
  end

  def dfs([], curr, buying?), do: 0

  def dfs([p | ps], curr, buying?) do
    if get({curr, buying?}) != nil do
      get({curr, buying?})
    else
      cooldown = dfs(ps, curr + 1, buying?)

      profit =
        if buying? do
          dfs(ps, curr + 1, not buying?) - p
        else
          dfs(tl!(ps), curr + 2, not buying?) + p
        end

      put({curr, buying?}, max(profit, cooldown))
    end
  end

  def tl!([]), do: []
  def tl!([_ | xs]), do: xs

  def init() do
    Agent.start_link(fn -> %{} end, name: __MODULE__)
    Agent.update(__MODULE__, fn _ -> %{} end)
  end

  def get(k) do
    Agent.get(__MODULE__, fn cache -> cache[k] end)
  end

  def put(k, v) do
    Agent.update(__MODULE__, fn cache -> Map.put(cache, k, v) end)
    v
  end
end

```