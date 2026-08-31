# Elixir - prefix sum - O(n) - 1 pass

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/contiguous-array/solutions/4881860/](https://leetcode.com/problems/contiguous-array/solutions/4881860/)

---

# Code
```
defmodule Solution do
  @spec find_max_length(nums :: [integer]) :: integer
  def find_max_length(nums) do
    nums |> Enum.with_index() |> 
    Enum.reduce({%{0 => -1}, 0, 0}, fn {num, idx}, {map, sum, max} ->
      num = if num == 0, do: -1, else: 1
      sum = sum + num
      case Map.get(map, sum) do
        nil ->
          {Map.put(map, sum, idx), sum, max}
        prev_idx ->
          max = if (idx - prev_idx) > max, do: idx - prev_idx, else: max
          {map, sum, max}
      end
    end) |> elem(2)
  end
end
```