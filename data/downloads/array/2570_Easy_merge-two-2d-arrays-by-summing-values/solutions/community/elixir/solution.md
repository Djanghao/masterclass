# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/4725042/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/4725042/)

---

# Complexity
- Time complexity:
O(n + m) where n and m are the lengths of nums1 and nums2

- Space complexity:
O(n + m)

# Code
```
defmodule Solution do
  @spec merge_arrays(nums1 :: [[integer]], nums2 :: [[integer]]) :: [[integer]]
  def merge_arrays(nums1, nums2), do: do_merge(nums1, nums2, [])

  defp do_merge([[id1, val1] | tl1] = nums1, [[id2, val2] | tl2] = nums2, acc) do
    cond do
      id1 == id2 -> do_merge(tl1, tl2, [[id1, val1 + val2] | acc])
      id1 < id2 -> do_merge(tl1, nums2, [[id1, val1] | acc])
      true -> do_merge(nums1, tl2, [[id2, val2] | acc])
    end
  end
  defp do_merge([], [], acc), do: Enum.reverse(acc)
  defp do_merge([], [el | tl], acc), do: do_merge([], tl, [el | acc])
  defp do_merge([el | tl], [], acc), do: do_merge(tl, [], [el | acc])
end
```