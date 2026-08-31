# [Elixir] - DFS solution with improved typespec

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/minesweeper/solutions/3125932/](https://leetcode.com/problems/minesweeper/solutions/3125932/)

---

# Approach
- If the cell clicked is `?M` (an unrevealed mine), just explode.
- Otherwise reveal as many cells as possible.
  - If the current cell is `?E` (unrevealed cell that does not contain a mine), set it to `?B` or the count of surrounding mines. Recursively revealing its surrounding cells if the current cell has no surrounding mines.
  - Otherwise (either the current cell is already revealed, or it is out of bound), just return the current board.

# Complexity
- Time complexity:
$$O(w * h)$$

- Space complexity:
??

# Code
```
defmodule Solution do
  @type state() :: ?M | ?E | ?B | ?X | ?1..?8
  @type board() :: [[state()]]
  @typep coord() :: {integer(), integer()}
  @typep grid() :: %{optional(coord()) => state()}

  @spec update_board(board(), click :: [integer]) :: board()
  def update_board(board, click) do
    board
    |> to_grid()
    |> reveal(List.to_tuple(click))
    |> to_board()
  end

  @spec reveal(grid(), coord()) :: grid()
  defp reveal(grid, click) do
    case Map.fetch!(grid, click) do
      ?M -> Map.put(grid, click, ?X)
      _ -> do_reveal(grid, click)
    end
  end

  @spec do_reveal(grid(), coord()) :: grid()
  defp do_reveal(grid, {i, j} = coord) do
    case grid[coord] do
      ?E ->
        state = get_state(grid, coord)
        grid = Map.put(grid, coord, state)
        
        if state != ?B do
          grid
        else
          grid
          |> do_reveal({i - 1, j - 1})
          |> do_reveal({i - 1, j})
          |> do_reveal({i - 1, j + 1})
          |> do_reveal({i, j - 1})
          |> do_reveal({i, j + 1})
          |> do_reveal({i + 1, j - 1})
          |> do_reveal({i + 1, j})
          |> do_reveal({i + 1, j + 1})
        end

      _ ->
        grid
    end
  end

  @spec get_state(grid(), coord()) :: state()
  defp get_state(grid, {i, j}) do
    state =
      for x <- i-1..i+1,
          y <- j-1..j+1,
          {x, y} != {i, j},
          grid[{x, y}] == ?M,
          reduce: ?0 do
        state -> state + 1
      end

    if state == ?0, do: ?B, else: state
  end

  @spec to_grid(board()) :: grid()
  defp to_grid(board) do
    for {row, i} <- Enum.with_index(board),
        {cell, j} <- Enum.with_index(row),
        into: %{},
        do: {{i, j}, cell}
  end

  @spec to_board(grid()) :: board()
  defp to_board(grid) do
    {{w, h}, _} = Enum.max(grid)

    for i <- 0..w do
      for j <- 0..h do
        grid[{i, j}]
      end
    end 
  end
end
```