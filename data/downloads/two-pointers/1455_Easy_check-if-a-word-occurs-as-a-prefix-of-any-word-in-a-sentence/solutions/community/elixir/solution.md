# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/4368599/](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/4368599/)

---

# Approach
Uses binary pattern matching to read the sentence character by character to check if any word in the sentence has the search word as it's prefix.

# Complexity
- Time complexity:
O(n) where n is the number of characters in the string.

- Space complexity:
O(k) where k is the number of words(sub binary creation)

# Code
```
defmodule Solution do
  @spec is_prefix_of_word(sentence :: String.t, search_word :: String.t) :: integer
  def is_prefix_of_word(sentence, search_word), do: do_is_prefix_of_word(sentence, search_word, 1)

  defp do_is_prefix_of_word(sentence, search_word, i) when byte_size(sentence) > 0 do
    case prefix?(sentence, search_word) do
      {false, rest} -> do_is_prefix_of_word(skip_word(rest), search_word, i + 1)
      _ -> i
    end
  end
  defp do_is_prefix_of_word(_, _, _), do: -1

  defp prefix?(<<f, rest::bytes>>, <<f, rest1::bytes>>), do: prefix?(rest, rest1)
  defp prefix?(sentence, search_word), do: byte_size(search_word) == 0 || {false, sentence} 

  defp skip_word(<<f, rest::bytes>>), do: if f != ?\\s, do: skip_word(rest), else: rest
  defp skip_word(_), do: <<>>
end
```