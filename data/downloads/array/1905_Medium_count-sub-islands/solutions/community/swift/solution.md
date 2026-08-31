# DFS

**Author:** ksmirnovnn
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-sub-islands/solutions/5700888/](https://leetcode.com/problems/count-sub-islands/solutions/5700888/)

---


```swift []
class Solution {
    func countSubIslands(_ grid1: [[Int]], _ grid2: [[Int]]) -> Int {
        var grid2 = grid2 // Create a mutable copy of grid2
        let rows = grid1.count
        let cols = grid1[0].count
        var count = 0
        
        // Helper function to perform DFS
        func dfs(_ r: Int, _ c: Int) -> Bool {
            // If the current cell is out of bounds or water, return true
            if r < 0 || c < 0 || r >= rows || c >= cols || grid2[r][c] == 0 {
                return true
            }
            
            // If this part of grid2 is land but not in grid1, return false
            if grid1[r][c] == 0 {
                return false
            }
            
            // Mark this cell as visited by setting it to 0 in grid2
            grid2[r][c] = 0
            
            // Explore all 4 directions (up, down, left, right)
            let up = dfs(r - 1, c)
            let down = dfs(r + 1, c)
            let left = dfs(r, c - 1)
            let right = dfs(r, c + 1)
            
            // Return true if all parts of this island in grid2 are within grid1
            return up && down && left && right
        }
        
        // Iterate over every cell in the grid2
        for r in 0..<rows {
            for c in 0..<cols {
                // If we find an unvisited land cell in grid2, start DFS
                if grid2[r][c] == 1 {
                    // If the entire island is within grid1, increase the count
                    if dfs(r, c) {
                        count += 1
                    }
                }
            }
        }
        
        return count
    }
}

```