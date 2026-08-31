# Kotlin: DFS

**Author:** artemasoyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/max-area-of-island/solutions/2880753/](https://leetcode.com/problems/max-area-of-island/solutions/2880753/)

---

```kotlin
class Solution {
    fun maxAreaOfIsland(grid: Array<IntArray>): Int {
        var max = 0
            
        fun dfs(i: Int, j: Int): Int {
            if (!(i in grid.indices && j in grid[0].indices && grid[i][j] == 1)) return 0
        
            grid[i][j] = 0
            var res = 1
        
            res += dfs(i + 1, j)
            res += dfs(i, j + 1)
            res += dfs(i - 1, j)
            res += dfs(i, j - 1)
            return res
        }
        
        for (i in 0 until grid.size) {
            for (j in 0 until grid[0].size) {
                if (grid[i][j] != 1) continue
                max = maxOf(max, dfs(i, j))
            }
        }
        
        return max
    }
}
```