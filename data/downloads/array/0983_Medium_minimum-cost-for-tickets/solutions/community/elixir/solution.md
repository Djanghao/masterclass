# Elixir DP Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solutions/2059417/](https://leetcode.com/problems/minimum-cost-for-tickets/solutions/2059417/)

---

```elixir
defmodule Solution do
  @spec mincost_tickets(days :: [integer], costs :: [integer]) :: integer
  def mincost_tickets(days, [c1, c7, c30]) do
    {first, last} = Enum.min_max(days)
    days = MapSet.new(days)

    for d <- first..last, reduce: %{ first => 0 } do
      dp ->
        if MapSet.member?(days, d) do
          mincost =
            Enum.min([
              Map.get(dp, d - 1, 0) + c1,
              Map.get(dp, d - 7, 0) + c7,
              Map.get(dp, d - 30, 0) + c30
            ])

          Map.put(dp, d, mincost)
        else
          Map.put(dp, d, dp[d - 1])
        end
        
    end
    |> Map.get(last)
  end
end
```