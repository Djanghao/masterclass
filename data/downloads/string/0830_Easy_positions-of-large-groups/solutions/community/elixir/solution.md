# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/positions-of-large-groups/solutions/4271748/](https://leetcode.com/problems/positions-of-large-groups/solutions/4271748/)

---

# Approach
Uses tail call recursion and binary pattern matching to iterate the characters one by one and accumulate the result.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec large_group_positions(s :: String.t) :: [[integer]]
  def large_group_positions(<<f, rest::bytes>>), do: do_large_group_positions(rest, f, 1, 0, 0, [])

  defp do_large_group_positions(<<>>, _prev_ch, count, s_i, e_i, res), do: if count >= 3, do: Enum.reverse([[s_i, e_i] | res]), else: Enum.reverse(res)
  defp do_large_group_positions(<<f, rest::bytes>>, prev_ch, count, s_i, e_i, res) do
     cond do
       f == prev_ch -> do_large_group_positions(rest, prev_ch, count + 1, s_i, e_i + 1, res)
       count >= 3 -> do_large_group_positions(rest, f, 1, e_i + 1, e_i + 1, [[s_i, e_i] | res])
       true -> do_large_group_positions(rest, f, 1, e_i + 1, e_i + 1, res)
     end
  end
end
```