# Elixir, binary pattern matching, 2 pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-a-character/solutions/4271540/](https://leetcode.com/problems/shortest-distance-to-a-character/solutions/4271540/)

---

# Approach
Collect all the indexes of the character occurences in a list in the first pass. Construct the shortest distance of all indexes in the second pass.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec shortest_to_char(s :: String.t, c :: char) :: [integer]
  def shortest_to_char(s, c) do
    c_ind = get_c_ind(s, c, 0, [])
    do_shortest_to_char(byte_size(s) - 1, c_ind, [])
  end

  defp do_shortest_to_char(-1, c_ind, res), do: res
  defp do_shortest_to_char(i, [hd | tl] = c_ind, res) do
    cond do
      i == hd -> do_shortest_to_char(i - 1, c_ind, [0 | res])
      i > hd -> do_shortest_to_char(i - 1, c_ind, [i - hd | res])
      tl == [] ->  do_shortest_to_char(i - 1, c_ind, [hd - i | res])
      i == hd(tl) -> do_shortest_to_char(i - 1, tl, [0 | res])
      true -> do_shortest_to_char(i - 1, c_ind, [min(hd - i, i - hd(tl)) | res]) 
    end
  end

  defp get_c_ind(<<>>, _c, _i, res), do: res
  defp get_c_ind(<<f, rest::bytes>>, f, i, res), do: get_c_ind(rest, f, i + 1, [i | res])
  defp get_c_ind(<<f, rest::bytes>>, c, i, res), do: get_c_ind(rest, c, i + 1, res)
end
```