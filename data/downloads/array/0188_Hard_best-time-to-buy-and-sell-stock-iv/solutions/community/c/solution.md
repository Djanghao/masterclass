# 🔥 [LeetCode The Hard Way] 🔥 7 Lines | Line By Line Explanation

**Author:** tr1nity
**Votes:** 100
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/2555699/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/2555699/)

---

Please check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
I'll explain my solution line by line daily and you can find the full list in my [Discord](https://discord.gg/Nqm4jJcyBf).
If you like it, please give a star, watch my [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post.

I'd suggest to finish the previous problems first.

- [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
- [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)

**C++**

```cpp
class Solution {
public:
    int maxProfit(int k, vector<int>& prices) {
        // no transaction, no profit
        if (k == 0) return 0;
        // dp[k][0] = min cost you need to spend at most k transactions
        // dp[k][1] = max profit you can achieve at most k transactions
        vector<vector<int>> dp(k + 1, vector<int>(2));
        for (int i = 0; i <= k; i++) dp[i][0] = INT_MAX;
        for (auto& price : prices) {
            for (int i = 1; i <= k; i++) {
                // price - dp[i - 1][1] is how much you need to spend
                // i.e use the profit you earned from previous transaction to buy the stock
                // we want to minimize it
                dp[i][0] = min(dp[i][0], price - dp[i - 1][1]);
                // price - dp[i][0] is how much you can achieve from previous min cost
                // we want to maximize it
                dp[i][1] = max(dp[i][1], price - dp[i][0]);
            }
        }
        // return max profit at most k transactions
        // or you can use `return dp.back()[1];`
        return dp[k][1];
    }
};
```

**Python**

```py
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        # no transaction, no profit
        if k == 0: return 0
        # dp[k][0] = min cost you need to spend at most k transactions
        # dp[k][1] = max profit you can achieve at most k transactions
        dp = [[1000, 0] for _ in range(k + 1)]
        for price in prices:
            for i in range(1, k + 1):
                # price - dp[i - 1][1] is how much you need to spend
                # i.e use the profit you earned from previous transaction to buy the stock
                # we want to minimize it
                dp[i][0] = min(dp[i][0], price - dp[i - 1][1])
                # price - dp[i][0] is how much you can achieve from previous min cost
                # we want to maximize it
                dp[i][1] = max(dp[i][1], price - dp[i][0])
        # return max profit at most k transactions
		# or you can write `return dp[-1][1]`
        return dp[k][1]
```

**Java**

```java
class Solution {
    public int maxProfit(int k, int[] prices) {
        // no transaction, no profit
        if (k == 0) return 0;
        // dp[k][0] = min cost you need to spend at most k transactions
        // dp[k][1] = max profit you can achieve at most k transactions
        int [][] dp = new int[k + 1][2];
        for (int i = 0; i <= k; i++) dp[i][0] = 1000;
        for (int i = 0; i < prices.length; i++) {
            for (int j = 1; j <= k; j++) {
                // price - dp[i - 1][1] is how much you need to spend
                // i.e use the profit you earned from previous transaction to buy the stock
                // we want to minimize it
                dp[j][0] = Math.min(dp[j][0], prices[i] - dp[j - 1][1]);
                // price - dp[i][0] is how much you can achieve from previous min cost
                // we want to maximize it
                dp[j][1] = Math.max(dp[j][1], prices[i] - dp[j][0]);
            }
        }
        // return max profit at most k transactions
        return dp[k][1];
    }
}
```