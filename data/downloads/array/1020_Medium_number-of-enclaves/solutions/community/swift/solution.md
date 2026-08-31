# ✅ [Solution] Swift: Easy to understand DFS

**Author:** Rubiya1090
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/3388287/](https://leetcode.com/problems/number-of-enclaves/solutions/3388287/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Approach: Depth First Search


# Complexity
- Time complexity: O(m\u22C5n)

- Space complexity: O(m\u22C5n)

# Code
```
class Solution {
    func numEnclaves(_ grid: [[Int]]) -> Int {
         var grid = grid,  m = grid.count, n = grid[0].count
    
        for i in 0..<m {
            for j in 0..<n {
                if ((i == 0 || j == 0 || i == m - 1 || j == n - 1) && grid[i][j] == 1) {
                    dfs(&grid, i, j)
            }
        }
    }
        return grid.reduce(0) { sum, row in sum + row.reduce(0, +)}
    }

    private func dfs(_ grid: inout [[Int]], _ i: Int, _ j: Int) {
        grid[i][j] = 0
        let directions = [(0,1),(0,-1),(-1,0), (1,0)]
    
    for direction in directions {
        let x = i + direction.0
        let y = j + direction.1
        if x >= 0 && x < grid.count && y > 0 && y < grid[0].count && grid[x][y] == 1 {
            dfs(&grid, x, y)
        }
    }
}
}
```
Please upvote if you found the solution useful.
