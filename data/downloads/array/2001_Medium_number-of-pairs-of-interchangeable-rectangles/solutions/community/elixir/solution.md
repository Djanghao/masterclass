# Elixir | 700 ms

**Author:** RBird111
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/4611292/](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/4611292/)

---

# Code
```elixir
defmodule Solution do
  @spec interchangeable_rectangles(rectangles :: [[integer]]) :: integer
  def interchangeable_rectangles(rectangles) do
    rectangles
    |> Enum.map(&get_ratio/1)
    |> Enum.frequencies()
    |> Map.values()
    |> Enum.map(&div(&1 * (&1 - 1), 2))
    |> Enum.sum()
  end

  defp get_ratio([w, h]), do: w / h
end
```