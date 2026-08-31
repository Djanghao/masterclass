# Beats 100% || Simple || DP || Memoization || Kotlin

**Author:** twinwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/profitable-schemes/solutions/6116255/](https://leetcode.com/problems/profitable-schemes/solutions/6116255/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    val MOD = 1000000007
    fun profitableSchemes(n: Int, minProfit: Int, group: IntArray, profit: IntArray): Int {
        val maxProfit = profit.reduce { acc, i -> acc + i }
        val dp = Array(n + 1) {
            Array(maxProfit + 1) {
                IntArray(group.size + 1) { -1 }
            }
        }

        fun enumerate(
            n1: Int,
            minProfit2: Int,
            index: Int,
        ): Int {//profit, count
            if (index == profit.size || n1 <= 0) {
                if (minProfit2 <= 0 && n1 >= 0) return 1
                else return 0
            }
            if (dp[n1][minProfit2+maxProfit-minProfit][index] != -1) return dp[n1][minProfit2+maxProfit-minProfit][index]
//        if (dp[n][index][minProfit + maxProfit - minProfit] != -1) return dp[n][index][minProfit + maxProfit - minProfit]
            val without = enumerate(n1, minProfit2, index + 1)
            val with = enumerate(
                n1 - group[index],
                minProfit2 - profit[index],
                index + 1,
            )
//        dp[n][index][minProfit + maxProfit - minProfit] = (with + without) % MOD
//        return dp[n][index][minProfit + maxProfit - minProfit]
            dp[n1][minProfit2+maxProfit-minProfit][index] = (with + without)%MOD
            return dp[n1][minProfit2+maxProfit-minProfit][index]
        }
        return enumerate(n, minProfit, 0)
    }


}
```