# Elixir, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-binary-substrings/solutions/4246746/](https://leetcode.com/problems/count-binary-substrings/solutions/4246746/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec count_binary_substrings(s :: String.t) :: integer
  def count_binary_substrings(s) do
    for <<x <- s>>, reduce: {0, 0, nil, 0} do
      {prev_count, cur_count, prev, res} ->
        cond do
          x != prev -> {cur_count, 1, x, res + min(prev_count, cur_count)}
          true -> {prev_count, cur_count + 1, x, res}
        end
    end |> then(fn {prev_count, cur_count, _, res} -> res + min(prev_count, cur_count) end)
  end
end
```