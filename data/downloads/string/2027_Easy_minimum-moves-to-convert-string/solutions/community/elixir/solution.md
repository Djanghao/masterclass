# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/4580337/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/4580337/)

---

# Approach
Iterate the characters using binary pattern matching. Skip the leading O's, accumulate and increment the moves required by 1 when excountering an X. Skip 3 places and continue.

# Complexity
- Time complexity:
O(n) where n is the length of string s
- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec minimum_moves(s :: String.t) :: integer
  def minimum_moves(s), do: do_minimum_moves(s, 0)

  
  defp do_minimum_moves(<<x, rest::bytes>>, acc) do
    cond do
      x == ?O -> do_minimum_moves(rest, acc)
      byte_size(rest) >= 2 -> rest_size = byte_size(rest)
                              do_minimum_moves(binary_part(rest, rest_size, -rest_size + 2), acc + 1)
      true -> acc + 1
    end
  end
  defp do_minimum_moves(_, acc), do: acc
end
```