# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-all-digits-with-characters/solutions/4521107/](https://leetcode.com/problems/replace-all-digits-with-characters/solutions/4521107/)

---

# Approach
Uses binary pattern matching to parse the character and its associated number as codepoints. Add the number to the character codepoint to get the shifted alphabet and construct the resulting string.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec replace_digits(s :: String.t) :: String.t
  def replace_digits(s), do: do_replace_digits(s, <<>>)

  defp do_replace_digits(<<ch, n, rest::bytes>>, acc) do
    shifted_ch = ch + (n - ?0)
    do_replace_digits(rest, <<acc::bytes, ch, shifted_ch>>)
  end
  defp do_replace_digits(rest, acc), do: <<acc::bytes, rest::bytes>>
end
```