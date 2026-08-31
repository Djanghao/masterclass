# Go count and check for win

**Author:** dchooyc
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/3986117/](https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/3986117/)

---

```
func validTicTacToe(board []string) bool {
    x, o, xWon, oWon := 0, 0, win(board, "X"), win(board, "O")

    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            if board[i][j] == 'X' {
                x++
            } else if board[i][j] == 'O' {
                o++
            }
        }
    }

    if o > x || x > o + 1 { return false }
    if xWon && (oWon || x == o) { return false }
    if oWon && x > o { return false }

    return true
}

func win(board []string, char string) bool {
    check := char + char + char

    for i := 0; i < 3; i++ {
        if board[i] == check { return true }
        col := string([]byte{board[0][i], board[1][i], board[2][i]})
        if col == check { return true }
    }

    diag1 := string([]byte{board[0][0], board[1][1], board[2][2]})
    diag2 := string([]byte{board[0][2], board[1][1], board[2][0]})

    if diag1 == check || diag2 == check { return true }

    return false
}
```