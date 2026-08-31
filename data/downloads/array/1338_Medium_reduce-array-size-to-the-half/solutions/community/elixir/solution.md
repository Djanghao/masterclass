# Solution || Elixir

**Author:** nirako
**Votes:** 0
**Link:** [https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/3974285/](https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/3974285/)

---

# Code
```
defmodule Solution do
  @spec min_set_size(arr :: [integer]) :: integer
  def min_set_size(arr) do
    count_frequencies(arr, %{})
    |> to_key_value_arr()
    |> select_min_set(length(arr))
    |> elem(1)
    |> length()
  end

  defp select_min_set(arr, len) do
    half = len / 2
    arr
    |> Enum.sort(fn {_, a}, {_, b} -> a > b end)
    |> Enum.reduce({len, []}, fn {num, count}, {cur_sum, ans} ->
      if half < cur_sum, do: {cur_sum - count, [num | ans]}, else: {cur_sum, ans} end)
  end

  defp to_key_value_arr(map) do
    Enum.map(map, fn {key, value} -> {key, value} end)
  end

  defp count_frequencies([], counts) do
    counts
  end

  defp count_frequencies([head | tail], counts) do
    count_frequencies(tail, Map.update(counts, head, 1, &(&1 + 1)))
  end
end
```