# Elixir, no string conversion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/4642510/](https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/4642510/)

---

# Approach
123456789, k = 3
divisor = 10 ** k => 10 ** 3 => 1000

123456789 % 1000 = 789
123456789/10 = next_iteration_num = 12345678

12345678 % 1000 = 678
12345678/10 = next_iteration_num = 1234567

1234567 % 1000 = 567
1234567/10 = next_iteration_num = 123456

.
.
.

12 % 1000 -> stop iteration as 12 < (1000/10)

# Complexity
- Time complexity:
O(log(n))

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec divisor_substrings(num :: integer, k :: integer) :: integer
  def divisor_substrings(num, k), do: do_divisor_substrings(num, num, 10 ** k, 0)

  defp do_divisor_substrings(num, rest_num, divisor, acc) when rest_num >= div(divisor, 10) do
    sub = rem(rest_num, divisor)
    acc = if sub != 0 && rem(num, sub) == 0, do: acc + 1, else: acc
    do_divisor_substrings(num, div(rest_num, 10), divisor, acc)
  end
  defp do_divisor_substrings(_, _, _, acc), do: acc
end
```