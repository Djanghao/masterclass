# the fastest in dart

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solutions/4171033/](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solutions/4171033/)

---


# Complexity
- Time complexity:
O(m * n)
- Space complexity:
O(m * n)
# Code
```
class Solution {
  int numWays(int steps, int arrLen) {
    int m = steps;
    int n = (steps ~/ 2 + 1).clamp(0, arrLen);

    List<List<int>> dp = List.generate(m + 1, (i) => List.filled(n, 0));
    dp[0][0] = 1;

    int mod = 1000000007;
    for (int i = 1; i <= m; i++) {
      for (int j = 0; j < n; j++) {
        dp[i][j] = dp[i - 1][j];
        if (j > 0) {
          dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % mod;
        }
        if (j < n - 1) {
          dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % mod;
        }
      }
    }

    return dp[m][0];
  }
}

```