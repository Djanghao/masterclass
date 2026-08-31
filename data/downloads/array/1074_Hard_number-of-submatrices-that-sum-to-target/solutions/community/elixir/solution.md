# Elixir Prefix Sum Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/2299926/](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/2299926/)

---

```elixir
defmodule Solution do
  @spec num_submatrix_sum_target(matrix :: [[integer]], target :: integer) :: integer
  def num_submatrix_sum_target(matrix, target) do
    m = length(matrix) - 1
    n = length(hd(matrix)) - 1

    matrix =
      matrix
      |> Enum.with_index()
      |> Enum.reduce(%{}, fn {row, i}, acc ->
        row
        |> Enum.with_index()
        |> Enum.reduce(acc, fn {n, j}, acc ->
          if j == 0 do
            Map.put(acc, {i, j}, n)
          else
            Map.put(acc, {i, j}, n + acc[{i, j - 1}])
          end
        end)
      end)

    for left <- 0..n, right <- left..n, reduce: 0 do
      ans ->
        for r <- 0..m, reduce: {ans, 0, %{0 => 1}} do
          {ans, pre_sum, map} ->
            pre_sum = pre_sum + matrix[{r, right}] - Map.get(matrix, {r, left - 1}, 0)
            ans = ans + Map.get(map, pre_sum - target, 0)
            map = Map.update(map, pre_sum, 1, &(&1 + 1))
            {ans, pre_sum, map}
        end
        |> elem(0)
    end
  end
end
```