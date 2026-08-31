# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/4373232/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/4373232/)

---

# Approach
Iterate every index in the range and compute the result.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec xor_operation(n :: integer, start :: integer) :: integer
  def xor_operation(n, start), do: do_xor_operation(1, n, start, start)

  defp do_xor_operation(i, n, start, acc) when i < n do
    do_xor_operation(i + 1, n, start, Bitwise.bxor(acc, start + 2 * i))
  end
  defp do_xor_operation(_, _, _, acc), do: acc
end
```