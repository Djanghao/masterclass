# Java || O(N^2)

**Author:** LinSun1020
**Votes:** 0
**Link:** [https://leetcode.com/problems/handshakes-that-dont-cross/solutions/4468100/](https://leetcode.com/problems/handshakes-that-dont-cross/solutions/4468100/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Considering three cases:
1. A node pair with its left neighbor:
dp[i] += dp[i-2];
2. A node pair with its right neighbor:
dp[i] += dp[i-2];
3. A node pair with its middle nodes (from 3 to i-2):
the left pair number = dp[j]
the rightr pair number = dp[i-j-1]
dp[i] += left * right;
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
class Solution {
    public int numberOfWays(int n) {
        if (n == 2) return 1;
        if (n == 4) return 2;
        int count = 2;
        long mod = (long)1e9 + 7;
        long[] dp = new long[n+1];
        dp[2] = 1;
        dp[4] = 2;
        for (int i = 6; i<=n; i+=2) {
            // pair with left
            dp[i] = (dp[i-2] + dp[i]) % mod;
            // pair with right;
            dp[i] = (dp[i-2] + dp[i]) % mod;
            for (int j = 3; j<=i-2; j++) {
                long left = dp[j-1];
                long right = dp[i-j-1];
                dp[i] = (dp[i] + left * right) % mod;
            }
        }
        return (int) dp[n];
    }
}
```