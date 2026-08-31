# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/1872194/](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/1872194/)

---

```elixir
defmodule Solution do
  @spec get_smallest_string(n :: integer, k :: integer) :: String.t()
  def get_smallest_string(n, k) do
    aux(n, k, [])
  end

  def aux(0, _k, s), do: List.to_string(s)

  def aux(n, k, s) do
    c = min(26, k - n + 1)
    aux(n - 1, k - c, [96 + c | s])
  end
end
```