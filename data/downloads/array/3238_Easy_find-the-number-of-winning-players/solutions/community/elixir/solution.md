# Elixir - Uses Map and MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5584852/](https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5584852/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec winning_player_count(n :: integer, pick :: [[integer]]) :: integer
  def winning_player_count(_n, pick) do
    {_player_col_count_map, won_players} = for [xi, yi] <- pick, reduce: {%{}, MapSet.new()} do
      {acc, won_players} ->
        cond do
          MapSet.member?(won_players, xi) -> {acc, won_players}
          true ->
            player_map = Map.get(acc, xi, %{})
            new_colour_count = Map.get(player_map, yi, 0) + 1
            cond do
            new_colour_count > xi -> {acc, MapSet.put(won_players, xi)}
            true ->
              new_player_map = Map.put(player_map, yi, new_colour_count)
              {Map.put(acc, xi, new_player_map), won_players}
            end
        end
    end
    MapSet.size(won_players)
  end
end
```