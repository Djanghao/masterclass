# Kotlin Solution

**Author:** rdeymos
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5623847/](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5623847/)

---


# Code
```
class Solution {
    private fun getIslandSize(grid: Array<IntArray>, i: Int, j: Int): Int {
        if (i !in grid.indices || j !in grid[0].indices || grid[i][j] == 0) return 0
        grid[i][j] = 0
        return 1 + getIslandSize(grid, i - 1, j) + getIslandSize(grid, i, j - 1) +
                getIslandSize(grid, i + 1, j) + getIslandSize(grid, i, j + 1)
    }

    private fun isConnected(grid: Array<IntArray>, totalSum: Int): Boolean {
        for (row in grid.indices) {
            for (col in grid[0].indices) {
                if (grid[row][col] == 1) {
                    return totalSum == getIslandSize(grid.map { it.copyOf() }.toTypedArray(), row, col)
                }
            }
        }
        return false
    }

    fun minDays(grid: Array<IntArray>): Int {
        var totalSum: Int = grid.sumOf { it.sum() }
        if (!isConnected(grid, totalSum)) return 0
        if (totalSum == 1) return 1
        
        --totalSum
        for (i in grid.indices) {
            for (j in grid[0].indices) {
                if (grid[i][j] == 1) {
                    grid[i][j] = 0
                    if (!isConnected(grid, totalSum)) return 1
                    grid[i][j] = 1
                }
            }
        }
        return 2
    }
}
```