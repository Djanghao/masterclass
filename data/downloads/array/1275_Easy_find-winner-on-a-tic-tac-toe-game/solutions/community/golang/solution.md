# Clear solution using a 3x3 int array and char code in Go

**Author:** usk83
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/449199/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/449199/)

---

1. We don't need two arrays for both A and B
2. As the char code of 'B' is 1 bigger than 'A', we can use 1 for 'A' and 2 for 'B' (0 is default(zero) value of int type)

> Runtime: 0 ms, faster than 100.00% of Go online submissions for Find Winner on a Tic Tac Toe Game.
> Memory Usage: 2 MB, less than 100.00% of Go online submissions for Find Winner on a Tic Tac Toe Game.

```go
func tictactoe(moves [][]int) string {
  grid := [3][3]int{} // initialize 3x3 int array with all zero values
  for i, move := range moves {
    grid[move[0]][move[1]] = i&1 + 1 // odd turn will be 1, even turn will be 2
  }

  // check if all three value is same on same row or column
  for i := 0; i < 3; i++ {
    if player := grid[i][i]; player != 0 {
      if (grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2]) ||
        (grid[0][i] == grid[1][i] && grid[0][i] == grid[2][i]) {
        return string(byte('@' + player))
      }
    }
  }

  // check both diagonals
  if player := grid[1][1]; player != 0 {
    if (grid[0][0] == grid[2][2] && grid[0][0] == player) ||
      (grid[2][0] == grid[0][2] && grid[2][0] == player) {
      return string(byte('@' + player))
    }
  }

  if len(moves) != 9 {
    return "Pending"
  }

  return "Draw"
}
```
