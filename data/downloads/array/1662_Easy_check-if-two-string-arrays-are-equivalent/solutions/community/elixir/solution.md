# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/4407079/](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/4407079/)

---

# Approach
Uses binary pattern matching to iterate each character in the words of both lists to check for equality. 

# Complexity
- Time complexity:
O(min(m, n)) where m is the total characters in all the strings in word1 and n is the total characters in all the strings in word2

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec array_strings_are_equal(word1 :: [String.t], word2 :: [String.t]) :: boolean
  def array_strings_are_equal([hd | tl], [hd1 | tl1]), do: do_equal?(hd, hd1, tl, tl1)

  defp do_equal?(<<f, rest::bytes>>, <<f1, rest1::bytes>>, words1, words2) do
    f == f1 and do_equal?(rest, rest1, words1, words2)
  end
  defp do_equal?(<<>>, <<>>, [], []), do: true
  defp do_equal?(word1, word2, words1, words2) do
    cond do
      byte_size(word1) == 0 and List.first(words1) != nil -> do_equal?(hd(words1), word2, tl(words1), words2)
      byte_size(word2) == 0 and List.first(words2) != nil -> do_equal?(word1, hd(words2), words1, tl(words2))
      true -> false
    end
  end
end
```