# 3 lines in Elixir

**Author:** kkhaniffff
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4168167/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4168167/)

---

# Code
```
defmodule Solution do
  @spec get_words_in_longest_subsequence(n :: integer, words :: [String.t], groups :: [integer]) :: [String.t]
  def get_words_in_longest_subsequence(n, words, groups) do
    Stream.zip(groups, words)
    |> Stream.dedup_by(fn {g, _w} -> g end)
    |> Enum.map(fn {_g, w} -> w end)
  end
end
```