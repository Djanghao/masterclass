# Dart

**Author:** ShahbozTuronov
**Votes:** 0
**Link:** [https://leetcode.com/problems/dungeon-game/solutions/3534837/](https://leetcode.com/problems/dungeon-game/solutions/3534837/)

---

# Complexity
- Time complexity: 100%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 100%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
 int calculateMinimumHP(List<List<int>> dungeon) {
  int m = dungeon.length;
  int n = dungeon[0].length;

  // Create a grid to store the minimum health required
  List<List<int>> dp = List.generate(m, (_) => List<int>.filled(n, 0));

  // Calculate the minimum health required to reach the princess starting from the bottom-right corner
  dp[m - 1][n - 1] = dungeon[m - 1][n - 1] > 0 ? 1 : 1 - dungeon[m - 1][n - 1];

  // Fill the last column of the grid
  for (int i = m - 2; i >= 0; i--) {
    dp[i][n - 1] = max(dp[i + 1][n - 1] - dungeon[i][n - 1], 1);
  }

  // Fill the last row of the grid
  for (int j = n - 2; j >= 0; j--) {
    dp[m - 1][j] = max(dp[m - 1][j + 1] - dungeon[m - 1][j], 1);
  }

  // Fill the remaining cells of the grid
  for (int i = m - 2; i >= 0; i--) {
    for (int j = n - 2; j >= 0; j--) {
      int right = max(dp[i][j + 1] - dungeon[i][j], 1);
      int down = max(dp[i + 1][j] - dungeon[i][j], 1);
      dp[i][j] = min(right, down);
    }
  }

  // Return the minimum initial health required (starting from the top-left room)
  return dp[0][0];
}

}
```