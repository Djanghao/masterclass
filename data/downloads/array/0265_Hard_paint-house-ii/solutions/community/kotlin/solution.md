# Simple Kotlin DP solution, beats 100%

**Author:** DmitryNekrasov
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house-ii/solutions/5981731/](https://leetcode.com/problems/paint-house-ii/solutions/5981731/)

---

# Code
```kotlin []
class Solution {
    fun minCostII(costs: Array<IntArray>): Int {
        val n = costs.size
        val m = costs.first().size
        val dp = Array(n) { IntArray(m) { Int.MAX_VALUE } }
        dp[0] = costs[0]
        for (i in 1..<n) {
            for (j in 0..<m) {
                for (k in 0..<m) {
                    if (k != j) {
                        dp[i][j] = min(dp[i][j], costs[i][j] + dp[i - 1][k])
                    }
                }
            }
        }
        return dp[n - 1].min()
    }
}
```