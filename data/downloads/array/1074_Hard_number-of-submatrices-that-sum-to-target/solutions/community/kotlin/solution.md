# just a variant

**Author:** igormsc
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/4636434/](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/4636434/)

---

# Code
```
class Solution {
    fun numSubmatrixSumTarget(matrix: Array<IntArray>, target: Int): Int {
        val n = matrix.lastIndex
        val m = matrix.first().lastIndex
        val dp = Array(101) { IntArray(101) }.also { it[0][0] = matrix[0][0] }

        (1..n).forEach { dp[it][0] = matrix[it][0] + dp[it - 1][0] }
        (1..m).forEach { dp[0][it] = matrix[0][it] + dp[0][it - 1] }
        (1..n).forEach { i ->
            (1..m).forEach { j ->
                dp[i][j] = matrix[i][j] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] } }

        return (0..n).sumOf { i ->
                    (0..m).sumOf { j ->
                        (i..n).sumOf { l ->
                            (j..m).count { k ->
                                target == dp[l][k] - (if (i > 0) dp[i - 1][k] else 0) - (if (j > 0) dp[l][j - 1] else 0) +
                                                     (if (i > 0 && j > 0) dp[i - 1][j - 1] else 0) } } } }
    }
}
```