# Knight's Dialer: Solution in Dart

**Author:** saslo0165
**Votes:** 1
**Link:** [https://leetcode.com/problems/knight-dialer/solutions/4335556/](https://leetcode.com/problems/knight-dialer/solutions/4335556/)

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
final int MOD = 1000000007;
  int knightDialer(int n) {
    List<List<int>> moves = [
        [4, 6],
        [6, 8],
        [7, 9],
        [4, 8],
        [0, 3, 9],
        [],
        [0, 1, 7],
        [2, 6],
        [1, 3],
        [2, 4],
    ];

   List<List<int>> dp = List.generate(n, (_) => List.filled(10, 0));
  dp[0] = List.filled(10, 1);
  for (int i = 1; i < n; i++) {
    for (int j = 0; j < 10; j++) {
      dp[i][j] = moves[j].fold(0, (sum, move) => (sum + dp[i - 1][move]) % MOD);
    }
  }
  return dp[n - 1].reduce((sum, value) => (sum + value) % MOD);
  }
}
```