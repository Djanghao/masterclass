# Simple Kotlin Solution

**Author:** lopestbl
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-tic-tac-toe/solutions/5679905/](https://leetcode.com/problems/design-tic-tac-toe/solutions/5679905/)

---

# Complexity
- Time complexity: O(4*n) => O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class TicTacToe(private val n: Int) {
    private val board: MutableList<MutableList<Int>>
    
    init {
        board = MutableList(n) { MutableList(n) { 0 } }
    }

    fun move(row: Int, col: Int, player: Int): Int {
        board[row][col] = player
        
        return if (won(row, col, player)) { player } else { 0 }
    }
    
    private fun won(row: Int, col: Int, player: Int): Boolean {
        return filledRow(row, player) ||
            filledColumn(col, player) ||
            filledFirstDiagonal(player) ||
            filledSecondDiagonal(player)
        
    }
    
    private fun filledRow(row: Int, player: Int): Boolean {
        for (j in 0..<n) {
            if (board[row][j] != player) {
                return false
            }
        }
        
        return true
    }

    private fun filledColumn(col: Int, player: Int): Boolean {
        for (i in 0..<n) {
            if (board[i][col] != player) {
                return false
            }
        }
        
        return true
    }
    
    private fun filledFirstDiagonal(player: Int): Boolean {
        for (i in 0..<n) {
            if (board[i][i] != player) {
                return false
            }
        }
        
        return true
    }
    
    private fun filledSecondDiagonal(player: Int): Boolean {
        for (i in 0..<n) {
            if (board[i][n - i - 1] != player) {
                return false
            }
        }
        
        return true
    }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
```