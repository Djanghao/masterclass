# Solution Beats 100%

**Author:** mohamedmostafaBig
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/5871079/](https://leetcode.com/problems/number-of-enclaves/solutions/5871079/)

---

# Intuition
The key intuition is to identify land cells that are not connected to the boundary. We can do this by first marking all land cells that are connected to the boundary, and then counting the remaining unmarked land cells.

# Approach
1. Iterate through the boundary cells of the grid.
2. For each land cell on the boundary, perform a depth-first search (DFS) to mark all connected land cells.
3. Use an iterative DFS with a stack to avoid stack overflow for large grids.
4. After marking all land cells connected to the boundary, count the remaining unmarked land cells.

# Complexity
- Time complexity: O(m * n)
  Where m is the number of rows and n is the number of columns in the grid. We potentially visit each cell once during the DFS and once during the final counting.

- Space complexity: O(m * n)
  In the worst case, if the entire grid is filled with land cells, our stack in the DFS could contain all cells. However, in practice, it's often much less.

# Code
```dart
class Solution {
  int numEnclaves(List<List<int>> grid) {
    int m = grid.length;
    int n = grid[0].length;

    // Mark all land cells connected to the boundary
    for (int i = 0; i < m; i++) {
      if (grid[i][0] == 1) iterativeDFS(grid, i, 0);
      if (grid[i][n - 1] == 1) iterativeDFS(grid, i, n - 1);
    }
    for (int j = 1; j < n - 1; j++) {
      if (grid[0][j] == 1) iterativeDFS(grid, 0, j);
      if (grid[m - 1][j] == 1) iterativeDFS(grid, m - 1, j);
    }

    // Count remaining land cells
    return grid.fold(0, (sum, row) => sum + row.where((cell) => cell == 1).length);
  }

  void iterativeDFS(List<List<int>> grid, int startI, int startJ) {
    int m = grid.length;
    int n = grid[0].length;
    List<int> stack = [startI * n + startJ];

    while (stack.isNotEmpty) {
      int current = stack.removeLast();
      int i = current ~/ n, j = current % n;

      if (grid[i][j] != 1) continue;

      grid[i][j] = 0; // Mark as visited

      // Check adjacent cells
      if (i > 0 && grid[i - 1][j] == 1) stack.add((i - 1) * n + j);
      if (i < m - 1 && grid[i + 1][j] == 1) stack.add((i + 1) * n + j);
      if (j > 0 && grid[i][j - 1] == 1) stack.add(i * n + j - 1);
      if (j < n - 1 && grid[i][j + 1] == 1) stack.add(i * n + j + 1);
    }
  }
}
```

This solution is optimized for both time and space efficiency:
1. We use a single integer to represent cell coordinates in the stack, reducing memory usage.
2. We only initiate DFS for boundary cells that are land, avoiding unnecessary operations.
3. The DFS is iterative, preventing stack overflow for large grids.
4. We use Dart's `fold` and `where` methods for efficient counting of remaining land cells.