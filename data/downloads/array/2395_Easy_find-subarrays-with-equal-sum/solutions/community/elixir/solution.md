# Elixir, MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/4675267/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/4675267/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec find_subarrays(nums :: [integer]) :: boolean
  def find_subarrays(nums), do: do_find_subarrays(nums, MapSet.new())

  defp do_find_subarrays([hd, hd1 | tl], sum_set) do
    sum = hd + hd1
    MapSet.member?(sum_set, sum) || do_find_subarrays([hd1 | tl], MapSet.put(sum_set, sum))
  end
  defp do_find_subarrays(_, _), do: false
end
```