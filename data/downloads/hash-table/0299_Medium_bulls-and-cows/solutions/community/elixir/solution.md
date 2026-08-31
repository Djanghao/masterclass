# Elixir Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/bulls-and-cows/solutions/2288331/](https://leetcode.com/problems/bulls-and-cows/solutions/2288331/)

---

```elixir
defmodule Solution do
  @spec get_hint(secret :: String.t(), guess :: String.t()) :: String.t()
  def get_hint(secret, guess) do
    secret = String.graphemes(secret)
    guess = String.graphemes(guess)

    Enum.zip(secret, guess)
    |> Enum.reduce({0, 0, %{}}, fn {s, g}, {a, b, m} ->
      if s == g do
        {a + 1, b, m}
      else
        b = if Map.get(m, s, 0) < 0, do: b + 1, else: b
        b = if Map.get(m, g, 0) > 0, do: b + 1, else: b

        m =
          Map.update(m, s, 1, &(&1 + 1))
          |> Map.update(g, -1, &(&1 - 1))

        {a, b, m}
      end
    end)
    |> then(fn {a, b, _} -> "#{a}A#{b}B" end)
  end
end
```