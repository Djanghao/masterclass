# Dart Solution

**Author:** Maqcel
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/3749984/](https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/3749984/)

---

# Code
```
class Solution {
  bool validTicTacToe(List<String> board) {
    int xCount = 0;
    int oCount = 0;

    for (int i = 0; i < board.length; i++) {
      for (int j = 0; j < board[i].length; j++) {
        if (board[i][j] == 'X') {
          xCount++;
        } else if (board[i][j] == 'O') {
          oCount++;
        }
      }
    }

    if (oCount > xCount || xCount - oCount > 1) {
      return false;
    }

    bool xWins = checkWinner(board, 'X');
    bool oWins = checkWinner(board, 'O');

    if (xWins && oWins) {
      return false;
    }
    if (xWins && xCount == oCount) {
      return false;
    }
    if (oWins && xCount > oCount) {
      return false;
    }

    return true;
  }

  bool checkWinner(List<String> board, String player) {
    // Check rows
    for (String row in board) {
      if (row.split('').where((cell) => cell == player).length == 3) {
        return true;
      }
    }

    // Check columns
    for (int col = 0; col < 3; col++) {
      if (board.every((row) => row[col] == player)) {
        return true;
      }
    }

    // Check diagonals
    if (board[0][0] == player &&
        board[0][0] == board[1][1] &&
        board[1][1] == board[2][2]) {
      return true;
    }
    if (board[0][2] == player &&
        board[0][2] == board[1][1] &&
        board[1][1] == board[2][0]) {
      return true;
    }

    return false;
  }
}

```