# Elixir two pointers

**Author:** stevensonmt
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-size-subarray-sum/solutions/2140384/](https://leetcode.com/problems/minimum-size-subarray-sum/solutions/2140384/)

---

```elixir
  def min_sub_array_len(target, nums) do
    arr = nums |> Enum.with_index() |> Map.new(fn {v,k} -> {k,v} end)
    min =  find_min_sub(arr, 0, 0, length(nums), 0, target, :not_found)
    if min == :not_found do
      0
    else 
      min
    end
  end
      
  def find_min_sub(_, i, j, limit, _, _, min_len) when i > j or j >= limit, do: min_len
  def find_min_sub(arr, i, j, limit, sum, target, min_len) do
    new_sum = sum + arr[j]
    cond do
      new_sum < target ->
        find_min_sub(arr, i, j + 1, limit, new_sum, target, min_len)
      new_sum >= target ->
        min(j - i + 1, find_min_sub(arr, i + 1, j, limit, sum - arr[i], target, min_len))
    end
  end
  ```