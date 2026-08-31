# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/repeated-substring-pattern/solutions/4202556/](https://leetcode.com/problems/repeated-substring-pattern/solutions/4202556/)

---

# Approach
concatenate the string with itself -> s <> s
Remove the first and last character of the concatenated string.
Iterate the resulting string and check if it contains the original string s in it. If it does then return true.

e.g
s = "abab"
s<>s = "abababab"
after first and last char removal = "bababa"
The above string contains the original string "abab" inside it and hence the result is true

s = "abcdabce"
s <> s = "abcdabceabcdabce"
after first and last char removal = "bcdabceabcdabc"
The above string does not contain the original string "abcdabce" inside it and hence the result is false

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec repeated_substring_pattern(s :: String.t) :: boolean
  def repeated_substring_pattern(s) do
    len = byte_size(s)
    if len < 2, do: false, else: contains?(binary_part(s <> s, 1, (len * 2) - 2), s, len)
  end

  defp contains?(<<f,rest::bytes>>, <<f,rest_s::bytes>>, s_len) do 
    cond do
      byte_size(rest) < s_len - 1 -> false
      binary_part(rest, 0, s_len - 1) == rest_s -> true
      true -> contains?(rest, <<f,rest_s::bytes>>, s_len)
    end  
  end
  defp contains?(<<_f, rest::bytes>>, s, s_len), do: contains?(rest, s, s_len)
end
```