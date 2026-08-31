# Kotlin simple solution

**Author:** chayangkoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5147188/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5147188/)

---

# Complexity
- Time complexity:
O(nm)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun satisfiesConditions(grid: Array<IntArray>): Boolean {
        val n = grid.size
        val m = grid[0].size
        for (i in 0 until n) {
            for (j in 0 until grid[i].size) {
                if (i < n - 1 && grid[i][j] != grid[i + 1][j] || 
                    j < m - 1 && grid[i][j] == grid[i][j + 1]
                ) {
                    return false
                }
            }
        }
        return true
    }
}
```