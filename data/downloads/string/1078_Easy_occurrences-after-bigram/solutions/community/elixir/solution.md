# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/4319278/](https://leetcode.com/problems/occurrences-after-bigram/solutions/4319278/)

---

# Approach
Uses binary pattern matching to extract every word, keeps track of the previous two words in the text and accumulates the result by comparing the previous two words with first and second word.

# Complexity
- Time complexity:
O(n) where n is the length of the text

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec find_ocurrences(text :: String.t, first :: String.t, second :: String.t) :: [String.t]
  def find_ocurrences(text, first, second), do: do_find_occurrences(text, first, second, nil, nil, [])

  defp do_find_occurrences(<<>>, _, _, _, _, res), do: res
  defp do_find_occurrences(text, first, second, prev_word1, prev_word2, res) do
    {word, rest} = extract_word(text, <<>>)
    res = if prev_word1 == first and prev_word2 == second, do: [word | res], else: res
    do_find_occurrences(rest, first, second, prev_word2, word, res)
  end

  defp extract_word(<<" ", rest::bytes>>, res), do: {res, rest}
  defp extract_word(<<f, rest::bytes>>, res), do: extract_word(rest, <<res::bytes, f>>)
  defp extract_word(<<>>, res), do: {res, <<>>}
end
```