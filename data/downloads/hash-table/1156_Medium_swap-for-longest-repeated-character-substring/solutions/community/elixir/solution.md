# Elixir solution based on Lee's Python groupby

**Author:** JJamesWWang
**Votes:** 1
**Link:** [https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/1886573/](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/1886573/)

---

```elixir
defmodule Solution do
  @spec max_rep_opt1(text :: String.t) :: integer
  def max_rep_opt1(text) do
    letters = text |> String.graphemes()
    groups = letters |> Enum.chunk_by(fn l -> l end) |> Enum.map(fn chunk -> {hd(chunk), Enum.count(chunk)} end)
    count = letters |> Enum.frequencies()
    res = groups |> Enum.map(fn {k, v} -> min(v + 1, Map.get(count, k)) end) |> Enum.max()

    max(res, groups 
    |> Enum.chunk_every(3, 1, :discard)
    |> Enum.reduce(0, fn [{k1, v1}, {k2, v2}, {k3, v3}], acc -> max(acc, (if k1 == k3 and v2 == 1, do: min(v1 + v2 + v3, Map.get(count, k1)), else: acc)) end)
    )
  end
end
```