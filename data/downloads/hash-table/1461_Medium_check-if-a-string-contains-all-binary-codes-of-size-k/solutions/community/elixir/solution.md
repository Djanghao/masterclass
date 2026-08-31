# Elixir intuitive, built-in sliding window approach

**Author:** stevensonmt
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/2092821/](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/2092821/)

---

Enum.chunk_every/4 seems to be faster, but to optimize for space, change it to Stream.chunk_ever/4.
```elixir
  def has_all_codes(s, k) do
    limit = Integer.pow(2, k)
    s
    |> String.graphemes()
    |> Enum.chunk_every(k, 1, :discard)
    |> Enum.reduce(MapSet.new(), fn chnk, set ->
      MapSet.put(set, chnk)
    end)
    |> MapSet.size()
    |> Kernel.==(limit)
  end
  ```