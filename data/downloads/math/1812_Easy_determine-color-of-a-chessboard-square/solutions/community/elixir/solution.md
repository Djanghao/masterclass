# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/4490362/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/4490362/)

---

# Approach
Convert the letters to equivalent numbers using the pattern,
a - 1, b - 2, c - 3, d - 4, e - 5, f - 6, g - 7, h - 8, add them with the number coordinates and check if they are odd.

a1 = 1 + 1 = 2 => even => black square - false
c5 = 3 + 5 = 8 => even => black square - false
f7 = 6 + 7 = 13 => odd => white square - true

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec square_is_white(coordinates :: String.t) :: boolean
  def square_is_white(<<ch, n>>) do
    (get_ch_ind(ch) + get_n_integer(n)) |> rem(2) == 1 
  end

  defp get_ch_ind(ch), do: (ch - ?a) + 1

  defp get_n_integer(n), do: n - ?0
end
```