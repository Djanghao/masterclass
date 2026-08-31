# Elixir Map Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/2926952/](https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/2926952/)

---

```
defmodule Solution do
  use Bitwise

  @spec similar_pairs(words :: [String.t()]) :: integer
  def similar_pairs(words) do
    words
    |> Enum.reduce(%{}, fn w, acc ->
      w
      |> String.to_charlist()
      |> Enum.reduce(0, fn c, acc ->
        acc ||| 1 <<< (c - ?a)
      end)
      |> then(fn v -> Map.update(acc, v, 1, &(&1 + 1)) end)
    end)
    |> Enum.reduce(0, fn {_, v}, acc ->
      acc + div(v * (v - 1), 2)
    end)
  end
end
```