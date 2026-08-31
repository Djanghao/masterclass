# Swift - Slashes DFS

**Author:** ksmirnovnn
**Votes:** 2
**Link:** [https://leetcode.com/problems/regions-cut-by-slashes/solutions/5615517/](https://leetcode.com/problems/regions-cut-by-slashes/solutions/5615517/)

---


```
class Solution {
    func regionsBySlashes(_ grid: [String]) -> Int {
        let n = grid.count
        // Create a 3x3 grid for each cell in the original grid to better represent the slashes and spaces.
        var gridMap = Array(repeating: Array(repeating: -1, count: n * 3), count: n * 3)
        
        for i in 0..<n {
            for j in 0..<n {
                // Determine the character at the current position
                let char = grid[i][grid[i].index(grid[i].startIndex, offsetBy: j)]
                
                // If the character is '/', mark the respective triangles
                if char == "/" {
                    gridMap[i * 3][j * 3 + 2] = 1    // Top-right part of the 3x3 grid
                    gridMap[i * 3 + 1][j * 3 + 1] = 1  // Center part of the 3x3 grid
                    gridMap[i * 3 + 2][j * 3] = 1    // Bottom-left part of the 3x3 grid
                }
                // If the character is '\\', mark the respective triangles
                else if char == "\\\" {
                    gridMap[i * 3][j * 3] = 1        // Top-left part of the 3x3 grid
                    gridMap[i * 3 + 1][j * 3 + 1] = 1  // Center part of the 3x3 grid
                    gridMap[i * 3 + 2][j * 3 + 2] = 1  // Bottom-right part of the 3x3 grid
                }
            }
        }
        
        // Helper function for DFS traversal
        func dfs(_ x: Int, _ y: Int) {
            // If the coordinates are out of bounds or the cell is already visited, return
            if x < 0 || y < 0 || x >= n * 3 || y >= n * 3 || gridMap[x][y] != -1 {
                return
            }
            // Mark the current cell as visited
            gridMap[x][y] = 0
            // Visit all neighboring cells
            dfs(x + 1, y)
            dfs(x - 1, y)
            dfs(x, y + 1)
            dfs(x, y - 1)
        }
        
        var regions = 0
        
        // Traverse through the expanded grid
        for i in 0..<n * 3 {
            for j in 0..<n * 3 {
                // If the current cell is unvisited, start a DFS which counts as a new region
                if gridMap[i][j] == -1 {
                    regions += 1
                    dfs(i, j)
                }
            }
        }
        
        // Return the total number of regions found
        return regions
    }
}

```