# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-subarray-i/solutions/4233928/](https://leetcode.com/problems/maximum-average-subarray-i/solutions/4233928/)

---

# Approach
Uses tail call recursion to iterate the numbers to compute the max average. Makes use of the sum of the previous k numbers to compute the next k numbers' sum instead of performing the whole sum each time.

[1,2,3,4,5], k = 3

First_sum = 1 + 2 + 3 = 6
Second_sum = First_sum - 1 + 4 = 9
Third_sum = second_sum - 2 + 5 = 12 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec find_max_average(nums :: [integer], k :: integer) :: float
  def find_max_average([hd | tl] = nums, k) do 
    {sum, rest} = get_first_n_sum(nums, 1, k, 0)
    do_find_max_average(nums, rest, sum, k, sum/k)
  end

  defp do_find_max_average(_nums, [], _prev_sum, _k, max_avg), do: max_avg
  defp do_find_max_average([hd | tl], [hd1 | tl1], prev_sum, k, max_avg) do
    new_sum = prev_sum - hd + hd1
    do_find_max_average(tl, tl1, new_sum, k, max(new_sum/k, max_avg))
  end
  
  defp get_first_n_sum(list, i, n, sum) when i > n, do: {sum, list} 
  defp get_first_n_sum([hd |tl], i, n, sum), do: get_first_n_sum(tl, i + 1, n, sum + hd)
end
```