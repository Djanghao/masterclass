# Elixir - Recursion with memoization

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/cherry-pickup-ii/solutions/4709548/](https://leetcode.com/problems/cherry-pickup-ii/solutions/4709548/)

---

# Code
```
defmodule Solution do
  @spec cherry_pickup(grid :: [[integer]]) :: integer
  def cherry_pickup(grid) do
    Task.async(fn ->
      do_pickup(grid)
    end)
    |> Task.await(:infinity)
  end

  defp do_pickup(grid) do
    w = grid |> hd |> length()
    h = grid |> length

    matrix =
      for {row, i} <- Enum.with_index(grid), {col, j} <- Enum.with_index(row), reduce: %{} do
        acc -> Map.put(acc, {i, j}, col)
      end

    walk(0, 0, w - 1, h, w, matrix)
  end

  @navigate [[-1, -1], [0, -1], [1, -1], [-1, 0], [0, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]

  defp walk(r, j_1, j_2, h, w, _matrix) when r == h or j_1 < 0 or j_1 == w or j_2 < 0 or j_2 == w,
    do: 0

  defp walk(r, j_1, j_2, h, w, matrix) do
    case Process.get({r, j_1, j_2}) do
      nil ->
        val =
          if j_1 != j_2,
            do: Map.get(matrix, {r, j_1}) + Map.get(matrix, {r, j_2}),
            else: Map.get(matrix, {r, j_1})

        max =
          Enum.map(@navigate, fn [n_j_1, n_j_2] ->
            walk(r + 1, j_1 + n_j_1, j_2 + n_j_2, h, w, matrix)
          end)
          |> Enum.max()

        res = val + max
        Process.put({r, j_1, j_2}, res)
        res

      memoed ->
        memoed
    end
  end
end
```