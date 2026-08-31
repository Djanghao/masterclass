# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/4515184/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/4515184/)

---

# Approach
Uses tail call recursion to extract digits in base k by dividing n by k continuously and keeps track of the sum of the base k digits.

# Complexity
- Time complexity:
O(log(n))
- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec sum_base(n :: integer, k :: integer) :: integer
  def sum_base(n, k), do: do_sum_base(n, k, 0)

  defp do_sum_base(n, k, acc) when n > 0 do
    do_sum_base(div(n, k), k, acc + rem(n, k))
  end
  defp do_sum_base(_, _, acc), do: acc
end
```