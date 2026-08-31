# Elixir - backtracking

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-queens/solutions/2110645/](https://leetcode.com/problems/n-queens/solutions/2110645/)

---

Backtracking in Elixir is a little bit easier than in imperative languages. In the n-queens problem, since Elixir does not allow mutating the board, there's no need to revert the state in each step.

```elixir
defmodule Solution do
  @spec solve_n_queens(n :: integer) :: [[String.t]]
  def solve_n_queens(n) do
    solve([], n, {0, 0}, []) |> Enum.map(&normalize(&1, n))
  end
    
  # A board is just a bunch of coordinates where a queen resides.
  defp solve(board, n, {n, 0}, acc), do: [board | acc]
  defp solve(_board, n, {_, n}, acc), do: acc
  defp solve(board, n, {i, j}, acc) do
    acc =
      if attacked?(board, {i, j}) do
        acc
      else
        solve([{i, j} | board], n, {i + 1, 0}, acc)
      end

    solve(board, n, {i, j + 1}, acc)
  end
  
  defp attacked?(board, {i, j}) do
    Enum.any?(board, fn {ii, jj} ->
      jj == j or
        ii - jj == i - j or
        ii + jj == i + j
    end)
  end
    
  defp normalize(board, n) do
    for {{x, y}, i} <- Enum.with_index(board) do
      0..n-1
      |> Enum.map(fn j ->
        if {n - i - 1, j} == {x, y}, do: "Q", else: "."
      end)
      |> IO.iodata_to_binary()
    end
  end
end
```