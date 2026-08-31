# Elixir, single pass, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/4529508/](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/4529508/)

---

# Approach
Use binary pattern matching to read every character in the string. Keep track of previous character and its continuous count, maximum length of continous ones and zeros.

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec check_zero_ones(s :: String.t) :: boolean
  def check_zero_ones(s), do: do_check_zero_ones(s, nil, 0, {0, 0})

  defp do_check_zero_ones(<<ch, rest::bytes>>, prev, cur_len, {max_zero, max_one}) when ch == prev do
    do_check_zero_ones(rest, ch, cur_len + 1, {max_zero, max_one})
  end
  defp do_check_zero_ones(<<ch, rest::bytes>>, prev, cur_len, {max_zero, max_one}) do
    cond do
      prev == ?0 ->  do_check_zero_ones(rest, ch, 1, {max(cur_len, max_zero), max_one})
      true ->  do_check_zero_ones(rest, ch, 1, {max_zero, max(cur_len, max_one)})
    end
  end
  defp do_check_zero_ones(_, prev, cur_len, {max_zero, max_one}) do
    cond do
      prev == ?0 -> max_one > max(cur_len, max_zero)
      true -> max(cur_len, max_one) > max_zero
    end
  end
end
```