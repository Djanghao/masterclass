# Dart simple answer and explanation

**Author:** _abhiramks
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/solutions/5980927/](https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/solutions/5980927/)

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
  int maxMoves(List<List<int>> grid) {
    int rows = grid.length;
    int cols = grid[0].length;
    List<List<int>> dp = List.generate(rows, (_) => List.filled(cols, -1));

    // Helper function to check if the coordinates are within bounds
    bool isValid(int row, int col) => row >= 0 && row < rows && col >= 0 && col < cols;

    // DFS function with memoization to calculate maximum moves from a cell
    int dfs(int row, int col) {
      if (dp[row][col] != -1) return dp[row][col]; // Return cached result
      
      int maxMoves = 0;
      List<List<int>> directions = [
        [-1, 1], // Diagonally up-right
        [0, 1],  // Right
        [1, 1]   // Diagonally down-right
      ];

      for (var dir in directions) {
        int newRow = row + dir[0];
        int newCol = col + dir[1];

        // Move to the next cell only if it has a strictly greater value
        if (isValid(newRow, newCol) && grid[newRow][newCol] > grid[row][col]) {
          maxMoves = maxMoves > dfs(newRow, newCol) + 1 ? maxMoves : dfs(newRow, newCol) + 1;
        }
      }

      dp[row][col] = maxMoves;
      return dp[row][col];
    }

    // Start DFS from each cell in the first column
    int result = 0;
    for (int row = 0; row < rows; row++) {
      result = result > dfs(row, 0) ? result : dfs(row, 0);
    }

    return result;
  }
}

<!-- Goal: Find the maximum moves from any cell in the first column, moving right to cells with greater values in specific directions (up-right, right, down-right).

DP Table (dp): dp[row][col] stores the maximum moves from each cell, calculated once and reused to save time.

DFS with Memoization: The dfs function explores each valid move, caching results in dp to avoid repeated calculations.

Main Execution: Starts DFS from every cell in the first column and tracks the maximum moves found. -->


```