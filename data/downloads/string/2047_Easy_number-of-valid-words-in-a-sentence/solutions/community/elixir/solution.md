# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/4587093/](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/4587093/)

---

# Approach
Iterate the characters using binary pattern matching and check for all the rules manually.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec count_valid_words(sentence :: String.t) :: integer
  def count_valid_words(sentence) do
    do_count(sentence, nil, true, false, 0) 
  end
  defp do_count(<<ch, rest::bytes>>, prev_ch, valid_word?, hyphen_found?, acc) do
    cond do
      ch == ?\\s -> acc = if (!prev_ch || prev_ch == ?\\s || prev_ch == ?- || !valid_word?), do: acc, else: acc + 1
                   do_count(rest, ch, true, false, acc)
      !valid_word? || num?(ch) || punc?(prev_ch) || (prev_ch == ?- and !alpha?(ch))-> do_count(rest, ch, false, false, acc)
      ch == ?- -> valid_word? = !hyphen_found? && alpha?(prev_ch)
                  do_count(rest, ch, valid_word?, true, acc)
      true -> do_count(rest, ch, valid_word?, hyphen_found?, acc) 
    end
  end
  defp do_count(_, prev_ch, valid_word?, _, acc), do: if valid_word? && prev_ch != ?\\s, do: acc + 1, else: acc

  defp num?(ch), do: ch >= ?0 and ch <= ?9
  defp alpha?(ch), do: ch >= ?a and ch <= ?z
  defp punc?(ch), do: ch in [?!, ?., ?,]
end
```