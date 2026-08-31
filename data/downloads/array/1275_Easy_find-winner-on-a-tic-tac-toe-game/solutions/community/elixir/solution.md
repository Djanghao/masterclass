# Elixir, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/4334025/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/4334025/)

---

# Approach
Iterates the moves and keeps track of the total moves processed so far. If the total_moves played so far is even then the current move is of player 1, else the move is of player 2. Keep track of counters for row1, row2, row3, col1, col2, col3, diagonal1, diagonal2 for both the players. Based on the current move location, update the above counters for the player. If any of the counter reaches 3, then the player has won. If no player has won so far and all the moves have been processed, return "Draw" if the total moves is 9, else return "Pending"

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec tictactoe(moves :: [[integer]]) :: String.t
  def tictactoe(moves) do 
    grid = %{"r0" => 0, "r1" => 0, "r2" => 0, "c0" => 0, "c1" => 0, "c2" => 0, "d1" => 0, "d2" => 0}
    do_tictactoe(moves, grid, grid, 0)
  end

  defp do_tictactoe([[x, y] | tl], p1_grid, p2_grid, total_moves) do
    if rem(total_moves, 2) == 0 do
      case update_grid(x, y, p1_grid) do
        :win -> "A"
        grid -> do_tictactoe(tl, grid, p2_grid, total_moves + 1)
      end
    else
      case update_grid(x, y, p2_grid) do
        :win -> "B"
        grid -> do_tictactoe(tl, p1_grid, grid, total_moves + 1)
      end
    end
  end
  defp do_tictactoe([], _, _, total_moves), do: if total_moves == 9, do: "Draw", else: "Pending"

  defp update_grid(x, y, p_grid) do
    new_x = p_grid["r#{x}"] + 1
    new_y = p_grid["c#{y}"] + 1
    new_d1 = if [x, y] in [[0, 0], [1, 1], [2, 2]], do: p_grid["d1"] + 1, else: p_grid["d1"]
    new_d2 = if [x, y] in [[2, 0], [1, 1], [0, 2]], do: p_grid["d2"] + 1, else: p_grid["d2"]
    if new_x == 3 || new_y ==3 || new_d1 == 3 || new_d2 == 3 do 
      :win 
    else 
     %{p_grid | "r#{x}" => new_x, "c#{y}" => new_y, "d1" => new_d1, "d2" => new_d2} 
    end
  end
end
```