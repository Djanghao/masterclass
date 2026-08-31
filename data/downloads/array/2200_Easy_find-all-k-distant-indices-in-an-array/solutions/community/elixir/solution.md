# Elixir, O(n), no maps

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/4627595/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/4627595/)

---

# Approach
Iterate the numbers and find the length of the list and accumulate the indexes of keys. Iterate the key indexes and build the result by adding the indexes falling in the range (key_index - k, key_index + k).Keep track of the previous boundaries to avoid adding duplicate indexes.

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec find_k_distant_indices(nums :: [integer], key :: integer, k :: integer) :: [integer]
  def find_k_distant_indices(nums, key, k) do
    {key_i, len} = for x <- nums, reduce: {[], 0} do
      {acc, i} -> if x == key, do: {[i | acc], i + 1}, else: {acc, i + 1}
    end
    do_find_k_dist_i(key_i, k, len - 1, [])
  end

  defp do_find_k_dist_i([hd | tl], k, right_boundary, acc) do
    first = max(0, hd - k)
    last = min(hd + k, right_boundary)
    do_find_k_dist_i(tl, k, first - 1, prepend_range(first, last, acc))
  end
  defp do_find_k_dist_i(_, _, _, acc), do: acc

  defp prepend_range(first, last, acc) when first <= last do
    prepend_range(first, last - 1, [last | acc])
  end
  defp prepend_range(_, _, acc), do: acc
end
```