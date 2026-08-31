# Kotlin: DFS

**Author:** artemasoyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/where-will-the-ball-fall/solutions/3087813/](https://leetcode.com/problems/where-will-the-ball-fall/solutions/3087813/)

---


# Code
```
class Solution {
    fun findBall(grid: Array<IntArray>): IntArray {
        val ans = IntArray(grid[0].size) { 0 }
        
        fun dfs(i: Int, j: Int): Int {
            if (i == grid.size) return j
            val J = j + grid[i][j]
            if (J !in grid[0].indices || grid[i][j] != grid[i][J]) return -1
            return dfs(i + 1, J)
        }

        for (i in 0 until grid[0].size) ans[i] = dfs(0, i)

        return ans
    }
}

```