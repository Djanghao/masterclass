# Elixir - easy solution

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/top-k-frequent-words/solutions/2719984/](https://leetcode.com/problems/top-k-frequent-words/solutions/2719984/)

---

```elixir
defmodule Solution do
  @spec top_k_frequent(words :: [String.t], k :: integer) :: [String.t]
  def top_k_frequent(words, k) do
    words
    |> Enum.frequencies()
    |> Enum.sort_by(fn {w, c} -> {-c, w} end)
    |> Enum.take(k)
    |> Enum.map(&elem(&1, 0))
  end
end
```