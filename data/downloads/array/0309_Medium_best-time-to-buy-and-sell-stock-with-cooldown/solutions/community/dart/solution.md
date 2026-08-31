# Be simple

**Author:** max77445
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/4754178/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/4754178/)

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
```
class Solution {
  int maxProfit(List<int> prices) {
     if (prices.isEmpty) return 0;

    int n = prices.length;
    List<int> buy = List.filled(n, 0);
    List<int> sell = List.filled(n, 0);
    List<int> cooldown = List.filled(n, 0);

    buy[0] = -prices[0];

    for (int i = 1; i < n; i++) {
      buy[i] = (buy[i - 1] > cooldown[i - 1] - prices[i])
          ? buy[i - 1]
          : cooldown[i - 1] - prices[i];
      sell[i] = (sell[i - 1] > buy[i - 1] + prices[i])
          ? sell[i - 1]
          : buy[i - 1] + prices[i];
      cooldown[i] =
          (cooldown[i - 1] > sell[i - 1]) ? cooldown[i - 1] : sell[i - 1];
    }

    return sell[n - 1];
  }
}
```