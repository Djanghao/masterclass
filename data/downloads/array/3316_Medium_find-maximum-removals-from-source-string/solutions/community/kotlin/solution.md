# Simple 2D DP Kotlin solution

**Author:** DmitryNekrasov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-maximum-removals-from-source-string/solutions/5963418/](https://leetcode.com/problems/find-maximum-removals-from-source-string/solutions/5963418/)

---

# Code
```kotlin []
class Solution {
    fun maxRemovals(source: String, pattern: String, targetIndices: IntArray): Int {
        val source = "$source#"
        val pattern = "$pattern#"
        val n = pattern.length
        val m = source.length
        val indices = targetIndices.toSet()

        val valid = Array(n + 1) { IntArray(m + 1) }
        valid[n].fill(1)
        for (i in n - 1 downTo 0) {
            for (j in m - 1 downTo 0) {
                valid[i][j] = valid[i][j + 1] or (if (pattern[i] == source[j]) 1 else 0) and valid[i + 1][j + 1]
            }
        }

        val dp = Array(n + 1) { IntArray(m + 1) }
        for (i in n - 1 downTo 0) {
            for (j in m - 1 downTo 0) {
                if (j in indices) {
                    dp[i][j] = if (pattern[i] == source[j]) max(dp[i][j + 1] + valid[i][j + 1], dp[i + 1][j + 1]) else dp[i][j + 1] + valid[i][j + 1]
                } else {
                    dp[i][j] = if (pattern[i] == source[j]) dp[i + 1][j + 1] else dp[i][j + 1]
                }
            }
        }

        return dp[0][0]
    }
}
```