# Elixir, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/shuffle-string/solutions/4380751/](https://leetcode.com/problems/shuffle-string/solutions/4380751/)

---

# Approach
Iterate the indices and the string to map all the indices with characters. Iterate the indices in the correct order and construct the string.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec restore_string(s :: String.t, indices :: [integer]) :: String.t
  def restore_string(s, indices) do
    index_map = index_map(s, indices, %{})
    for x <- 0..map_size(index_map) - 1, reduce: <<>> do
      res -> <<res::bytes, index_map[x]>>
    end
  end

  defp index_map(<<f, rest::bytes>>, [hd | tl], map), do: index_map(rest, tl, Map.put(map, hd, f))
  defp index_map(_, _, map), do: map
end
```