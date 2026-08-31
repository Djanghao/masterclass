# python O(n) space dp solution

**Author:** yzj1212
**Votes:** 138
**Link:** [https://leetcode.com/problems/coin-change-ii/solutions/99210/](https://leetcode.com/problems/coin-change-ii/solutions/99210/)

---

```
    def change(self, amount, coins):
        """
        :type amount: int
        :type coins: List[int]
        :rtype: int
        """
        dp = [0] * (amount + 1)
        dp[0] = 1
        for i in coins:
            for j in range(1, amount + 1):
               if j >= i:
                   dp[j] += dp[j - i]
        return dp[amount]
```