# Elixir, uses bxor

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/4202616/](https://leetcode.com/problems/hamming-distance/solutions/4202616/)

---

# Approach
Bitwise.bxor results in a number where, if input bits are the same, then the output bit will be 0 and if the input bits are different then the output bit will 1
1 - 0001
4 - 0100
    0101
Count the number of 1 bits in the result to get the hamming distance.

# Complexity
- Time complexity:
O(log(n)) where n is the xor(x,y)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec hamming_distance(x :: integer, y :: integer) :: integer
  def hamming_distance(x, y), do: Bitwise.bxor(x,y) |> bit_count

  defp bit_count(0), do: 0
  defp bit_count(n), do: bit_count(div(n,2)) + rem(n,2)
end
```