# Elixir, uses Map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/4679572/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/4679572/)

---

# Complexity
- Time complexity:
O(n) where n is the length of the input string

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec check_distances(s :: String.t, distance :: [integer]) :: boolean
  def check_distances(s, distance) do
    dist_tuple = List.to_tuple(distance)
    do_check_distance(s, 0, %{}, dist_tuple)
  end

  defp do_check_distance(<<ch, rest::bytes>>, i, ch_ind_map, dist_tuple) do
    case ch_ind_map[ch] do
      nil -> do_check_distance(rest, i + 1, Map.put(ch_ind_map, ch, i), dist_tuple)
      x -> ch_dist = i - (x + 1)
           ch_dist == elem(dist_tuple, ch - ?a) && 
           do_check_distance(rest, i + 1, ch_ind_map, dist_tuple)
    end
  end
  defp do_check_distance(_, _, _, _), do: true
end
```