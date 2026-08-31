# Elixir Using BitMask & DP

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/matchsticks-to-square/solutions/2271724/](https://leetcode.com/problems/matchsticks-to-square/solutions/2271724/)

---

```elixir
defmodule Solution do
  use Bitwise

  @spec makesquare(matchsticks :: [integer]) :: boolean
  def makesquare(matchsticks) do
    {sum, len} =
      matchsticks
      |> Enum.reduce({0, 0}, fn m, {sum, len} ->
        {sum + m, len + 1}
      end)

    if rem(sum, 4) != 0 do
      false
    else
      target = div(sum, 4)

      matchsticks = matchsticks |> Enum.with_index()

      mask_end = (1 <<< len) - 1

      0..mask_end
      |> Enum.reduce(%{0 => 0}, fn mask, dp ->
        if dp[mask] == nil do
          dp
        else
          matchsticks
          |> Enum.reduce(dp, fn {m, i}, dp ->
            j = 1 <<< i

            if (mask &&& j) == 0 && dp[mask] + m <= target do
              Map.put(dp, mask ||| j, rem(dp[mask] + m, target))
            else
              dp
            end
          end)
        end
      end)
      |> Map.get(mask_end)
      |> then(&(&1 == 0))
    end
  end
end
```