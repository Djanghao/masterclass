# Elixir - Binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-word/solutions/5566449/](https://leetcode.com/problems/valid-word/solutions/5566449/)

---

# Complexity
- Time complexity:
O(n) where n is the length of the string

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec is_valid(word :: String.t) :: boolean
  def is_valid(word) when byte_size(word) < 3, do: false
  def is_valid(word), do: do_is_valid(word, false, false)

  defp do_is_valid(<<>>, vowel_present?, consonant_present?), do: vowel_present? && consonant_present?
  defp do_is_valid(<<ch, rest::bytes>>, vowel_present?, consonant_present?) do
    case get_ch_details(ch) do
      :number -> do_is_valid(rest, vowel_present?, consonant_present?)
      {:character, ch_vowel?} -> do_is_valid(rest, vowel_present? || ch_vowel?, consonant_present? || !(ch_vowel?))
      :invalid -> false
    end
  end 

  defp get_ch_details(ch) do
    cond do
      ch >= ?0 && ch <= ?9 -> :number
      ch >= ?a && ch <= ?z -> {:character, ch in [?a, ?e, ?i, ?o, ?u]}
      ch >= ?A && ch <= ?Z -> {:character, ch in [?A, ?E, ?I, ?O, ?U]}
      true -> :invalid 
    end
  end
end
```