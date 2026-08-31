# Python 3 | O(1) | Explanation

**Author:** idontknoooo
**Votes:** 22
**Link:** [https://leetcode.com/problems/design-tic-tac-toe/solutions/876013/](https://leetcode.com/problems/design-tic-tac-toe/solutions/876013/)

---

### Explanation
- There are only `n` (rows) + `n` (cols) + 2 (diagonals) ways to win the game
- So use a list or hash table to record the occurance
- For player 1, `+1`; for player 2, `-1`, verify the value after each call to determine the winner
### Implementation
```
class TicTacToe:
    def __init__(self, n: int):
        self.n = n
        self.row = [0] * n
        self.col = [0] * n
        self.dia = [0] * 2

    def move(self, row: int, col: int, player: int) -> int:
        if player == 1:
            self.row[row] += 1
            self.col[col] += 1
            if row == col: self.dia[0] += 1
            if row + col == self.n-1: self.dia[1] += 1
            if self.row[row] == self.n or self.col[col] == self.n or self.dia[0] == self.n or self.dia[1] == self.n: return 1
        else:     
            self.row[row] -= 1
            self.col[col] -= 1
            if row == col: self.dia[0] -= 1
            if row + col == self.n-1: self.dia[1] -= 1
            if self.row[row] == -self.n or self.col[col] == -self.n or self.dia[0] == -self.n or self.dia[1] == -self.n: return 2
        return 0
```