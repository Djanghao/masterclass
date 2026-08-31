# Elixir, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/4428733/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/4428733/)

---

# Approach
Manually iterate each ball, calculate it's digit sum and keep track of ball count for the digit sums. Keep track and return the maximum balls after iteration.

# Complexity
- Time complexity:
O(n.log(high_limit)) where n = high_limit - low_limit

- Space complexity:
O(log(high_limit))

# Code
```
defmodule Solution do
  @spec count_balls(low_limit :: integer, high_limit :: integer) :: integer
  def count_balls(low_limit, high_limit), do: do_count_balls(low_limit, high_limit, %{}, 0)

  defp do_count_balls(i, n, count_map, max_balls) when i <= n do
    digit_sum = digit_sum(i, 0)
    new_count = Map.get(count_map, digit_sum, 0) + 1
    do_count_balls(i + 1, n, Map.put(count_map, digit_sum, new_count), max(max_balls, new_count))
  end
  defp do_count_balls(_, _, _, max_balls), do: max_balls

  defp digit_sum(n, acc) when n > 0, do: digit_sum(div(n, 10), acc + rem(n, 10))
  defp digit_sum(_, acc), do: acc
end
```