# Swift: Straightforward DFS

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/5186638/](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/5186638/)

---

# Approach
Straightforward DFS

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
class Solution {
    func hasValidPath(_ grid: [[Int]]) -> Bool {
        let m = grid.count, n = grid.first?.count ?? 0

        // We will modify grid to mark visited nodes with "0".
        var grid = grid

        func dfs(_ row: Int, _ col: Int) -> Bool {
            if (row, col) == (m - 1, n - 1) { return true}  // Reached goal.
            if grid[row][col] == 0 { return false }         // Already visited.
            let startStreet = grid[row][col]

            // Mark node as visited.
            grid[row][col] = 0
            
            // Determines if 2 streets can be connected horizontally.
            func hConnect(_ left: Int, _ right: Int) -> Bool {
                (left == 1 || left == 4 || left == 6) && (right == 1 || right == 3 || right == 5)
            }

            // Determines if 2 streets can be connected vertically.
            func vConnect(_ up: Int, _ down: Int) -> Bool {
                (up == 2 || up == 3 || up == 4) && (down == 2 || down == 5 || down == 6)
            }

            for dir in [(0, 1), (0, -1), (1, 0), (-1, 0)] {
                let newRow = row + dir.0
                let newCol = col + dir.1
                if newRow < 0 || newRow >= m || newCol < 0 || newCol >= n { continue }
                switch dir {
                case (0, 1): if !hConnect(startStreet, grid[newRow][newCol]) { continue }
                case (0, -1): if !hConnect(grid[newRow][newCol], startStreet) { continue }
                case (1, 0): if !vConnect(startStreet, grid[newRow][newCol]) { continue }
                case (-1, 0): if !vConnect(grid[newRow][newCol], startStreet) { continue }
                default: continue
                }
                if dfs(newRow, newCol) { return true }
            }

            return false
        }

        return dfs(0, 0)
    }
}
```