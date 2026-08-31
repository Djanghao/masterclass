# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/4341264/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/4341264/)

---

# Approach
Uses binary pattern matching to read the characters in the string. If there is a # symbol use the previous two characters to get the respective alphabet. Otherwise use one character to get the alphabet.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec freq_alphabets(s :: String.t) :: String.t
  def freq_alphabets(s), do: do_freq_alphabets(s, <<>>)

  defp do_freq_alphabets(<<i::bytes-2, "#", rest::bytes>>, res), do: do_freq_alphabets(rest, <<res::bytes, get_alpha(i)>>)
  defp do_freq_alphabets(<<i, rest::bytes>>, res), do: do_freq_alphabets(rest, <<res::bytes, get_alpha(i)>>)
  defp do_freq_alphabets(<<>>, res), do: res

  defp get_alpha(f) when f >= ?1 and f <= ?9, do: f + (?a - ?1)
  defp get_alpha(i_str), do: String.to_integer(i_str) + (?j - 10)
end
```