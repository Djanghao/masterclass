# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/4496517/](https://leetcode.com/problems/truncate-sentence/solutions/4496517/)

---

# Approach
Uses binary pattern matching to read every character in the string. Keep track of the current word and the resulting string. Keep track of total words appended to the resulting string and return the result.

# Complexity
- Time complexity:
O(n) where n is the total length of first k words

- Space complexity:
O(n) where n is the total length of first k words

# Code
```
defmodule Solution do
  @spec truncate_sentence(s :: String.t, k :: integer) :: String.t
  def truncate_sentence(s, k), do: do_truncate_sentence(s, <<>>, <<>>, k)

  defp do_truncate_sentence(<<ch, rest::bytes>>, word, res, k) when k > 0 do
    cond do
      ch == ?\\s -> do_truncate_sentence(rest, <<>>, append_word(res, word), k - 1)
      true -> do_truncate_sentence(rest, <<word::bytes, ch>>, res, k)
    end
  end
  defp do_truncate_sentence(s, word, res, k) do
    if k == 0, do: res, else: append_word(res, word)
  end

  defp append_word(res, word) do
    if byte_size(res) == 0, do: word, else: <<res::bytes, " ", word::bytes >>
  end
end
```