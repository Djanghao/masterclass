# 🏆️ Kotlin simple DFS solution

**Author:** Klemo1997
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/3392977/](https://leetcode.com/problems/number-of-enclaves/solutions/3392977/)

---

# Approach
The idea is to recursively explore land area with DFS, and either return the count of land cells in a subroute, or -1, if the subroute can access out of bounds. We need to mark visited cells as visited somehow, I did it by marking them as water cells after visit.

# Complexity
- Time complexity:
$$O(m*n)$$

- Space complexity:
$$O(m*n)$$

# Code
```
class Solution {
    private lateinit var grid: Array<IntArray>
    private val dirs = arrayOf(
        intArrayOf(-1,0),
        intArrayOf(1,0),
        intArrayOf(0,-1),
        intArrayOf(0,1)
    )

    fun numEnclaves(grid: Array<IntArray>): Int {
        this.grid = grid
        var total = 0
        for (i in 0 until grid.size) {
            for (j in 0 until grid[0].size) {
                if (grid[i][j] == 1) {
                    total += maxOf(dfs(i,j),0)
                }
            }
        }
        return total
    }

    private fun dfs(i: Int, j: Int): Int {
        if (isOutOfBounds(i,j)) return -1
        if (grid[i][j] == 0) return 0
        var cnt = 1
        grid[i][j] = 0
        var hasReachedOut = false
        for ((a,b) in dirs) {
            val x = i+a
            val y = j+b
            val curr = dfs(x,y)
            if (curr == -1) hasReachedOut = true
            else cnt += curr
        }
        return if (hasReachedOut) -1 else cnt
    }

    private fun isOutOfBounds(i: Int, j: Int): Boolean {
        return i < 0 || i >= grid.size || j < 0 || j >= grid[0].size
    }
}

```