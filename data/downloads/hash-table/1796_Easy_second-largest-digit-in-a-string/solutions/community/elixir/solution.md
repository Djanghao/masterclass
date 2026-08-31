# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/4477167/](https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/4477167/)

---

# Approach
Read the characters of the string one by one using binary pattern matching and keep track of the largest and next largest numbers in the string.

# Complexity
- Time complexity:
O(n) where n is the length of s

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec second_highest(s :: String.t) :: integer
  def second_highest(s), do: do_second_highest(s, -1, -1)

  defp do_second_highest(<<ch, rest::bytes>>, max1, max2) do
    case get_digit(ch) do
      x when x > max1 -> do_second_highest(rest, x, max1)
      x when x > max2 and x != max1 -> do_second_highest(rest, max1, x)
      _ -> do_second_highest(rest, max1, max2)
    end
  end
  defp do_second_highest(_, max1, max2), do: max2

  defp digit?(ch), do: ch >= ?0 and ch <= ?9

  defp get_digit(ch), do: if digit?(ch), do: ch - ?0, else: -1
end
```