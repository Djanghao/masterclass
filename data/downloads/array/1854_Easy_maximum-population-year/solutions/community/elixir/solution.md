# Elixir, sweep line algorithm

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-population-year/solutions/4528546/](https://leetcode.com/problems/maximum-population-year/solutions/4528546/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec maximum_population(logs :: [[integer]]) :: integer
  def maximum_population(logs) do
    line_sweep_arr = for [b, d] <- logs, reduce: :array.new(size: 101, fixed: true, default: 0) do
      arr -> arr = set_val(arr, b, get_val(arr, b) + 1) 
             set_val(arr, d, get_val(arr, d) - 1)
    end
    for i <- 0..100, year = i + 1950, val = get_val(line_sweep_arr, year), reduce: {0, 0, nil} do
      {prefix_sum, max_pre_sum, max_year} -> prefix_sum = prefix_sum + val
        if prefix_sum > max_pre_sum, do: {prefix_sum, prefix_sum, year}, else: {prefix_sum, max_pre_sum, max_year}
    end |> elem(2) 
  end

  defp get_val(arr, year), do: :array.get(year - 1950, arr)
  defp set_val(arr, year, val), do: :array.set(year - 1950, val, arr)
end
```