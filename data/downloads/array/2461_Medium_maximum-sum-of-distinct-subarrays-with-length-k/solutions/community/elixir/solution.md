# Elixir - Sliding Window

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/6060485/](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/6060485/)

---

# Complexity
- Time complexity: $$O(n \\log k)$$ in worst cases (periodic `nums` with `period = k - 1`).

- Space complexity: $$O(k \\log k)$$

# Code
```elixir []
defmodule Solution do
  @spec maximum_subarray_sum(nums :: [integer], k :: integer) :: integer
  def maximum_subarray_sum(nums, k) do
    nums = List.to_tuple(nums)
    solve(nums, k, 0, %{}, 0, 0)
  end

  # Arguments:
  #   - nums: a tuple containing all the input nums keeping the order
  #   - k: max window size
  #   - i: current index (`{nums[i], i}` is not in the window yet)
  #   - window: the sliding window as a map. %{num => index}
  #   - sum: sum of the window
  #   - max: maximum sum 
  defp solve(nums, k, i, window, sum, max) when i == tuple_size(nums) do
    if map_size(window) == k do
      max(sum, max)
    else
      max
    end
  end

  defp solve(nums, k, i, window, sum, max) do
    n = elem(nums, i)

    cond do
      map_size(window) == k ->
        m = elem(nums, i - k)
        new_window = Map.delete(window, m)
        new_sum = sum - m
        solve(nums, k, i, new_window, new_sum, max(max, sum))

      j = window[n] ->
        {new_window, deleted} = Map.split_with(window, &elem(&1, 1) > j)
        new_sum = sum - Enum.sum(Map.keys(deleted))
        solve(nums, k, i, new_window, new_sum, max)

      true ->
        new_window = Map.put(window, n, i)
        new_sum = sum + n
        solve(nums, k, i + 1, new_window, new_sum, max)
    end
  end
end
```