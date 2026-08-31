# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/4341280/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/4341280/)

---

# Approach
Uses tail call recursion to read the frequency and the value, accumulates the result based on the read frequency and value.

# Complexity
- Time complexity:
O(m) where m is the sum of all frequencies in the list

- Space complexity:
O(m)

# Code
```
defmodule Solution do
  @spec decompress_rl_elist(nums :: [integer]) :: [integer]
  def decompress_rl_elist(nums), do: do_decompress_rl_elist(nums, [])

  defp do_decompress_rl_elist([freq, val | tl], res), do: do_decompress_rl_elist(tl, prepend(res, val, freq))
  defp do_decompress_rl_elist([], res), do: Enum.reverse(res)

  defp prepend(acc, val, n) when n > 0, do: prepend([val | acc], val, n - 1)
  defp prepend(acc, _ , _), do: acc
end
```