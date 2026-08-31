# Kotlin: DFS

**Author:** artemasoyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/2883890/](https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/2883890/)

---

```kotlin
class Solution {
    fun pacificAtlantic(heights: Array<IntArray>): List<List<Int>> {
        val ROWS = heights.size
        val COLS = heights[0].size
        val pac = Array(ROWS) { BooleanArray(COLS) }
        val atl = Array(ROWS) { BooleanArray(COLS) }

        fun dfs(r: Int, c: Int, visit: Array<BooleanArray>, prevHeight: Int) {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS) return
            if (visit[r][c] || heights[r][c] < prevHeight) return
            visit[r][c] = true
            dfs(r + 1, c, visit, heights[r][c])
            dfs(r - 1, c, visit, heights[r][c])
            dfs(r, c + 1, visit, heights[r][c])
            dfs(r, c - 1, visit, heights[r][c])
        }

        for (col in 0 until COLS) {
            dfs(0, col, pac, heights[0][col])
            dfs(ROWS - 1, col, atl, heights[ROWS - 1][col])
        }

        for (row in 0 until ROWS) {
            dfs(row, 0, pac, heights[row][0])
            dfs(row, COLS - 1, atl, heights[row][COLS - 1])
        }

        val res = mutableListOf<List<Int>>()
        for (r in 0 until ROWS) {
            for (c in 0 until COLS) {
                if (!(pac[r][c] && atl[r][c])) continue
                res += listOf(r, c)
            }
        }
        return res
    }
}
```