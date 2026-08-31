# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/4771101/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/4771101/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 249ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 73.95MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec delete_greatest_value(grid :: [[integer]]) :: integer
  def delete_greatest_value(grid) do
    s_grid =
      Enum.reduce(grid, [], fn row, s_grid ->
        [Enum.sort(row)] ++ s_grid
      end)
    Enum.reduce(s_grid, %{}, fn row, col_max ->
      Enum.reduce(row, {0, col_max}, fn col, {j, col_max} ->
        {j + 1, Map.put(col_max, j, max(Map.get(col_max, j, 0), col))}
      end)
      |> elem(1)
    end)
    |> Map.values()
    |> Enum.sum()
  end
end

```