# [Kotlin] Optimal solution utilizing dynamic programming | Beats 100% Users

**Author:** teogor
**Votes:** 9
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/4992509/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/4992509/)

---

# Intuition
To solve this problem, we can use dynamic programming to keep track of the maximum profit achievable with at most `k` transactions. We'll consider each day `i` and each possible number of transactions `j` to calculate the maximum profit. 

# Approach
We'll first handle edge cases where `k` is 0 or the size of `prices` is less than 2. If `k` is large enough (greater than or equal to half the size of `prices`), we can perform unlimited transactions, so we calculate the maximum profit accordingly.

Otherwise, we initialize a 2D array `dp` of size `prices.size` x `(k + 1)`. We iterate over each possible number of transactions `j` from 1 to `k`. For each `j`, we iterate over each day `i` from 1 to `prices.size`. At each day `i`, we calculate the maximum profit considering two scenarios: either we don't make a transaction on day `i`, or we sell on day `i` after buying on any day `t` (0 <= t < i), maximizing the profit.

Finally, we return `dp[prices.size - 1][k]`, which represents the maximum profit achievable up to the last day with `k` transactions.

# Complexity
- Time complexity: O(n * k), where n is the number of days and k is the maximum number of transactions allowed.
- Space complexity: O(n * k), where n is the number of days and k is the maximum number of transactions allowed.

# Code
```
class Solution {
    fun maxProfit(k: Int, prices: IntArray): Int {
        if (k == 0 || prices.size < 2) return 0
        
        // If k is large enough, we can perform unlimited transactions
        if (k >= prices.size / 2) {
            var maxProfit = 0
            for (i in 1 until prices.size) {
                if (prices[i] > prices[i - 1]) {
                    maxProfit += prices[i] - prices[i - 1]
                }
            }
            return maxProfit
        }
        
        val dp = Array(prices.size) { IntArray(k + 1) }
        
        for (j in 1..k) {
            var maxProfit = -prices[0]
            for (i in 1 until prices.size) {
                dp[i][j] = maxOf(dp[i - 1][j], prices[i] + maxProfit)
                maxProfit = maxOf(maxProfit, dp[i - 1][j - 1] - prices[i])
            }
        }
        
        return dp[prices.size - 1][k]
    }
}

```