# [Kotlin][DFS] EZ SOLVE BEATS 95%

**Author:** 4wl2d
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-closed-islands/solutions/3385515/](https://leetcode.com/problems/number-of-closed-islands/solutions/3385515/)

---



# Code
```
class Solution {
    fun closedIsland(grid: Array<IntArray>): Int {
        var area = 0
        for (i in grid.indices) {
            for (j in grid[i].indices) {
                if (grid[i][j] == 0 && dfs(i, j, grid)) {
                    area++
                }
            }
        }
        return area
    }

    private fun dfs(i: Int, j: Int, grid: Array<IntArray>): Boolean {
        val rows: Int = grid.size
        val cols: Int = grid[0].size
        if (i < 0 || j < 0 || i >= rows || j >= cols) {
            return false
        }
        if (grid[i][j] == 1) {
            return true
        }
        grid[i][j] = 1 // mark as visited

        val left: Boolean = dfs(i, j - 1, grid)
        val right: Boolean = dfs(i, j + 1, grid)
        val up: Boolean = dfs(i - 1, j, grid)
        val down: Boolean = dfs(i + 1, j, grid)
        return left && right && up && down
    }
}
```