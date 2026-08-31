# Elixir, binary pattern matching.

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/di-string-match/solutions/4293095/](https://leetcode.com/problems/di-string-match/solutions/4293095/)

---

# Approach
Uses binary pattern matching and tail call recursion to compute the result. In place of I add the lowest available value in the range and in place of D add the highest available value in the range.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec di_string_match(s :: String.t) :: [integer]
  def di_string_match(s), do: do_di_string_match(s, 0, byte_size(s), [])

  defp do_di_string_match(<<"I", rest::bytes>>, low, high, res), do: do_di_string_match(rest, low + 1, high, [low | res])
  defp do_di_string_match(<<"D", rest::bytes>>, low, high, res), do: do_di_string_match(rest, low, high - 1, [high | res])
  defp do_di_string_match(<<>>, low, low, res), do: Enum.reverse([low | res])
end
```