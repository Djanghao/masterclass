# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/4540410/](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/4540410/)

---

# Code
```
class Solution {
    fun hasValidPath(grid: Array<CharArray>): Boolean {
        val m = grid.size
        val n = grid.first().size
        val dp = Array(m+1) {Array(n+1) { BooleanArray(103) } }.also{ it[0][0][1] = true }
        (0..<m).forEach { i ->
            (0..<n).forEach { j ->
                (1..101).forEach { k ->
                    val a = if (grid[i][j] == '(') -1 else 1
                    dp[i][j+1][k] = dp[i][j+1][k] || dp[i][j][k+a] 
                    dp[i+1][j][k] = dp[i+1][j][k] || dp[i][j][k+a] 
                }
            }
        }
        return dp[m][n-1][1]
    }
}
```