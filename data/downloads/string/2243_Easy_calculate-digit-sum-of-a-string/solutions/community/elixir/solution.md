# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/4637674/](https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/4637674/)

---

# Approach
Iterate the characters using binary pattern matching, keep track of the sum of the characters. For every k characters, append the sum to the result.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec digit_sum(s :: String.t, k :: integer) :: String.t
  def digit_sum(s, k) when byte_size(s) > k, do: do_digit_sum(s, 0, 0, k, <<>>) |> digit_sum(k)
  def digit_sum(s, _), do: s

  defp do_digit_sum(s, grp_sum, i, k, acc) when i == k do
    do_digit_sum(s, 0, 0, k, <<acc::bytes, "#{grp_sum}"::bytes>>)
  end
  defp do_digit_sum(<<ch, rest::bytes>>, grp_sum, i, k, acc) do
    do_digit_sum(rest, grp_sum + (ch - ?0), i + 1, k, acc)
  end
  defp do_digit_sum(<<>>, grp_sum, i, k, acc) do
    if i > 0, do: <<acc::bytes, "#{grp_sum}"::bytes>>, else: acc
  end
end
```