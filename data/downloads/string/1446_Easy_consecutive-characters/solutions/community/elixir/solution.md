# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/consecutive-characters/solutions/4368389/](https://leetcode.com/problems/consecutive-characters/solutions/4368389/)

---

# Approach
Iterate every character in the string using binary pattern matching and compare it with the previous character to keep track of the current score and max score.

# Complexity
- Time complexity:
O(n) where n is the number of characters in the string.

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec max_power(s :: String.t) :: integer
  def max_power(<<f, rest::bytes>>), do: do_max_power(rest, f, 1, 1)

  defp do_max_power(<<f, rest::bytes>>, prev_ch, cur_power, max_power) do
    cond do
      f == prev_ch ->  do_max_power(rest, prev_ch, cur_power + 1, max_power)
      true -> do_max_power(rest, f, 1, max(max_power, cur_power))
    end
  end
  defp do_max_power(_, _, cur_power, max_power), do: max(cur_power, max_power)
end
```