# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/capitalize-the-title/solutions/4607147/](https://leetcode.com/problems/capitalize-the-title/solutions/4607147/)

---

# Approach
Iterate the characters using binary pattern matching and compute the result based on the length of the word.

# Complexity
- Time complexity:
O(n) where n is the length of input string

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec capitalize_title(title :: String.t) :: String.t
  def capitalize_title(<<ch, rest::bytes>>), do: do_capitalize_title(rest, ch, <<>>, <<>>)

  defp do_capitalize_title(<<ch, rest::bytes>>, first_ch, rest_word, result) when ch != ?\\s do
    do_capitalize_title(rest, first_ch, <<rest_word::bytes, lower_case(ch)>>, result)
  end
  defp do_capitalize_title(str, first_ch, rest_word, result) do
    first_ch = if byte_size(rest_word) > 1, do: upper_case(first_ch), else: lower_case(first_ch)
    result = if byte_size(result) == 0, do: <<first_ch, rest_word::bytes>>, else: <<result::bytes, ?\\s, first_ch, rest_word::bytes>>
    cond do
      byte_size(str) == 0 -> result
      true -> <<_space, first_ch, rest::bytes>> = str
              do_capitalize_title(rest, first_ch, <<>>, result)
    end
  end

  defp lower_case(cp) when cp <= ?Z, do: cp + (?a - ?A)
  defp lower_case(cp), do: cp

  defp upper_case(cp) when cp >= ?a, do: cp - (?a - ?A)
  defp upper_case(cp), do: cp
end
```