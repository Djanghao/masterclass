# Dynamic Programming

**Author:** dev_lazy25
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/4816422/](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/4816422/)

---

# Code
```
class Solution {
    fun minimumDistance(word: String): Int {
        val n = word.length

        val INF = Int.MAX_VALUE / 2

        val dp = Array(n) { Array(26) { IntArray(26) { INF } } }

        for(j in 0..<26) {
            dp[0][word[0] - 'A'][j] = 0
            dp[0][j][word[0] - 'A'] = 0
        }

        for(i in 1..<n) {
            val prevIndex = word[i - 1] - 'A'
            val currIndex = word[i] - 'A'
            val d = calcDist(prevIndex, currIndex)
            for(j in 0..<26) {
                dp[i][currIndex][j] = min(dp[i][currIndex][j], dp[i-1][prevIndex][j] + d)
                dp[i][j][currIndex] = min(dp[i][j][currIndex], dp[i-1][j][prevIndex] + d)

                if(j == prevIndex) {
                    for(k in 0..<26) {
                        val t = calcDist(k, currIndex)
                        dp[i][currIndex][j] = min(dp[i][currIndex][j], dp[i-1][prevIndex][k] + t)
                        dp[i][j][currIndex] = min(dp[i][j][currIndex], dp[i-1][k][prevIndex] + t)
                    }
                }
            }
        }

        var ans = INF

        for(j in 0..<26) {
            ans = min(ans, dp[n-1][j][word[n-1] - 'A'])
            ans = min(ans, dp[n-1][word[n-1] - 'A'][j])
        }

        return ans
    }

    private fun calcDist(a: Int, b: Int) : Int {
        val x1 = a / 6
        val y1 = a % 6
        val x2 = b / 6
        val y2 = b % 6

        return abs(x1 - x2) + abs(y1 - y2)
    }
}
```