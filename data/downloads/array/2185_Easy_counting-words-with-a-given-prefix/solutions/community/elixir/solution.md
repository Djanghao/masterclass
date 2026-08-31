# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/4622450/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/4622450/)

---

# Approach
Iterate the words and find the count of words having the given prefix.

# Complexity
- Time complexity:
O(n * m) where n is the length of words list and m is the average length of a word in words

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec prefix_count(words :: [String.t], pref :: String.t) :: integer
  def prefix_count(words, pref) do
    Enum.count(words, &prefix?(&1, pref))
  end

  defp prefix?(<<ch, rest::bytes>>, <<ch1, rest1::bytes>>) do
    ch == ch1 && prefix?(rest, rest1)
  end
  defp prefix?(_, s2), do: byte_size(s2) == 0
end
```