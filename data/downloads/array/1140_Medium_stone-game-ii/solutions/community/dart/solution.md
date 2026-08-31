# DART Solution Beats 100% users 🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-ii/solutions/5665075/](https://leetcode.com/problems/stone-game-ii/solutions/5665075/)

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
```dart []
class Solution {
  int stoneGameII(List<int> piles) {
    int n = piles.length;

    List<List<int>> dp = List.generate(n, (_) => List.filled(n + 1, 0));
    List<int> suffixSum = List.filled(n, 0);
    suffixSum[n - 1] = piles[n - 1];

    for (int i = n - 2; i >= 0; i--) {
      suffixSum[i] = suffixSum[i + 1] + piles[i];
    }

    for (int i = n - 1; i >= 0; i--) {
      for (int m = 1; m <= n; m++) {
        if (i + 2 * m >= n) {
          dp[i][m] = suffixSum[i];
        } else {
          for (int x = 1; x <= 2 * m; x++) {
            dp[i][m] = (dp[i][m] > suffixSum[i] - dp[i + x][(m > x) ? m : x]) ? dp[i][m] : suffixSum[i] - dp[i + x][(m > x) ? m : x];
          }
        }
      }
    }

    return dp[0][1];
  }
}


```