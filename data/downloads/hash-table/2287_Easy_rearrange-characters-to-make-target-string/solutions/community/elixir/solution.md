# Elixir, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/4646968/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/4646968/)

---

# Approach
Create character count maps of s and target. Compare the occurences of characters in both maps to find the result.

# Complexity
- Time complexity:
O(n + m) where n and m are the lengths of s and target

- Space complexity:
O(n + m)

# Code
```
defmodule Solution do
  @spec rearrange_characters(s :: String.t, target :: String.t) :: integer
  def rearrange_characters(s, target) do
    target_ch_count = for <<x <- target>>, reduce: %{} do
      acc -> Map.update(acc, x, 1, &(&1 + 1))
    end
    s_ch_count = for <<x <- s>>, is_map_key(target_ch_count, x), reduce: %{} do
      acc -> Map.update(acc, x, 1, &(&1 + 1))
    end
    do_rearrange_characters(Map.to_list(target_ch_count), s_ch_count, nil)
  end

  defp do_rearrange_characters([{k, v} | tl], s_ch_count, min_res) do
    min_res = min(div(Map.get(s_ch_count, k, 0), v), min_res)
    if min_res == 0, do: 0, else: do_rearrange_characters(tl, s_ch_count, min_res)
  end
  defp do_rearrange_characters(_, _, min_res), do: min_res
end
```