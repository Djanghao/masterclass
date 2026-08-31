# Elixir O(n) Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/wiggle-subsequence/solutions/2229723/](https://leetcode.com/problems/wiggle-subsequence/solutions/2229723/)

---

```elixir
defmodule Solution do
  @spec wiggle_max_length(nums :: [integer]) :: integer
  def wiggle_max_length([n | ns]) do
    ns
    |> Enum.reduce({1, 1, n}, fn n, {inc, dec, pre} ->
      cond do
        n > pre -> {inc, inc + 1, n}
        n < pre -> {dec + 1, dec, n}
        true -> {inc, dec, n}
      end
    end)
    |> then(fn {inc, dec, _} ->
      max(inc, dec)
    end)
  end
end
```