# Dart recursive DFS solution

**Author:** Selger
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3466712/](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3466712/)

---


# Code
```
class Solution {
  int findMaxFish(List<List<int>> grid) {
    int result = 0;
    for (int i = 0; i < grid.length; i++) {
      for (int j = 0; j < grid[i].length; j++) {
        if (grid[i][j] != 0) {
          final tempResult = traverseRecurr(grid, i, j);
          result = tempResult > result ? tempResult : result;
        }
      }
    }
    return result;
  }

   int traverseRecurr(List<List<int>> grid, i, j) {
    if (
       i < grid.length 
    && i >= 0 
    && j < grid[i].length 
    && j >= 0
    ) {
      if (grid[i][j] == 0) {
        return 0;
      }
      int result = grid[i][j];
      grid[i][j] = 0;
      result += traverseRecurr(grid, i - 1, j);
      result += traverseRecurr(grid, i + 1, j);
      result += traverseRecurr(grid, i, j + 1);
      result += traverseRecurr(grid, i, j - 1);
      return result;
    } else {
      return 0;
    }
  }
}
```