# Elixir, O(log(n))

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/4718793/](https://leetcode.com/problems/alternating-digit-sum/solutions/4718793/)

---

# Complexity
- Time complexity:
O(log(n))

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec alternate_digit_sum(n :: integer) :: integer
  def alternate_digit_sum(n), do: do_alternate_digit_sum(n, true, 0, 0)

  defp do_alternate_digit_sum(n, pos?, no_digits, acc) when n > 0 do
    digit = rem(n, 10)
    acc = if pos?, do: acc + digit, else: acc - digit
    do_alternate_digit_sum(div(n, 10), !pos?, no_digits + 1, acc)
  end
  defp do_alternate_digit_sum(_, _, no_digits, acc), do: if rem(no_digits, 2) == 0, do: -acc, else: acc
end
```