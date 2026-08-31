# Kotlin clean code

**Author:** engx2
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximal-square/solutions/1163599/](https://leetcode.com/problems/maximal-square/solutions/1163599/)

---

```
class Solution {
  fun maximalSquare(matrix: Array<CharArray>): Int {
    val row = matrix.size
    val col = matrix[0].size
    val dp = Array(row) { IntArray(col) { 0 } }

    var res = 0
    for (i in 0 until row) {
      for (j in 0 until col) {
        if (matrix[i][j] == '1') {
          dp[i][j] = 
            if (i < 1 || j < 1) 1
            else (minOf(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1)
          res = maxOf(res, dp[i][j] * dp[i][j])
        }
      }
    }
    return res
  }
}
```