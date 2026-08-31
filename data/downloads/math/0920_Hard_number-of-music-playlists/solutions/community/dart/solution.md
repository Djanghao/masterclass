# The fastest in dart

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-music-playlists/solutions/3872080/](https://leetcode.com/problems/number-of-music-playlists/solutions/3872080/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(goal * n)
- Space complexity:
O(n)
# Code
```
class Solution {
  int numMusicPlaylists(int n, int goal, int k) {
    final MOD = 1000000007;
    List<List<int>> dp = List.generate(2, (_) => List.filled(n + 1, 0));
    dp[0][0] = 1;

    for (int i = 1; i <= goal; i++) {
      dp[i % 2][0] = 0;
      for (int j = 1; j <= i.clamp(1, n); j++) {
        dp[i % 2][j] = (dp[(i - 1) % 2][j - 1] * (n - (j - 1))) % MOD;
        if (j > k) {
          dp[i % 2][j] = (dp[i % 2][j] + dp[(i - 1) % 2][j] * (j - k)) % MOD;
        }
      }
    }

    return dp[goal % 2][n];
  }
}



```