# Elixir Simple Solution

**Author:** stackcats
**Votes:** 2
**Link:** [https://leetcode.com/problems/custom-sort-string/solutions/1836220/](https://leetcode.com/problems/custom-sort-string/solutions/1836220/)

---

```elixir
defmodule Solution do
  @spec custom_sort_string(order :: String.t(), s :: String.t()) :: String.t()
  def custom_sort_string(order, s) do
    order =
      order
      |> String.graphemes()
      |> Enum.with_index()
      |> Enum.reduce(%{}, fn {c, i}, acc -> Map.put(acc, c, i) end)
    s
    |> String.graphemes()
    |> Enum.sort_by(fn c -> order[c] end)
    |> Enum.join("")
  end
end
```