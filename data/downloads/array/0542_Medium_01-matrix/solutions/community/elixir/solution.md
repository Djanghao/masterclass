# Elixir - No Graph, No BFS, No DFS

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/01-matrix/solutions/3779250/](https://leetcode.com/problems/01-matrix/solutions/3779250/)

---

# Approach
1. Set all 1's in the `mat` to `nil`
2. For each row, go left to right, and update the current value according to the previous value.
3. For each column, go top to bottom, and update the current value.
4. For each row, go right to left, and update the current value.
5. For each column, go bottom to top, and update the current value.

See `val/2` for the strategy of update.

# Complexity
- Time complexity:
$$O(width \	imes height)$$

- Space complexity:
$$O(width \	imes height)$$
If using an imperative language, this can be $$O(1)$$.

# Code
```
defmodule Solution do
  @spec update_matrix(mat :: [[integer]]) :: [[integer]]
  def update_matrix(mat) do
    max_i = length(mat) - 1
    max_j = length(hd(mat)) - 1
    
    mat
    |> to_grid()
    |> l2r(max_i, max_j)
    |> t2b(max_i, max_j)
    |> r2l(max_i, max_j)
    |> b2t(max_i, max_j)
    |> to_matrix(max_i, max_j)
  end

  defp l2r(grid, max_i, max_j) do
    for i <- 0..max_i, j <- 0..max_j, reduce: grid do
      grid -> Map.update!(grid, {i, j}, &val(&1, grid[{i, j - 1}]))
    end
  end

  defp r2l(grid, max_i, max_j) do
    for i <- 0..max_i, j <- max_j..0//-1, reduce: grid do
      grid -> Map.update!(grid, {i, j}, &val(&1, grid[{i, j + 1}]))
    end
  end

  defp t2b(grid, max_i, max_j) do
    for j <- 0..max_j, i <- 0..max_i, reduce: grid do
      grid -> Map.update!(grid, {i, j}, &val(&1, grid[{i - 1, j}]))
    end
  end

  defp b2t(grid, max_i, max_j) do
    for j <- 0..max_j, i <- max_i..0//-1, reduce: grid do
      grid -> Map.update!(grid, {i, j}, &val(&1, grid[{i + 1, j}]))
    end
  end

  defp val(nil, nil), do: nil
  defp val(nil, prev), do: prev + 1
  defp val(0, _prev), do: 0
  defp val(old, nil), do: old
  defp val(old, prev), do: min(old, prev + 1)

  defp to_grid(mat) do
    for {row, i} <- Stream.with_index(mat),
        {val, j} <- Stream.with_index(row),
        into: %{},
        do: {{i, j}, val == 0 && 0 || nil}
  end

  defp to_matrix(grid, max_i, max_j) do
    for i <- 0..max_i do
      for j <- 0..max_j, do: grid[{i, j}]
    end
  end
end
```