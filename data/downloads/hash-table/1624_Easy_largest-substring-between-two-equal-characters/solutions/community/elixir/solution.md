# Elixir, binary pattern matching, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4398074/](https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4398074/)

---

# Approach
Iterate the characters using binary pattern matching. Keep track of the characters and their first occuring index in a map. The length of a substring between two characters can be calculated by  index of current position - 1 - index of first position.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec max_length_between_equal_characters(s :: String.t) :: integer
  def max_length_between_equal_characters(s), do: do_max_length(s, 0, %{}, -1)

  defp do_max_length(<<f, rest::bytes>>, i, index_map, max_length) do
    case index_map[f] do
      nil -> do_max_length(rest, i + 1, Map.put(index_map, f, i), max_length)
      x -> do_max_length(rest, i + 1, index_map, max(max_length, i - 1 - x))
    end
  end
  defp do_max_length(<<>>, _, _, max_length), do: max_length
end
```