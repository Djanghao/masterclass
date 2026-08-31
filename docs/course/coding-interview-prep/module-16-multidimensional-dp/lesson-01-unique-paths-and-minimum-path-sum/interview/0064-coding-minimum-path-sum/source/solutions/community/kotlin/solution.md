# Simple, understandable solution | Beats 100% | Kotlin

**Author:** dexciuq
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/3347791/](https://leetcode.com/problems/minimum-path-sum/solutions/3347791/)

---

# Approach: Dynamic Programming

# Code
Please upvote if you like solution, it motivates me keep on helping
```
class Solution {
    fun minPathSum(grid: Array<IntArray>): Int {
        val n = grid.size
        val m = grid[0].size
        for (i in n - 1 downTo 0) {
            for (j in m - 1 downTo 0) {
                when {
                    i == n - 1 && j == m - 1 -> { } // do nothing
                    i == n - 1 -> grid[i][j] += grid[i][j + 1]
                    j == m - 1 -> grid[i][j] += grid[i + 1][j]
                    else -> grid[i][j] += minOf(grid[i + 1][j], grid[i][j + 1])
                }
            }
        }
        return grid[0][0]
    }
}            
```