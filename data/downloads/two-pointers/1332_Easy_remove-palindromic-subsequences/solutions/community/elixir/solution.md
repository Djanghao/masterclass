# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-palindromic-subsequences/solutions/4345024/](https://leetcode.com/problems/remove-palindromic-subsequences/solutions/4345024/)

---

# Approach
The answer is either 1 or 2. If the whole string is a palindrome, the answer is 1. If the whole string is not a palindrome, then the answer is 2. You remove all a's in the string in one step and you remove all b's in the string in another step.

# Complexity
- Time complexity:
O(n) where n is the number of characters in the string.

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec remove_palindrome_sub(s :: String.t) :: integer
  def remove_palindrome_sub(s), do: if palindrome?(s, byte_size(s) - 2), do: 1, else: 2

  defp palindrome?(<<f, rest::bytes>>, mid_size) when mid_size >= 0 do
    <<rest::bytes-size(mid_size), last>> = rest
    f == last and palindrome?(rest, mid_size - 2)
  end
  defp palindrome?(_, _), do: true
end
```