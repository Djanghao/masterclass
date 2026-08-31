# Kotlin DP Matrix + DFS

**Author:** Z3ROsum
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/3873023/](https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/3873023/)

---

# Code
```Kotlin
class Solution {
    fun maximumSafenessFactor(grid: List<List<Int>>): Int {
        var safe = Array(grid.size) { IntArray(grid[0].size) { Int.MAX_VALUE } }
        for (i in grid.indices) {
            for (j in grid[0].indices) {
                if (grid[i][j] == 1) safe[i][j] = 0
                if (j > 0 && safe[i][j - 1] != Int.MAX_VALUE)
                    safe[i][j] = minOf(safe[i][j], safe[i][j - 1] + 1)
                
                if (i > 0 && safe[i - 1][j] != Int.MAX_VALUE)
                    safe[i][j] = minOf(safe[i][j], safe[i - 1][j] + 1)
            }
        }
        for (i in grid.size - 1 downTo 0) {
            for (j in grid[0].size - 1 downTo 0) {
                if (i < grid.size - 1 && safe[i + 1][j] != Int.MAX_VALUE)
                    safe[i][j] = minOf(safe[i][j], safe[i + 1][j] + 1)
                
                if (j < grid[0].size - 1 && safe[i][j + 1] != Int.MAX_VALUE)
                    safe[i][j] = minOf(safe[i][j], safe[i][j + 1] + 1)
            }
        }
        var lo = 0
        var hi = 800
        var last = -1
        while (lo <= hi) {
            var mid = (lo + hi) / 2
            var v = Array(grid.size) { BooleanArray(grid[0].size) }
            if (dfs(0, 0, v, safe, mid)) {
                last = mid
                lo = mid + 1
            } else {
                hi = mid - 1
            }
        }
        return last
    }
    var dirs = listOf(1 to 0, -1 to 0, 0 to 1, 0 to -1)
    fun dfs(i: Int, j: Int, visited: Array<BooleanArray>, safe: Array<IntArray>, low: Int): Boolean {
        if (i !in safe.indices || j !in safe[0].indices) return false
        if (visited[i][j]) return false
        if (safe[i][j] < low) return false
        
        if (i == safe.size - 1 && j == safe[0].size - 1) return true
        
        visited[i][j] = true
        for ((x, y) in dirs)
            if (dfs(i + x, j + y, visited, safe, low))
                return true
        return false
    }
}
```