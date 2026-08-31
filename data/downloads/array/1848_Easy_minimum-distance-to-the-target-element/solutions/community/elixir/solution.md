# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/4526987/](https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/4526987/)

---

# Approach
Uses tail call recursion to iterate the elements and keeps track of the minimum distance between target index and start.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec get_min_distance(nums :: [integer], target :: integer, start :: integer) :: integer
  def get_min_distance(nums, target, start), do: do_get_min_distance(nums, target, start, 0, nil)

  defp do_get_min_distance([hd | tl], target, start, i, min_dist) do
    cond do
      hd != target -> do_get_min_distance(tl, target, start, i + 1, min_dist)
      true -> do_get_min_distance(tl, target, start, i + 1, min(min_dist, abs(i - start)))
    end
  end
  defp do_get_min_distance(_, _, _, _, min_dist), do: min_dist
end
```