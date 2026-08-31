# Elixir, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-alternating-subarray/solutions/4770842/](https://leetcode.com/problems/longest-alternating-subarray/solutions/4770842/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec alternating_subarray(nums :: [integer]) :: integer
  def alternating_subarray(nums), do: do_alternating_subarr(nums, 0, 0, 0)

  defp do_alternating_subarr([n1, n2 | tl], prev_diff, cur_count, max_count) do
    case  n2 - n1 do
      1 when prev_diff == 0 -> do_alternating_subarr([n2 | tl], 1, 2, max_count)
      1 when prev_diff == -1 -> do_alternating_subarr([n2 | tl], 1, cur_count + 1, max_count)
      -1 when prev_diff == 1 -> do_alternating_subarr([n2 | tl], -1, cur_count + 1, max_count)
      1 -> do_alternating_subarr([n2 | tl], 1, 2, max(cur_count, max_count))
      _ -> do_alternating_subarr([n2 | tl], 0, 0, max(cur_count, max_count))
    end
  end
  defp do_alternating_subarr(_, _, cur_count, max_count) do 
    res = max(cur_count, max_count)
    if res == 0, do: -1, else: res
  end
end
```