# Elixir - backtracking, with meaningful variable names

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-queens-ii/solutions/2111689/](https://leetcode.com/problems/n-queens-ii/solutions/2111689/)

---

```elixir
defmodule Solution do
  @spec total_n_queens(board_width :: pos_integer) :: non_neg_integer
  def total_n_queens(board_width) do
    count_solutions([], board_width, {0, 0}, 0)
  end
  
  @typep position :: {rank :: non_neg_integer, file :: non_neg_integer}
  
  @spec count_solutions(
    queens_on_the_board :: [position],
    board_width :: pos_integer,
    current_queen_position :: position,
    count :: non_neg_integer
  ) :: non_neg_integer
  defp count_solutions(_, board_width, {board_width, 0}, count) do
    count + 1
  end
    
  defp count_solutions(_, board_width, {_rank, board_width}, count) do
    count
  end
    
  defp count_solutions(queens_on_the_board, board_width, {rank, file}, count) do
    count = if attacked?(queens_on_the_board, {rank, file}) do
      count
    else
      count_solutions([{rank, file} | queens_on_the_board], board_width, {rank + 1, 0}, count)
    end
    
    count_solutions(queens_on_the_board, board_width, {rank, file + 1}, count)
  end
    
  defp attacked?(queens_on_the_board, {rank, file}) do
    Enum.any?(queens_on_the_board, fn {r, f} ->
      (f == file) or (r + f == rank + file) or (r - f == rank - file)
    end)
  end
end
```