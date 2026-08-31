# Clean, readable and idiomatic solution in Kotlin | DFS |

**Author:** techno_phile
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-move-is-legal/solutions/3334298/](https://leetcode.com/problems/check-if-move-is-legal/solutions/3334298/)

---

# Intuition
A pretty straightforward solution if you've solved DFS problems before. Only difference is, we can travel 8-directionally, only from the starting cell.All other dfs calls should go only in one direction.

# Approach
Perform DFS 8-Directionally from the starting cell.

# Complexity
- Time complexity: O(mxn)

- Space complexity: Since we are using recursion, O(mxn)

# Code
```
class Solution {
    fun checkMove(board: Array<CharArray>, rMove: Int, cMove: Int, color: Char): Boolean {
        board[rMove][cMove] = color

        val rowColumDirections = arrayOf(
            intArrayOf(0, 1),
            intArrayOf(0, -1),
            intArrayOf(1, 0),
            intArrayOf(-1, 0),
            intArrayOf(1, 1),
            intArrayOf(-1, -1),
            intArrayOf(1, -1),
            intArrayOf(-1, 1)
        )

        fun isValidCell(row: Int, column: Int) = row in board.indices &&
                column in board[row].indices &&
                board[row][column] != EMPTY_CELL &&
                board[row][column] != VISITED_CELL

        fun dfs(
            startRow: Int,
            startColumn: Int,
            rowDir: Int,
            columnDir: Int,
            cellsInCurrentPath: Int
        ): Boolean {
            if (board[startRow][startColumn] == color) {
                board[startRow][startColumn] = VISITED_CELL
                return cellsInCurrentPath >= 2 // there must be 2 other nodes, not including the current node
            }
            board[startRow][startColumn] = VISITED_CELL
            val newRow = startRow + rowDir
            val newColumn = startColumn + columnDir
            if (!isValidCell(newRow, newColumn)) return false
            return dfs(newRow, newColumn, rowDir, columnDir, cellsInCurrentPath + 1)
        }

        for ((rowDir, colDir) in rowColumDirections) {
            val newRow = rMove + rowDir
            val newColumn = cMove + colDir
            if (!isValidCell(newRow, newColumn)) continue
            if (dfs(newRow, newColumn, rowDir, colDir, 1)) return true
        }
        return false
    }

    companion object {
        private const val VISITED_CELL = '|'
        private const val EMPTY_CELL = '.'
    }
}
```