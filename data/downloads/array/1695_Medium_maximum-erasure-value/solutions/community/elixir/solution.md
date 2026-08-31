# Elixir two pointers

**Author:** stevensonmt
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-erasure-value/solutions/2144529/](https://leetcode.com/problems/maximum-erasure-value/solutions/2144529/)

---

```elixir
defmodule Solution do
  @spec maximum_unique_subarray(nums :: [integer]) :: integer
  def maximum_unique_subarray(nums) do
    arr = nums |> Enum.with_index() |> Map.new(fn {v,k} -> {k, v} end)
    limit = map_size(arr)
    sums = 1..limit |> Enum.reduce(Map.new([{0,0}]), fn i, sums -> Map.put(sums, i, arr[i - 1] + sums[i - 1]) end)
    left = 0
    right = 0
    sub = Map.new()
    max_sum = 0

    find_max_unique_sub(left, right, limit, sub, arr, sums, max_sum)
  end
  
  defp find_max_unique_sub(left, right, limit, _, _, sums, max_sum) when right >= limit, do: max(max_sum, sums[limit] - sums[left])
  defp find_max_unique_sub(left, right, limit, sub, arr, sums, max_sum) do
    {left, max_sum} = 
        if Map.has_key?(sub, arr[right]) do
          last_seen = Map.get(sub, arr[right])
          {max(left, last_seen + 1), max(max_sum, sums[right] - sums[left])}
        else
          {left, max_sum}
        end
    find_max_unique_sub(left, right + 1, limit, Map.put(sub, arr[right], right), arr, sums, max_sum)
  end
end
```