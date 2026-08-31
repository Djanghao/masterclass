# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarray-sum-equals-k/solutions/2297529/](https://leetcode.com/problems/subarray-sum-equals-k/solutions/2297529/)

---

```elixir
defmodule Solution do
  @spec subarray_sum(nums :: [integer], k :: integer) :: integer
  def subarray_sum(nums, k) do
    nums |> Enum.reduce({0, 0, %{0 => 1}}, fn n, {ans, pre_sum, map} ->
      pre_sum = pre_sum + n
      ans = ans + Map.get(map, pre_sum - k, 0)
      {ans, pre_sum, Map.update(map, pre_sum, 1, &(&1 + 1))}
    end)
    |> elem(0)
  end
end
```