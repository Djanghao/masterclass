# BFS Approach

**Author:** gobindsingh6799
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5620826/](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5620826/)

---

# Intuition
To solve the problem of finding the minimum number of days required to disconnect a grid of land (represented by `1`s), we can think of the grid as a graph where each cell is a node, and adjacent cells are connected by edges. The goal is to determine the minimum number of land cells that need to be converted to water (represented by `0`s) to disconnect the landmass, meaning there is no path between two previously connected land cells.

# Approach
1. **Check if the Grid is Already Disconnected**: 
   - First, we perform a check to see if the grid is already disconnected (i.e., there are multiple distinct landmasses or no land at all). If this is the case, we can return `0` immediately since no further action is needed.

2. **Try Removing Each Land Cell**:
   - We then iterate through each land cell in the grid, temporarily converting it to water. After each conversion, we check if the grid becomes disconnected by performing a BFS (Breadth-First Search) from any remaining land cell.
   - If removing any single land cell disconnects the grid, we return `1`.

3. **Fallback to Return 2**:
   - If no single-cell removal disconnects the grid, then it requires at least two cell removals to disconnect. Thus, we return `2`.

# Complexity
- **Time complexity**: 
  - The time complexity is $$O(m \	imes n \	imes (m + n))$$, where `m` and `n` are the dimensions of the grid. This complexity arises because for each cell (of which there are `m * n`), we perform a BFS, which can take up to `m + n` time in the worst case.

- **Space complexity**:
  - The space complexity is $$O(m \	imes n)$$, which is required for the `visited` list and the queue used in the BFS.

# Code
```dart
class Solution {
  int minDays(List<List<int>> grid) {
    int m = grid.length;
    int n = grid[0].length;
    List<List<int>> directions = [
      [0, 1], [1, 0], [0, -1], [-1, 0]
    ];

    bool isDisconnected(List<List<int>> grid) {
      List<List<bool>> visited = List.generate(m, (_) => List.filled(n, false));
      int landCount = 0;
      int startRow = -1, startCol = -1;
      
      // Find first land cell to start BFS
      for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
          if (grid[i][j] == 1) {
            landCount++;
            if (startRow == -1) {
              startRow = i;
              startCol = j;
            }
          }
        }
      }
      
      // If no land found, grid is disconnected
      if (landCount == 0) return true;
      
      // BFS to count connected components
      int count = 0;
      List<List<int>> queue = [[startRow, startCol]];
      visited[startRow][startCol] = true;

      while (queue.isNotEmpty) {
        List<int> cell = queue.removeLast();
        int r = cell[0], c = cell[1];
        count++;
        for (List<int> dir in directions) {
          int nr = r + dir[0];
          int nc = c + dir[1];
          if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1 && !visited[nr][nc]) {
            visited[nr][nc] = true;
            queue.add([nr, nc]);
          }
        }
      }
      
      return count != landCount;
    }

    // Initial check
    if (isDisconnected(grid)) {
      return 0;
    }

    // Try removing each land cell
    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        if (grid[i][j] == 1) {
          grid[i][j] = 0;
          if (isDisconnected(grid)) {
            return 1;
          }
          grid[i][j] = 1;  // Backtrack
        }
      }
    }

    return 2;  // If all else fails, return 2
  }
}
