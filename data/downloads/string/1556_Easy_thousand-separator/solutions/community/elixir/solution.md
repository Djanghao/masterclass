# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 1
**Link:** [https://leetcode.com/problems/thousand-separator/solutions/4384113/](https://leetcode.com/problems/thousand-separator/solutions/4384113/)

---

# Approach
Extract the last digit of the number and accumulate a number string. Keep track of the digit count and add a separator when the digit count reaches 3.

# Complexity
- Time complexity:
O(log(n))

- Space complexity:
O(log(n))

# Code
```
defmodule Solution do
  @spec thousand_separator(n :: integer) :: String.t
  def thousand_separator(n), do: do_thousand_separator(n, 0, <<>>)

  defp do_thousand_separator(0, _, res), do: if byte_size(res) == 0, do: "0", else: res
  defp do_thousand_separator(n, 3, res), do: do_thousand_separator(n, 0, <<".", res::bytes>>)
  defp do_thousand_separator(n, digit_count, res) do
    digit = rem(n, 10)
    do_thousand_separator(div(n, 10), digit_count + 1, <<"#{digit}", res::bytes>>)
  end
end
```