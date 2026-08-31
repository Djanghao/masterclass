# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/4308303/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/4308303/)

---

# Approach
Find the sum of the numbers in one pass. If the sum is not divisible by 3, then the result is false. Iterate the numbers and find two partitions. If there are still numbers after the second partition then the result is true.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec can_three_parts_equal_sum(arr :: [integer]) :: boolean
  def can_three_parts_equal_sum(arr) do
    sum = Enum.sum(arr)
    if rem(sum, 3) != 0, do: false, else: do_can_three_parts_equal_sum(arr, 0, div(sum, 3), 0)
  end

  defp do_can_three_parts_equal_sum([hd | tl], cur_sum, tgt, partitions) do
    cur_sum = cur_sum + hd
    if cur_sum == tgt do
      case partitions do
        0 -> do_can_three_parts_equal_sum(tl, 0, tgt, 1)
        1 -> tl != []
      end
    else
      do_can_three_parts_equal_sum(tl, cur_sum, tgt, partitions)
    end
  end
  defp do_can_three_parts_equal_sum(_, _, _, _), do: false
end
```