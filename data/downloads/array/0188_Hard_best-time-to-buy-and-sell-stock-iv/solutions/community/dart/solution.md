# Dart solution

**Author:** Coaspe
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/3695863/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/3695863/)

---


# Code
```
class Solution {
  int maxProfit(int k, List<int> prices) {
      int n = prices.length;
      int ans = 0;
      if (2*k >= n) {
          for(var i = 1; i < n; i++) {
              if (prices[i] - prices[i-1] > 0) {
                  ans += prices[i] - prices[i-1];
              }
          }
          return ans;
      }
    List<List<int>> dp = List.generate(
        k+1,
        (_) => List<int>.filled(n, 0),
    );
    for (var i = 1; i < k+1; i++) {
        int maxDiff = -prices[0];
        for (var j = 1; j < n; j++) {
            dp[i][j] = max(dp[i][j-1], prices[j] + maxDiff);
            maxDiff = max(maxDiff, dp[i-1][j] - prices[j]);
        }
    }
    return dp[k][n-1];
  }
}
```