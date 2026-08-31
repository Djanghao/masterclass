# Elixir, Sweep line algorithm

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/4533835/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/4533835/)

---

# Complexity
- Time complexity:
O(n + m) where n is the length of ranges and m is (right - left + 1)

- Space complexity:
O(m)

# Code
```
defmodule Solution do
  @spec is_covered(ranges :: [[integer]], left :: integer, right :: integer) :: boolean
  def is_covered(ranges, left, right) do
    for [f, l] <- ranges, overlapping_range = get_overlapping_range(f, l, left, right), reduce: %{} do
      map -> Map.update(map, hd(overlapping_range), 1, &(&1 + 1)) 
             |> Map.update(List.last(overlapping_range) + 1 , -1, &(&1 - 1)) 
    end |> do_is_covered(left, right, 0)
  end

  defp do_is_covered(line_sweep_map, left, right, prefix_sum) when left <= right do
    prefix_sum = prefix_sum + Map.get(line_sweep_map, left, 0)
    prefix_sum > 0 and do_is_covered(line_sweep_map, left + 1, right, prefix_sum)
  end
  defp do_is_covered(_, _, _, _), do: true

  defp get_overlapping_range(s1, e1, s2, e2) do
    r_s = max(s1, s2) 
    r_e = min(e1, e2)
    r_s <= r_e and [r_s, r_e]
  end
end
```