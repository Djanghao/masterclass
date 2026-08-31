# Elixir, Euclidean algorithm

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/4618026/](https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/4618026/)

---

# Approach
Uses Euclidean algorithm to compute the number of operations.

# Complexity
- Time complexity:
O(log min(a, b))

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec count_operations(num1 :: integer, num2 :: integer) :: integer
  def count_operations(num1, num2), do: do_count(num1, num2, 0)

   defp do_count(n1, n2, count) when n1 == 0 or n2 == 0, do: count
   defp do_count(n1, n2, count), do: do_count(n2, rem(n1, n2), count + div(n1, n2))
end
```