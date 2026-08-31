# Kotlin Solution

**Author:** tcrawford94
**Votes:** 0
**Link:** [https://leetcode.com/problems/candy-crush/solutions/3133749/](https://leetcode.com/problems/candy-crush/solutions/3133749/)

---

# Code
```
class Solution {
    fun candyCrush(board: Array<IntArray>): Array<IntArray> {
        if (board.size == 0 || board[0].size == 0) return board

        val result = board.copyOf()
        while(attemptCrush(result)){
            shiftCellsDown(result)
        }

        return result
    }

    // returns true if any cells crushed (numbers turned negative in cell)
    private fun attemptCrush(board: Array<IntArray>): Boolean {
        val m = board.size
        val n = board[0].size
        var crushedCandy = false

        
        for (i in board.indices) {
            val row = board[i]
            for (j in row.indices) {
                val cellValue = Math.abs(board[i][j])
                if (cellValue == 0) continue

                // Check row horizontally for "crushes"
                if (j + 2 < n && Math.abs(board[i][j + 1]) == cellValue && Math.abs(board[i][j + 2]) == cellValue) {
                    board[i][j] = cellValue * -1
                    board[i][j + 1] = cellValue * -1
                    board[i][j + 2] = cellValue * -1
                    crushedCandy = true
                }

                // Check column vertically for "crushes"
                if (i + 2 < m && Math.abs(board[i + 1][j]) == cellValue && Math.abs(board[i + 2][j]) == cellValue) {
                    board[i][j] = cellValue * -1
                    board[i + 1][j] = cellValue * -1
                    board[i + 2][j] = cellValue * -1
                    crushedCandy = true
                }
            }
        }

        return crushedCandy
    }

    // 0 out (aka mark empty) any negative numbers and shift down any cells above empty ones
    private fun shiftCellsDown(board: Array<IntArray>) {
        for (j in 0 until board[0].size) {
            var shiftIndex = -1
            for (i in (0 until board.size).reversed()) {
                // If this value is negative, it was crushed and should be 0 (empty) now
                if (board[i][j] < 0) board[i][j] = 0

                if (shiftIndex == -1 && board[i][j] == 0) {
                    // this is the first empty index in the column going from the bottom up...
                    shiftIndex = i
                } else if (shiftIndex != -1 && board[i][j] != 0) {
                    // there is an empty cell below this, so shift this date to that location 
                    board[shiftIndex][j] = board[i][j]
                    // and make this one now empty...
                    board[i][j] = 0
                    // the next row we can shift to in this column is one above/up the previous shift...
                    shiftIndex--
                }
            }
        }
    }
}
```