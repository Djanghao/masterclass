# Elixir, linear

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/4750144/](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/4750144/)

---

# Complexity
- Time complexity:
O(n + m) where n and m are the lengths of player1 and player2

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec is_winner(player1 :: [integer], player2 :: [integer]) :: integer
  def is_winner(player1, player2) do
    p1_score = find_score(player1, nil, nil, 0)
    p2_score = find_score(player2, nil, nil, 0)
    cond do
      p1_score > p2_score -> 1
      p1_score < p2_score -> 2
      true -> 0
    end
  end

  defp find_score([pins | tl], prev1, prev2, score) do
    cur_score = if prev1 == 10 || prev2 == 10, do: pins * 2, else: pins
    find_score(tl, pins, prev1, score + cur_score) 
  end
  defp find_score(_, _, _, score), do: score
end
```