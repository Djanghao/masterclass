# Elixir, Enum.split_with

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-array-by-parity-ii/solutions/4290065/](https://leetcode.com/problems/sort-array-by-parity-ii/solutions/4290065/)

---

# Approach
Uses Enum.split_with to create even and odd lists. Iterates and combines the even and odd numbers into the result.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec sort_array_by_parity_ii(nums :: [integer]) :: [integer]
  def sort_array_by_parity_ii(nums) do 
    {even, odd} = Enum.split_with(nums, &(rem(&1, 2) == 0))
    do_sort(even, odd, [])
  end

  defp do_sort([], [], res), do: res
  defp do_sort([e | e_tl], [o | o_tl], res), do: do_sort(e_tl, o_tl, [e, o | res])
end
```