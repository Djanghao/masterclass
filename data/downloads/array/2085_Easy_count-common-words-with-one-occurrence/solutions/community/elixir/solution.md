# Elixir, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/4595665/](https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/4595665/)

---

# Approach
Create a frequency map from words1. Iterate words2 and decrement the count for words present exactly once in the frequency map. Return the number of words whose frequency is 0 in the end.

# Complexity
- Time complexity:
O(n + m) where n and m are the lengths of words1 and words2

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec count_words(words1 :: [String.t], words2 :: [String.t]) :: integer
  def count_words(words1, words2) do
    w1_freq = Enum.frequencies(words1)
    for x <- words2, w1_freq[x] == 1, reduce: w1_freq do
      map -> count = Map.get(map, x, 0)
             if count < 0, do: map, else: Map.put(map, x, count - 1) 
    end |> Enum.count(fn {_, v} -> v == 0 end)
  end
end
```