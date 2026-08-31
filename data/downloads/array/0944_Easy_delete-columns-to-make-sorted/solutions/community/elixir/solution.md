# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/4297037/](https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/4297037/)

---

# Approach
Uses tail call recursion and binary pattern matching to each every character of same column in all the strings and update the result count if they are not sorted.

# Complexity
- Time complexity:
O(n * m) where n is the total number of strings and m is the length of a string.

- Space complexity:
O(n * m)

# Code
```
defmodule Solution do
  @spec min_deletion_size(strs :: [String.t]) :: integer
  def min_deletion_size(strs), do: do_min_deletion_size(strs, 0, true, 0, [])

  defp do_min_deletion_size([<<f, rest::bytes>> | tl], prev, sorted?, col_count, acc) do
      do_min_deletion_size(tl, f, (sorted? and f >= prev), col_count, [rest | acc])
  end

  defp do_min_deletion_size([], prev, sorted?, col_count, acc) do
    col_count = if sorted?, do: col_count, else: col_count + 1
    if byte_size(hd(acc)) == 0, do: col_count, else: do_min_deletion_size(Enum.reverse(acc), 0, true, col_count, [])
  end
end
```