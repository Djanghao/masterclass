# Optimized solution by time complexity O(m*n)

**Author:** moranilt
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-knights-tour/solutions/5952697/](https://leetcode.com/problems/the-knights-tour/solutions/5952697/)

---

# Complexity
- Time complexity: $$O(m*n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m*n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
var directions = [][2]int{{2, 1}, {1, 2}, {-1, 2}, {2, -1}, {-2, 1}, {1, -2}, {-1, -2}, {-2, -1}}

func tourOfKnight(m int, n int, r int, c int) [][]int {
    board := make([][]int, m)
    for i := range board {
        board[i] = make([]int, n)
        for j := range board[i] {
            board[i][j] = -1
        }
    }
    
    board[r][c] = 0
    if !warnsdorffTour(board, r, c, 1) {
        return nil
    }
    return board
}

func warnsdorffTour(board [][]int, row, col, move int) bool {
    if move == len(board)*len(board[0]) {
        return true
    }
    
    nextMoves := make([][2]int, 0, 8)
    for _, dir := range directions {
        nextRow, nextCol := row+dir[0], col+dir[1]
        if isValid(board, nextRow, nextCol) {
            nextMoves = append(nextMoves, [2]int{nextRow, nextCol})
        }
    }
    
    sort.Slice(nextMoves, func(i, j int) bool {
        return countAccessible(board, nextMoves[i][0], nextMoves[i][1]) < countAccessible(board, nextMoves[j][0], nextMoves[j][1])
    })
    
    for _, nextMove := range nextMoves {
        nextRow, nextCol := nextMove[0], nextMove[1]
        board[nextRow][nextCol] = move
        if warnsdorffTour(board, nextRow, nextCol, move+1) {
            return true
        }
        board[nextRow][nextCol] = -1
    }
    
    return false
}

func isValid(board [][]int, row, col int) bool {
    return row >= 0 && row < len(board) && col >= 0 && col < len(board[0]) && board[row][col] == -1
}

func countAccessible(board [][]int, row, col int) int {
    count := 0
    for _, dir := range directions {
        nextRow, nextCol := row+dir[0], col+dir[1]
        if isValid(board, nextRow, nextCol) {
            count++
        }
    }
    return count
}

```