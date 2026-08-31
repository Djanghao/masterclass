# Dart solution

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/5080704/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/5080704/)

---

# Code
```
class Solution {
  int maxProfit(List<int> prices, int fee) {
    int n = prices.length;
    if (n < 2) return 0;
    int maxProfit = 0;
    int minimum = prices.first;
    for (var price in prices) {
      if (price < minimum) {
        minimum = price;
      } else if (price > minimum + fee) {
        maxProfit += price - fee - minimum;
        minimum = price - fee;
      }
    }
    return maxProfit;
  }
}
```