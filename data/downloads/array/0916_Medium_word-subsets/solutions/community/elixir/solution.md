# Elixir Map Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-subsets/solutions/2353091/](https://leetcode.com/problems/word-subsets/solutions/2353091/)

---

```elixir
defmodule Solution do
  @spec word_subsets(words1 :: [String.t()], words2 :: [String.t()]) :: [String.t()]
  def word_subsets(words1, words2) do
    dt =
      words2
      |> Enum.reduce(%{}, fn w, acc ->
        w
        |> word_to_map()
        |> Enum.reduce(acc, fn {k, v}, acc ->
          Map.update(acc, k, v, &max(&1, v))
        end)
      end)

    words1
    |> Enum.filter(fn w ->
      m = word_to_map(w)

      dt
      |> Enum.all?(fn {k, v} ->
        Map.get(m, k, 0) >= v
      end)
    end)
  end

  def word_to_map(w) do
    w
    |> String.to_charlist()
    |> Enum.reduce(%{}, fn c, acc ->
      Map.update(acc, c, 1, &(&1 + 1))
    end)
  end
end
```