# Simple python3 code

**Author:** Legend479
**Votes:** 0
**Link:** [https://leetcode.com/problems/coin-change-ii/solutions/4186625/](https://leetcode.com/problems/coin-change-ii/solutions/4186625/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
bottom up dp
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: ```O(amount* coinSize)```
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:```O(amount* coinSize)```
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        coinSize = len(coins)
        dp = [ [0] * (amount+1) for _ in range(coinSize + 1)]
        # print(coinSize)
        print(dp[0])
        for i in range(coinSize + 1):
            dp[i][0] = 1
        
        # for i in range(amount):
        #     dp[0][i] = 1

        for i in range(1, coinSize + 1):
            # print(i)
            for j in range(1, amount+1):
                # print(dp)
                if coins[i-1] > j:
                    dp[i][j] = dp[i-1][j]
                else:
                    dp[i][j] = dp[i-1][j]+ dp[i][j-coins[i-1]]

        print(dp)
        return dp[-1][-1]     

```