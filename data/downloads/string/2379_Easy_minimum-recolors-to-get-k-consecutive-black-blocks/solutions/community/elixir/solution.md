# Elixir, sliding window

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/4674857/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/4674857/)

---

# Approach
Keep track of the 'W' count in each group of blocks. Return the smallest 'W' count present in a group. A group is a consequtive set of characters of length k.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec minimum_recolors(blocks :: String.t, k :: integer) :: integer
  def minimum_recolors(blocks, k) do 
    initial_w_count = get_w_count(blocks, 0, k, 0)
    if initial_w_count == 0, do: 0,
    else: do_minimum_recolors(blocks, k, byte_size(blocks) - 1, k, initial_w_count, initial_w_count)
  end

  defp do_minimum_recolors(blocks, i, max_i, k, w_count, res) when i <= max_i do
    cur_char = :binary.at(blocks, i)
    char_to_remove = :binary.at(blocks, i - k)
    w_count = if cur_char == ?W, do: w_count + 1, else: w_count
    w_count = if char_to_remove == ?W, do: w_count - 1, else: w_count
    if w_count == 0, do: 0,
    else: do_minimum_recolors(blocks, i + 1, max_i, k, w_count, min(res, w_count))
  end
  defp do_minimum_recolors(_, _, _, _, _, res), do: res

  defp get_w_count(blocks, i, k, count) when i < k do
    count = if :binary.at(blocks, i) == ?W, do: count + 1, else: count
    get_w_count(blocks, i + 1, k, count)
  end
  defp get_w_count(_, _, _, count), do: count
end
```