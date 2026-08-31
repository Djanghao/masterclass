# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/4308456/](https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/4308456/)

---

# Approach
Uses tail call recursion to calculate the decimal value at each number and accumulates the result.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec prefixes_div_by5(nums :: [integer]) :: [boolean]
  def prefixes_div_by5(nums), do: do_prefixes_div_by_5(nums, 0, [])

  defp do_prefixes_div_by_5([hd | tl], total, acc) do
    total = (total * 2) + hd
    do_prefixes_div_by_5(tl, total, [rem(total, 5) == 0 | acc])
  end
  defp do_prefixes_div_by_5([], _, acc), do: Enum.reverse(acc)
end
```