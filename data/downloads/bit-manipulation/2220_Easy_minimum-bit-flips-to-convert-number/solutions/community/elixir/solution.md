# Elixir, bxor

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/4632599/](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/4632599/)

---

# Approach
Use Bitwise.bxor on start and goal and calculate the number of 1 bits from the result.

# Complexity
- Time complexity:
O(log(k)) where k is max(start, goal)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec min_bit_flips(start :: integer, goal :: integer) :: integer
  def min_bit_flips(start, goal), do: Bitwise.bxor(start, goal) |> count_one_bits(0)

  defp count_one_bits(n, acc) when n > 0, do: count_one_bits(div(n,2), acc + rem(n, 2))
  defp count_one_bits(_, acc), do: acc
end
```