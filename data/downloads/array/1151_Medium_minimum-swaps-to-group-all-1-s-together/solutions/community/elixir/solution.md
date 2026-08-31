# Elixir sliding window using starting buffer

**Author:** JJamesWWang
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/2132271/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/2132271/)

---

The idea is that the group of all 1's will have the same size `t`, so find the max subsequence of size `t` with the most 1's. The answer is `t` minus the number of 1's in that max subsequence.

Initially, I tried to use Stream.chunk_every/4, but this doesn't work because it doesn't tell you the element being dropped. (In non-functional programming languages, you can keep track of the element you are dropping with an index pointer `i`), or the 0th element of an auxiliary data structure.

The way I got around this was creating an artifical buffer at the start of the data. Stream.zip/2 will stop when either enumerable runs out of elements, so the end of the delta stream will be ignored, which is what we want.

```elixir
defmodule Solution do
  @spec min_swaps(data :: [integer]) :: integer
  def min_swaps(data) do
    ones = Enum.count(data, fn n -> n == 1 end)
    best = List.duplicate(0, ones)
        |> Stream.concat(data)
        |> Stream.map(fn n -> -n end)
        |> Stream.zip(data)
        |> Stream.scan(0, fn {delta, n}, acc -> acc + n + delta end)
        |> Enum.max()

    ones - best
  end
end
```