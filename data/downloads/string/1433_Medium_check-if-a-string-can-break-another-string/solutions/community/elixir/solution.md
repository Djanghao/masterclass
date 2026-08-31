# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/1841687/](https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/1841687/)

---

```elixir
defmodule Solution do
  @spec check_if_can_break(s1 :: String.t(), s2 :: String.t()) :: boolean
  def check_if_can_break(s1, s2) do
    s1 = s1 |> String.graphemes() |> Enum.sort()
    s2 = s2 |> String.graphemes() |> Enum.sort()

    Enum.zip(s1, s2)
    |> Enum.reduce({true, true}, fn {c1, c2}, {lt, gt} ->
      {lt && c1 <= c2, gt && c1 >= c2}
    end)
    |> then(fn {a, b} -> a || b end)
  end
end
```