# Elixir solution

**Author:** Fubuchi
**Votes:** 2
**Link:** [https://leetcode.com/problems/bag-of-tokens/solutions/2566775/](https://leetcode.com/problems/bag-of-tokens/solutions/2566775/)

---

Explain: 
1. Try to flip up the tokens from smallest to largest as much as possible.
2. If there is not enough power, flip down the largest token to restore power
3. If  (2) can not be done or can not lead to more score then stop.

```
defmodule Solution do
  def bag_of_tokens_score(tokens, power) do
    play(
      tokens |> Enum.sort(),
      tokens |> Enum.sort(:desc),
      power,
      tokens |> Enum.count(),
      0,
      0
    )
  end

  defp play(_up, _down, _power, n, played, score) when played == n, do: score

  defp play([cost | c_rest] = up, [restore | r_rest] = down, power, n, played, score) do
    cond do
      power >= cost -> play(c_rest, down, power - cost, n, played + 1, score + 1)
      score == 0 or played == n - 1 -> score
      true -> play(up, r_rest, power + restore, n, played + 1, score - 1)
    end
  end
end

```