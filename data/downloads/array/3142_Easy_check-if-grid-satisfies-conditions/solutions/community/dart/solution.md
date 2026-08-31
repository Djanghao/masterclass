# Dart solution

**Author:** Farsana_K_A
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5559628/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5559628/)

---


# Code
```
class Solution {
  bool satisfiesConditions(List<List<int>> grid) {
    int gridSize = grid.length;
  int gridColSize = grid[0].length;

  for (int i = 0; i < gridSize; i++) {
    for (int j = 0; j < gridColSize; j++) {
      if (i > 0) {
        if (grid[i-1][j] != grid[i][j]) {
          return false;
        }
      }
      if (j > 0) {
        if (grid[i][j-1] == grid[i][j]) {
          return false;
        }
      }
    }
  }
  return true;
  }
}
```