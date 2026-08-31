# Dfs Approach recursively

**Author:** jesbin66
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/5137927/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/5137927/)

---

# Approach Explanation
This solution utilizes depth-first search (DFS) to validate if the given grid represents a valid knight's tour. It iterates through the grid, attempting each of the eight possible moves a knight can make. If a move is valid, it proceeds recursively. If all cells are visited exactly once, the function returns true; otherwise, it returns false.

# Approach 
- **Intuition**: Apply DFS to explore the knight's tour on the grid, keeping track of visited cells.
- **Algorithm**:
  1. Define the eight possible moves a knight can make on the chessboard.
  2. Implement a DFS function to explore each potential move.
  3. If a move is valid and leads to an unvisited cell, recursively explore further.
  4. Mark visited cells and backtrack if needed.
  5. If all cells are visited exactly once, return true; otherwise, return false.
- **Complexity Analysis**:
  - **Time Complexity**: O(N^2) in the worst-case scenario, where N is the size of the grid. The DFS explores each cell once.
  - **Space Complexity**: O(1) excluding the recursive stack, which depends on the call depth.

# Code
```dart
class Solution {
  bool checkValidGrid(List<List<int>> grid) {
    int n = grid.length;
    List<List<int>> moves = [
      [2, 1], [2, -1], [-2, 1], [-2, -1],
      [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    bool isValidMove(int x, int y, int count) =>
        x >= 0 && x < n && y >= 0 && y < n && grid[x][y] == count;

    bool dfs(int x, int y, int count) {
      if (count == n * n) return true;
      for (var move in moves) {
        int newX = x + move[0];
        int newY = y + move[1];
        if (isValidMove(newX, newY, count)) {
          if (dfs(newX, newY, count + 1)) return true;
        }
      }
      return false;
    }

    // Ensure the knight starts from the top-left corner (0, 0)
    if (grid[0][0] != 0) return false;

    return dfs(0, 0, 1);
  }
}
