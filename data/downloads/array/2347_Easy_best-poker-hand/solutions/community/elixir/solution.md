# Elixir, frequencies

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/4664334/](https://leetcode.com/problems/best-poker-hand/solutions/4664334/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec best_hand(ranks :: [integer], suits :: [char]) :: String.t
  def best_hand(ranks, [suit | suit_tl]) do
    cond do
      Enum.all?(suit_tl, &(&1 == suit)) -> "Flush"
      true -> case Enum.frequencies(ranks) |> Map.values |> Enum.max do
        1 -> "High Card"
        2 -> "Pair"
        _ -> "Three of a Kind"
      end
    end
  end
end
```