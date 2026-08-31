# Elixir two pointer solution with recursion

**Author:** stevensonmt
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/2140155/](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/2140155/)

---

```elixir
defmodule Solution do
  @spec min_operations(nums :: [integer], x :: integer) :: integer
  def min_operations(nums, x) do
    target = Enum.sum(nums) - x 
    max = Enum.count(nums)
    find_min_ops(nums, target, max)
  end
  
  def find_min_ops(_, 0, max), do: max
  def find_min_ops(nums, target, max) do
    nums
    |> Enum.with_index()
    |> Map.new(fn {v, k} -> {k, v} end)
    |> max_len(target, max)
    |> min_ops(max)
  end
      
  def max_len(nums_arr, target, max) do
    0..max - 1
    |> Enum.reduce({-1, 0, 0}, fn j, {ml, ss, i} ->
                      {uml, uss, ui} = find_max_sub(nums_arr, i, j, ml, target, ss + nums_arr[j]) 
                      {max(uml, ml), uss, ui} 
                    end)
    |> elem(0)
  end
      
  def min_ops(max_sub_len, _) when max_sub_len < 0, do: max_sub_len
  def min_ops(max_sub_len, max), do: max - max_sub_len
      
  def find_max_sub(_nums, start, finish, max_len, target, sub_sum) when start > finish or sub_sum < target, do: {max_len, sub_sum, start}
  def find_max_sub(_, start, finish, max_len, target, target), do: {max(max_len, finish - start + 1), target, start}
  def find_max_sub(nums, start, finish, max_len, target, sub_sum) do
    find_max_sub(nums, start + 1, finish, max_len, target, sub_sum - nums[start])
  end
end
```