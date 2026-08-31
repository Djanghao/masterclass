# Python DP same approach as Coin Change II

**Author:** 5tigerjelly
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-number-of-ways-to-make-the-sum/solutions/5676736/](https://leetcode.com/problems/the-number-of-ways-to-make-the-sum/solutions/5676736/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Set `0` index to 1 and `4` and `8` if possible

Otherwise same as coin change 2

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def numberOfWays(self, n: int) -> int:
        dp = [0] * (n + 1)
        dp[0] = 1
        if len(dp) > 4:
            dp[4] = 1
        if len(dp) > 8:
            dp[8] = 1

        for coin in [1, 2, 6]:
            for i in range(len(dp)):
                if i + coin < len(dp):
                    dp[i + coin] += dp[i]

        return dp[-1] % (10**9 + 7)

```