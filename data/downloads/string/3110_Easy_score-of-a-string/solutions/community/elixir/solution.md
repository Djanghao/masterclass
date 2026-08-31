# Elixir - Single Expression Solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/score-of-a-string/solutions/5242814/](https://leetcode.com/problems/score-of-a-string/solutions/5242814/)

---

# Code
```elixir
defmodule Solution do
  @spec score_of_string(s :: String.t) :: integer
  def score_of_string(s) do
    s
    |> String.to_charlist()
    |> Stream.chunk_every(2, 1, :discard)
    |> Stream.map(fn [a, b] -> abs(a - b) end)
    |> Enum.sum()
  end
end
```