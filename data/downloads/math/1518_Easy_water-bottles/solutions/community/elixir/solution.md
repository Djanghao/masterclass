# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 1
**Link:** [https://leetcode.com/problems/water-bottles/solutions/4380699/](https://leetcode.com/problems/water-bottles/solutions/4380699/)

---

# Approach
Divide the num_bottles by num_exchange and update the number of consumed bottles until the number of empty bottles are less than the num_exchange.

# Complexity
- Time complexity:
O(log\u2099\u1D64\u2098_\u2091\u2093(num_bottles))

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec num_water_bottles(num_bottles :: integer, num_exchange :: integer) :: integer
  def num_water_bottles(num_bottles, num_exchange), do: do_num_water_bottles(num_bottles, num_exchange, num_bottles)

  defp do_num_water_bottles(num_bottles, num_exchange, consumed_bottles) when num_bottles >= num_exchange do
    new_bottles = div(num_bottles, num_exchange)
    remaining_empty_bottles = rem(num_bottles, num_exchange)
    do_num_water_bottles(new_bottles + remaining_empty_bottles, num_exchange, consumed_bottles + new_bottles)
  end 
  defp do_num_water_bottles(_, _, consumed_bottles), do: consumed_bottles
end
```