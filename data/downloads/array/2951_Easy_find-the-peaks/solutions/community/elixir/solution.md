# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-peaks/solutions/4616822/](https://leetcode.com/problems/find-the-peaks/solutions/4616822/)

---

```
defmodule Solution do
  @spec find_peaks(mountain :: [integer]) :: [integer]
  def find_peaks(mountain) do
    mountain
    |> Enum.chunk_every(3, 1, :discard)
    |> Enum.with_index(1)
    |> Enum.flat_map(fn {[a, b, c], i} ->
      if b > a && b > c, do: [i], else: []
    end)
  end
end

```