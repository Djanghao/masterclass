# Elixir, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/4766492/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/4766492/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec longest_alternating_subarray(nums :: [integer], threshold :: integer) :: integer
  def longest_alternating_subarray(nums, threshold), do: do_find(nums, threshold, 0, 0)

  defp do_find([hd | tl], threshold, cur_count, max_count) do
    cond do
      hd > threshold -> do_find(tl, threshold, 0, max(cur_count, max_count))
      rem(hd, 2) != rem(cur_count, 2) -> do_find(tl, threshold, (if rem(hd, 2) == 0, do: 1, else: 0), max(cur_count, max_count))
      true -> do_find(tl, threshold, cur_count + 1, max_count)
    end
  end
  defp do_find(_, _, cur_count, max_count), do: max(cur_count, max_count)
end
```