# Kotlin solution recursion with Memoization

**Author:** yadunath
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/5491410/](https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/5491410/)

---

# Intuition
Using recursion
# Approach
for every buy reduce the budget,
After every buy sell it,
Every buy can be buy it or increment and dont buy
# Complexity
- Time complexity:
O(n * budget)
- Space complexity:

O(n*2*budget)
# Code
```
class Solution {
    fun maximumProfit(present: IntArray, future: IntArray, budget: Int): Int {
        val n = present.size
        var dp = Array(n){Array(2){IntArray(budget + 1){ - 1}}}
        fun recursion(i: Int,buy: Boolean,k :Int): Int {
            if(k < 0) return 0
            if(i == n) return 0
            var profit = 0
            val j = if(buy) 1 else 0
            if(dp[i][j][k] != -1 ) return dp[i][j][k]
            if(buy) {
                profit = Math.max(-present[i] + recursion(i,false,k - present[i]),
                    recursion(i + 1,true,k))
            }else {
                profit = future[i] + recursion(i + 1,true,k)
            }
            dp[i][j][k] = profit
            return profit
        }

        return recursion(0,true,budget)
    }
}
```