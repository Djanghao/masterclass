# 2D DP

**Author:** gnayoaix
**Votes:** 2
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/3711150/](https://leetcode.com/problems/predict-the-winner/solutions/3711150/)

---

# Intuition
\u8981\u641E\u6E05\u695A2D DP\u6570\u7EC4\u7684\u610F\u4E49\uFF0Cdp[i][j]\u8868\u793A[i, j]\u533A\u95F4\u5148\u540E\u624B\u9009\u62E9\u7684\u6700\u4F18\u89E3\uFF0Cdp\u6570\u7EC4\u7684\u5185\u5BB9\u662FPair\uFF0Cfirst\u8868\u793A\u5148\u624B\uFF0Csecond\u8868\u793A\u540E\u624B\u3002

\u8FD9\u91CC\u5176\u5B9E\u53EAcare\u4E24\u4E2A\u53D8\u91CFdp[i][j - 1] and dp[i + 1][j]\uFF0C\u6240\u4EE5\u8FD9\u91CC\u8981\u81EA\u4E0B\u800C\u4E0A\uFF0C\u81EA\u5DE6\u5411\u53F3\u904D\u5386\u3002

# Code
```
class Solution {
    fun PredictTheWinner(nums: IntArray): Boolean {
        val n = nums.size
        val dp = Array(n) { Array<Pair<Int, Int>>(n) { Pair(0, 0) } }

        for (i in nums.indices) dp[i][i] = Pair(nums[i], 0)

        for (i in n - 2 downTo 0) {
            for (j in i + 1 until n) {
                val left = nums[i] + dp[i + 1][j].second
                val right = nums[j] + dp[i][j - 1].second

                if (left > right) {
                    dp[i][j] = Pair(left, dp[i + 1][j].first)
                } else {
                    dp[i][j] = Pair(right, dp[i][j - 1].first)
                }
            }
        }

        val (first, second) = dp[0][n - 1]

        return first >= second
    }
}
```