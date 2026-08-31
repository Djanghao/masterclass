# using dp in dart

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/3842174/](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/3842174/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(m*n)
- Space complexity:
O(m*n)
# Code
```
class Solution {
  int minimumDeleteSum(String s1, String s2) {
   int m = s1.length;
  int n = s2.length;

  List<List<int>> dp = List.generate(m + 1, (_) => List<int>.filled(n + 1, 0));

  for (int i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + s1.codeUnitAt(i - 1);
  }

  for (int j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + s2.codeUnitAt(j - 1);
  }

  for (int i = 1; i <= m; i++) {
    for (int j = 1; j <= n; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = dp[i - 1][j] + s1.codeUnitAt(i - 1);
        dp[i][j] = dp[i][j].compareTo(dp[i][j - 1] + s2.codeUnitAt(j - 1)) < 0
            ? dp[i][j]
            : dp[i][j - 1] + s2.codeUnitAt(j - 1);
      }
    }
  }

  return dp[m][n];
  }
}
```