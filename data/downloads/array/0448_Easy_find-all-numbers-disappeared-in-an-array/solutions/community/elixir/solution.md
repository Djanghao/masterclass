# Elixir, uses MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/4198281/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/4198281/)

---

# Approach
Create a map set and calculate the length of the list in first pass. Create the missing numbers list in the second pass by checking the each number in the range 1..length's existence in the map set.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec find_disappeared_numbers(nums :: [integer]) :: [integer]
  def find_disappeared_numbers(nums) do
    {nums_set, len} = get_nums_set(nums, MapSet.new, 0)
    do_find_disappeared_numbers(len, nums_set, [])
  end

  defp do_find_disappeared_numbers(i, nums_set, acc) when i > 0 do
    acc = if MapSet.member?(nums_set, i), do: acc, else: [i | acc]
    do_find_disappeared_numbers(i - 1, nums_set, acc)
  end
  defp do_find_disappeared_numbers(_, _, acc), do: acc

  defp get_nums_set([hd | tl], set, len), do: get_nums_set(tl, MapSet.put(set, hd), len + 1)
  defp get_nums_set([], set, len), do: {set, len}
end
```