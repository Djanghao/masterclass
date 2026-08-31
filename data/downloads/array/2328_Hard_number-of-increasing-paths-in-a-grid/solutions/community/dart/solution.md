# [Dart] DFS with Memoization

**Author:** aospiridonov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3651265/](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3651265/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(nm)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(nm)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int countPaths(List<List<int>> grid) {
    int n = grid.length, m = grid[0].length;
    final dp = List<List<int>>.generate(n, (_) => List<int>.filled(m, 0));
    final directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ];
    int mod = 1000000007;
    int result = 0;

    int dfs(int i, int j) {
      if (dp[i][j] != 0) return dp[i][j];
      int result = 1;
      for (final d in directions) {
        int prevI = i + d[0], prevJ = j + d[1];
        if (0 <= prevI &&
            prevI < grid.length &&
            0 <= prevJ &&
            prevJ < grid[0].length &&
            grid[prevI][prevJ] < grid[i][j]) {
          result += dfs(prevI, prevJ);
          result %= mod;
        }
      }
      dp[i][j] = result;
      return result;
    }

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        result = (result + dfs(i, j)) % mod;
      }
    }

    return result;
  }
}
```