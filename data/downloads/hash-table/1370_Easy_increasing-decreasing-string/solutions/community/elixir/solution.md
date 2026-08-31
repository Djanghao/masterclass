# Elixir, uses frequency map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/4352639/](https://leetcode.com/problems/increasing-decreasing-string/solutions/4352639/)

---

# Approach
Create a frequency map of all the characters in the string. Since it only has lower case alphanbets, iterate the range ?a..?z and construct the result if the character is present in the frequency map. Update the frequency map by decrementing count of used letters. Alternate the range to ?z..?a and continue the process until the frequency map is empty.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec sort_string(s :: String.t) :: String.t
  def sort_string(s), do: do_sort_string(?a..?z, get_freq_map(s, %{}), <<>>)

  defp do_sort_string(range, freq_map, res)  when map_size(freq_map) > 0 do
    {freq_map, res} = for ch <- range, val = freq_map[ch], reduce: {freq_map, res} do
      {freq_map, res} -> 
         map =if val == 1, do: Map.delete(freq_map, ch), else: Map.put(freq_map, ch, val - 1) 
        {map, <<res::bytes, ch>>}
    end
    range = if range == ?a..?z, do: ?z..?a, else: ?a..?z
    do_sort_string(range, freq_map, res)
  end
  defp do_sort_string(_, _, res), do: res

  defp get_freq_map(<<f, rest::bytes>>, map), do: get_freq_map(rest, Map.update(map, f, 1, &(&1 + 1)))
  defp get_freq_map(<<>>, map), do: map
end
```