# Elixir bottom-up DP

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4670619/](https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4670619/)

---

# Code
```
defmodule Solution do
  @spec max_sum_after_partitioning(arr :: [integer], k :: integer) :: integer
  def max_sum_after_partitioning(arr, k) do
    tabulation(arr, [{0, 0}], k)
  end

  defp tabulation([x | arr], dp, k) do
    Enum.take(dp, k)
    |> Enum.with_index(1)
    |> Enum.reduce({x, 0}, fn {{y, prev}, i}, {largest, res} ->
      res = max(res, largest * i + prev)
      largest = max(largest, y)
      {largest, res}
    end)
    |> then(fn {_, res} ->
      tabulation(arr, [{x, res} | dp], k)
    end)
  end
  defp tabulation([], [{_, res} | _], _), do: res
end
```