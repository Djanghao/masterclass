# Elixir, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/4595704/](https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/4595704/)

---

# Approach
In one iteration, find the number of elements smaller than the target and the target count. The index of the target element after sorting will start from the smaller number count.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec target_indices(nums :: [integer], target :: integer) :: [integer]
  def target_indices(nums, target), do: do_target_indices(nums, target, 0, 0)

  defp do_target_indices([hd | tl], target, smaller_num_count, target_count) do
    cond do
      hd > target -> do_target_indices(tl, target, smaller_num_count, target_count)
      hd < target -> do_target_indices(tl, target, smaller_num_count + 1, target_count)
      true -> do_target_indices(tl, target, smaller_num_count, target_count + 1)
    end
  end
  defp do_target_indices(_, _, smaller_num_count, target_count) do
    cond do
      target_count == 0 -> []
      true -> smaller_num_count..(smaller_num_count + target_count - 1) |> Enum.to_list
    end
  end 
end
```