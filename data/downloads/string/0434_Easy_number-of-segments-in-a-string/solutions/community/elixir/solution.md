# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-segments-in-a-string/solutions/4197950/](https://leetcode.com/problems/number-of-segments-in-a-string/solutions/4197950/)

---

# Approach
Count the occurrences of a non-space character followed by a space. If the last character is non_space add one to result.

# Complexity
- Time complexity:
O(n) where n is the length of the string s

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec count_segments(s :: String.t) :: integer
  def count_segments(<<>>), do: 0
  def count_segments(<<ch, rest::bytes>>), do: do_count_segments(rest, ch, 0)

  defp do_count_segments(<<ch, rest::bytes>>, prev, acc) do
    acc = if prev != ?\\s && ch == ?\\s, do: acc + 1, else: acc
    do_count_segments(rest, ch, acc)
  end
  defp do_count_segments(<<>>, prev, acc), do: if prev != ?\\s, do: acc + 1, else: acc
end
```