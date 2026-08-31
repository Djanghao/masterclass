# Scala two solutions

**Author:** dustin10
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-tic-tac-toe/solutions/382263/](https://leetcode.com/problems/design-tic-tac-toe/solutions/382263/)

---

```
  object TraditionalSolution {
    class TicTacToe(_n: Int) {
      val grid: Array[Array[Char]] = Array.fill[Char](_n, _n)(' ')

      /** Player {player} makes a move at ({row}, {col}).
        *
        * @param row    The row of the board.
        * @param col    The column of the board.
        * @param player The player, can be either 1 or 2.
        * @return The current winning condition, can be either:
        *         0: No one wins.
        *         1: Player 1 wins.
        *         2: Player 2 wins. */
      def move(row: Int, col: Int, player: Int): Int = {
        val symbol: Char = if (player == 1) 'x' else 'o'
        grid(row)(col) = symbol
        val playerWon = isWinner(row, 0, 0, 1, symbol) || //horizontal
        isWinner(0, col, 1, 0, symbol) || //vertical
        isWinner(0, 0, 1, 1, symbol) || //diagnonal down right
        isWinner(grid.length - 1, 0, -1, 1, symbol) //diagonal top right

        if (playerWon) player else 0
      }

      def isWinner(row: Int, col: Int, stepRow: Int, stepColumn: Int, checkFor: Char): Boolean = {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid(row).length) true
        else if (grid(row)(col) != checkFor) false
        else isWinner(row + stepRow, col + stepColumn, stepRow, stepColumn, checkFor)
      }
    }
  }
```

```
  object Solution {
    case class Player(rows: Array[Int], columns: Array[Int], var diagonalCount: Int, var antiDiagonalCount: Int)
    class TicTacToe(_n: Int) {
      val player1: Player = Player(Array.fill(_n)(0), Array.fill(_n)(0), 0, 0)
      val player2: Player = Player(Array.fill(_n)(0), Array.fill(_n)(0), 0, 0)

      /** Player {player} makes a move at ({row}, {col}).
        *
        * @param row    The row of the board.
        * @param col    The column of the board.
        * @param player The player, can be either 1 or 2.
        * @return The current winning condition, can be either:
        *         0: No one wins.
        *         1: Player 1 wins.
        *         2: Player 2 wins. */
      def move(row: Int, col: Int, player: Int): Int = {
        val current: Player = if (player == 1) player1 else player2

        current.rows(row) = current.rows(row) + 1
        current.columns(col) = current.columns(col) + 1

        if (row == col) {
          current.diagonalCount = current.diagonalCount + 1
        }

        if(_n - row - 1 == col) {
          current.antiDiagonalCount = current.antiDiagonalCount + 1
        }

        val playerWon = current.rows(row) == _n ||
          current.columns(col) == _n ||
          current.diagonalCount == _n ||
          current.antiDiagonalCount == _n

        if (playerWon) {
          player
        } else {
          0
        }
      }
    }
  }
````