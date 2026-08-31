# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/4532680/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/4532680/)

---

# Approach
Uses binary pattern matching to read characters in the string. Keeps track of the previous 2 characters, iterates the characters one by one, checks them for repetition and keeps track of the result count.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec count_good_substrings(s :: String.t) :: integer
  def count_good_substrings(s) when byte_size(s) < 3, do: 0
  def count_good_substrings(<<x, y, rest::bytes>>), do: do_count_good_substrings(rest, x, y, 0)

  defp do_count_good_substrings(<<z, rest::bytes>>, x, y, res) do
     res = if (x != y and y != z and z != x), do: res + 1, else: res
     do_count_good_substrings(rest, y, z, res)
  end
  defp do_count_good_substrings(_, _, _, res), do: res
end
```