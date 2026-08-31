# Iterative solution

**Author:** mh72156
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/5903094/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/5903094/)

---

# Intuition
calculate max profit only when price is incraasing

# Approach
Iterative approach

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```dart []
class Solution {
  int maxProfit(List<int> prices) {
    int maxProfit = 0;
    for (int i = 1; i < prices.length; i++) {
      if (prices[i - 1] < prices[i]) {
        maxProfit += prices[i] - prices[i - 1];
      }
    }
    return maxProfit;
  }
}
```