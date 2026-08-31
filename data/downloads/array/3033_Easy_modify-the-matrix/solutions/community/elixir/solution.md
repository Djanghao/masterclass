# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/modify-the-matrix/solutions/4738017/](https://leetcode.com/problems/modify-the-matrix/solutions/4738017/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 332ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.42MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec modified_matrix(matrix :: [[integer]]) :: [[integer]]
  def modified_matrix(matrix) do
    max_col =
      Enum.reduce(matrix, %{}, fn row, max_col ->
        Enum.reduce(row, {0, max_col}, fn col, {j, max_col} ->
          {j + 1, Map.put(max_col, j, max(Map.get(max_col, j, 0), col))}
        end) |> elem(1)
      end)

    Enum.reduce(matrix, [], fn row, new_rows ->
      cols =
        Enum.reduce(row, {0, []}, fn col, {j, new_cols} ->
          if col == -1 do
            {j + 1, [max_col[j]] ++ new_cols}
          else
            {j + 1, [col] ++ new_cols}
          end
        end)
        |> elem(1)
        |> Enum.reverse()
      [cols] ++ new_rows
    end)
    |> Enum.reverse()  end
end
```