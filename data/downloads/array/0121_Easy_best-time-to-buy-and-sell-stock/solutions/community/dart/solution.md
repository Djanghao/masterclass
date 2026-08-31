# Simple solution | O(n) time complexity | O(1) space complexity

**Author:** firuz97
**Votes:** 3
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/3228686/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/3228686/)

---


# Code
```
class Solution {
  int maxProfit(List<int> prices) {
      int profit = 0;
      int minPrice = prices.first;
      for (int i = 1; i < prices.length; i++) {
          minPrice = min(minPrice, prices[i]);
          profit = max(profit, prices[i]-minPrice);
      }
      return profit;
  }
}
```