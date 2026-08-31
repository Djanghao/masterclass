# Dart - DFS Solution, 100%

**Author:** MrudulAddipalli
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/3253707/](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/3253707/)

---

# Intuition
Applying DFS And Caching Result

# Approach
Using DFS

# Complexity
- Time complexity:
$$O(mxn)$$

- Space complexity:
$$O(mxn)$$

# Code
```

class Solution {
  int max(int a, int b) => a > b ? a : b;

  int longestIncreasingPath(List<List<int>> matrix) {
    int maxPathLength = 0;

    int ROW = matrix.length;
    int COL = matrix[0].length;
    List<List<int>> cache = [];

    // fill matrix
    for (int x = 0; x < ROW; x++) {
      List<int> row = [];
      for (int y = 0; y < COL; y++) {
        row.add(0);
      }
      cache.add(row);
    }

    int dfs(int x, int y) {
      // Optimisation
      if (cache[x][y] != 0) return cache[x][y];
      int currentPathLength = 1;
      List<List<int>> directions = [[1, 0],[-1, 0],[0, 1],[0, -1]];
      for (List<int> dir in directions) {
        int r = x + dir[0];
        int c = y + dir[1];
        if (r >= 0 && r < ROW && c >= 0 && c < COL && 
            //  main condition for logic
            matrix[r][c] > matrix[x][y]) {
          currentPathLength = max(currentPathLength, 1 + dfs(r, c));
        }
      }
      // update cache
      cache[x][y] = currentPathLength;
      return currentPathLength;
    }

    for (int x = 0; x < ROW; x++) {
      for (int y = 0; y < COL; y++) {
        maxPathLength = max(maxPathLength, dfs(x, y));
      }
    }

    return maxPathLength;
  }
}

```