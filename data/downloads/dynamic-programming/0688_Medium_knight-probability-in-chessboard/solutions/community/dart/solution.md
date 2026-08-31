# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3798842/](https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3798842/)

---

# Code
```
class Solution {
  static const DIRS = [
    [2,-1], [2,1], [-2,1], [-2,-1], [1,2], [1,-2], [-1,2], [-1,-2]
  ];
  double knightProbability(int n, int k, int row, int column) {
    
    var dp = List.generate(n, (_) => List.filled(n, 0.0));
    dp[row][column] = 1.0;
    var prev = List.generate(n, (_) => List.filled(n, 0.0));
    
    for (var steps = 0; steps < k; steps++) {
      final tmp = dp;
      dp = prev;
      prev = tmp;
      for (int r = 0; r < n; r++) dp[r].fillRange(0, n, 0.0);
      
      for (int r = 0; r < n; r++) {
        for (int c = 0; c < n; c++) {
          if (prev[r][c] == 0.0) continue;
          
          for (final dir in DIRS) {
            final int nr = r + dir[0], nc = c + dir[1];
            if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
              dp[nr][nc] += prev[r][c] / 8.0;
            }
          }
        }
      }
    }
    
    var res = 0.0;
    for (int r = 0; r < n; r++) {
      for (int c = 0; c < n; c++)
        res += dp[r][c];
    }
    return res;
  }
}
```