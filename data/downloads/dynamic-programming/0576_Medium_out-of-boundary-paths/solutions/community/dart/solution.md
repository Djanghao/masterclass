# Simple DP solution in dart lang

**Author:** hyungzin
**Votes:** 1
**Link:** [https://leetcode.com/problems/out-of-boundary-paths/solutions/3960870/](https://leetcode.com/problems/out-of-boundary-paths/solutions/3960870/)

---

# Intuition
Simple DP solution in dart lang

# Approach
edge first bottom-up DP

# Complexity
- Time complexity:
O(m * n * maxMove)

- Space complexity:
m * n * maxMove

# Code
```
class Solution {
  final mod = 1000000007;
  int findPaths(int m, int n, int maxMove, int r, int c) {
    if (maxMove == 0) return 0;
      final dp = List.generate(m, (i) => List.generate(n, (j) {
        int val = 0;
          if (i == 0) val++;
          if (i == m - 1) val++;
          if (j == 0) val++;
          if (j == n - 1) val++;
          return [val, ...List.filled(maxMove - 1, 0)];
      }));
      // print(dp);
      for (int move = 1; move < maxMove; move++){
          for (int i = 0; i < m; i++){
              for (int j = 0; j < n; j++){
                  if(i > 0){
                    dp[i][j][move] = (dp[i][j][move] + dp[i - 1][j][move - 1]) % mod;
                  }
                  if(i < m - 1){
                    dp[i][j][move] = (dp[i][j][move] + dp[i + 1][j][move - 1]) % mod;
                  }
                  if (j > 0){
                    dp[i][j][move] = (dp[i][j][move] + dp[i][j - 1][move - 1]) % mod;
                  }
                  if (j < n - 1){
                    dp[i][j][move] = (dp[i][j][move] + dp[i][j + 1][move - 1]) % mod;
                  }
              }
          }
      }
      // print(dp);
    return (dp[r][c].reduce((a, b) => ((a + b) % mod))) % mod;
  }
}
```