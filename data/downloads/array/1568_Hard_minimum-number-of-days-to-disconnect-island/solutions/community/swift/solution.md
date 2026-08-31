# Swift | 2 days are enough 🏄

**Author:** pagafan7as
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5619102/](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5619102/)

---

The key to solving this problem is to notice that the solution is either 0, 1 or 2 days.

**Proof:** If there is at least one square with land, go up and right as long as there is land. You will end up at a land square from where you cannot proceed, with water above and to the right. This land square can be made disconnected from the rest by making its 2 neighbors below and to the left water. Therefore 2 days are enough.

This property leads to the following algorithm:

Use DFS and look if the grid, as is, is disconnected, that is check whether there are 0 or 2 or more islands: 0 days.

Otherwise, for each land square, remove it and see if the grid becomes disconnected: 1 day.

If this is not the case, we know by the proof above, that it will take 2 days.

# Code
```
class Solution {
    func minDays(_ grid: [[Int]]) -> Int {
        let m = grid.count, n = grid[0].count
        var grid = grid

        if isDisconnected(grid) { return 0 }        

        for r in 0..<m {
            for c in 0..<n where grid[r][c] == 1 {
                grid[r][c] = 0
                if isDisconnected(grid) { return 1 }
                grid[r][c] = 1
            }
        }

        return 2

        func isDisconnected(_ grid: [[Int]]) -> Bool {
            var grid = grid
            var islands = 0
            for r in 0..<m {
                for c in 0..<n where grid[r][c] == 1 {
                    dfs(r, c)
                    islands += 1
                }
            }
            return islands != 1

            func dfs(_ r: Int, _ c: Int) {
                if r < 0 || r >= m || c < 0 || c >= n { return }
                if grid[r][c] != 1 { return }
                grid[r][c] = 2
                for dir in [(1, 0), (-1, 0), (0, 1), (0, -1)] {
                    dfs(r + dir.0, c + dir.1)
                }
            }
        }
    }
}
```