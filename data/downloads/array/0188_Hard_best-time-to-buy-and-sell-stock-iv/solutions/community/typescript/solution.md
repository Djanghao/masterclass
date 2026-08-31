# 🔥 Beats 100% Runtime (TypeScript) [EXPLAINED]

**Author:** r9n
**Votes:** 8
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/5684025/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/5684025/)

---

# Intuition
For a large k, sum all positive price differences. For a smaller k, use dynamic programming to track maximum profit with limited transactions.

# Approach
Use a 2D DP table where dp[i][j] is the maximum profit with i transactions by day j. Update profits by either not selling or selling on each day and optimizing previous profits.

# Complexity
- Time complexity:
O(k\u22C5n)

- Space complexity:
O(k\u22C5n)

# Code
```typescript []
function maxProfit(k: number, prices: number[]): number {
    const n = prices.length;
    
    if (n === 0 || k === 0) return 0;

    // If k is larger than half of the number of days, 
    // it is equivalent to unlimited transactions
    if (k >= Math.floor(n / 2)) {
        let profit = 0;
        for (let i = 1; i < n; i++) {
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
        }
        return profit;
    }

    // DP table initialization
    const dp = Array(k + 1).fill(0).map(() => Array(n).fill(0));

    for (let i = 1; i <= k; i++) {
        let maxDiff = -prices[0];
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
            maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
        }
    }

    return dp[k][n - 1];
}



```