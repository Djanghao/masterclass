# Elixir, uses Enum.sort_by

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/4348764/](https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/4348764/)

---

# Approach
Use Enum.sort_by to sort the numbers based on 1 bit count and their value. 1 bit count can be obtained by using bit manipulation.

# Complexity
- Time complexity:
O(n.log(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  import Bitwise, only: [bsr: 2, band: 2]
  @spec sort_by_bits(arr :: [integer]) :: [integer]
  def sort_by_bits(arr), do: Enum.sort_by(arr, &{get_no_1_bits(&1, 0), &1})

  defp get_no_1_bits(n, count) when n > 0, do: get_no_1_bits(bsr(n, 1), count + band(n, 1))
  defp get_no_1_bits(_, count), do: count
end
```