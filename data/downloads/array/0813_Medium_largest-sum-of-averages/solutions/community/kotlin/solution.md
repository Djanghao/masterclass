# Kotlin solution

**Author:** rugged_bl
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-sum-of-averages/solutions/2719473/](https://leetcode.com/problems/largest-sum-of-averages/solutions/2719473/)

---


# Code
```
class Solution {
    fun largestSumOfAverages(nums: IntArray, parts: Int): Double {
        val len = nums.size
        val p = DoubleArray(len + 1)

        val rangeil = 0 until len

        for (i in rangeil) {
            p[i + 1] = p[i] + nums[i]
        }

        val dp = DoubleArray(len)
        for (i in rangeil) {
            dp[i] = (p[len] - p[i]) / (len - i)
        }

        for (k in 0 until parts - 1) {
            for (i in rangeil) {
                for (j in i + 1 until len) {
                    dp[i] = kotlin.math.max(dp[i], (p[j] - p[i]) / (j - i) + dp[j])
                }
            }
        }

        return dp[0]
    }
}
```