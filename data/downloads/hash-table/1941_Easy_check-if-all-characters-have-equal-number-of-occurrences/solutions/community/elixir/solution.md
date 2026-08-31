# Elixir, uses Map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/4555788/](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/4555788/)

---

# Approach
Create a character frequency map from the characters in the string s. Check if all the values of the frequency map are the same.

# Complexity
- Time complexity:
O(n) where n is the length of string s

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec are_occurrences_equal(s :: String.t) :: boolean
  def are_occurrences_equal(s) do
    freq_count = for <<x <- s>>, reduce: %{} do
      map -> Map.update(map, x, 1, &(&1 + 1))
    end
    [hd | tl] = Map.values(freq_count)
    Enum.all?(tl, &(&1 == hd))
  end
end
```