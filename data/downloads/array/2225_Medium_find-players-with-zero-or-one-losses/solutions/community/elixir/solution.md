# Elixir solution

**Author:** PavelPatsey
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4572512/](https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4572512/)

---

# Code
```
defmodule Solution do
  @spec find_winners(matches :: [[integer]]) :: [[integer]]
  def find_winners(matches) do
    players =
      List.flatten(matches)
      |> MapSet.new()

    losers_frequencies =
      matches
      |> Enum.map(fn [_, x] -> x end)
      |> Enum.frequencies()

    [0, 1]
    |> Enum.map(fn x -> losers_filter(players, losers_frequencies, x) end)
  end

  @spec losers_filter(players :: [integer], frequencies :: Map, n :: integer) :: [[integer]]
  def losers_filter(players, frequencies, n) do
    players
    |> Enum.filter(fn player ->
      if Map.get(frequencies, player, 0) == n, do: true, else: false
    end)
    |> Enum.sort()
  end
end
```