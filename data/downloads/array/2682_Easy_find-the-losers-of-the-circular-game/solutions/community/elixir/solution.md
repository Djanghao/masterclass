# Elixir, MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/4750515/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/4750515/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec circular_game_losers(n :: integer, k :: integer) :: [integer]
  def circular_game_losers(n, k) do
    winners = do_game(1, 1, k, n, MapSet.new([1]))
    for x <- n..1, !MapSet.member?(winners, x), reduce: [] do
      acc -> [x | acc]
    end
  end

  defp do_game(cur_pos, i, k, n, winners) do
    next_pos = cur_pos + (i * k) |> rem(n) |> then(fn pos -> if pos == 0, do: n, else: pos end)
    if MapSet.member?(winners, next_pos), do: winners,
    else: do_game(next_pos, i + 1, k, n, MapSet.put(winners, next_pos))
  end
end
```