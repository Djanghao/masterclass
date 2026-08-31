# Simple Kotlin DFS

**Author:** skulagin
**Votes:** 3
**Link:** [https://leetcode.com/problems/cherry-pickup-ii/solutions/4709851/](https://leetcode.com/problems/cherry-pickup-ii/solutions/4709851/)

---

# Approach
 - Let's create cache to store already computed results for a given state
 - And use recursive depth-first search function with memoization
 - `row` - current row of robots position, `c1` - current column of first robot, `c2` - current column of second one
 - Base case: If the row exceeds the last index or columns are out of bounds, return 0
 - `curSum` - current cherry sum for the current positions
 - If the result for the current state is already computed and stored in the cache just return it
 - Else let's explore all possible next positions and choose the one with the maximum cherry collection
 - Store calculated `result` in `cache` and return it

# Complexity
- Time complexity: $$O(rows * columns^2)$$

- Space complexity: $$O(rows * columns^2)$$

# Code
```
class Solution {
    fun cherryPickup(grid: Array<IntArray>): Int {
        val cache = mutableMapOf<Triple<Int, Int, Int>, Int>()

        fun dfs(row: Int, c1: Int, c2: Int): Int {
            if (row > grid.lastIndex || c1 !in grid.first().indices || c2 !in grid.first().indices) return 0
            val curSum = grid[row][c1] + if (c1 != c2) grid[row][c2] else 0
            if (cache.contains(Triple(row, c1, c2))) return cache[Triple(row, c1, c2)]!!

            val result = maxOf(
                dfs(row + 1, c1, c2),
                dfs(row + 1, c1 + 1, c2),
                dfs(row + 1, c1 - 1, c2),
                dfs(row + 1, c1, c2 + 1),
                dfs(row + 1, c1 + 1, c2 + 1),
                dfs(row + 1, c1 - 1, c2 + 1),
                dfs(row + 1, c1, c2 - 1),
                dfs(row + 1, c1 + 1, c2 - 1),
                dfs(row + 1, c1 - 1, c2 - 1)
            ) + curSum

            cache[Triple(row, c1, c2)] = result
            return result
        }

        return dfs(0, 0, grid.first().lastIndex)
    }
}
```