# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/4221690/](https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/4221690/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec reverse_words(s :: String.t) :: String.t
  def reverse_words(s), do: do_reverse_words(s, [], "")

  defp do_reverse_words(<<ch, rest::bytes>>, word, acc) do 
    cond do
      ch == ?\\s -> do_reverse_words(rest, [], acc <> List.to_string(word) <> " ")
      true -> do_reverse_words(rest, [ch | word], acc)
    end
  end
  defp do_reverse_words(<<>>, word, acc), do: acc <> List.to_string(word)
end
```