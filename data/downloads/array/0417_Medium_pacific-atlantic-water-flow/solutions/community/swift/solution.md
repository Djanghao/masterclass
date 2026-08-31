# Swift 87%. Relatively simple DFS

**Author:** jeffsherin
**Votes:** 1
**Link:** [https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/3162217/](https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/3162217/)

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
```
class Solution {
    func pacificAtlantic(_ heights: [[Int]]) -> [[Int]] {
        
        var atl = Set<[Int]>()
        var pac = Set<[Int]>()

        let lastRow = heights.count - 1
        let lastColumn = heights[0].count - 1

        for c in 0..<heights[0].count {
            dfs(heights, 0, c, heights[0][c], &pac)
            dfs(heights, lastRow, c, heights[lastRow][c], &atl)
        }

        for r in 0..<heights.count {
            dfs(heights, r, 0, heights[r][0], &pac)
            dfs(heights, r, lastColumn, heights[r][lastColumn], &atl)
        }

        return Array(atl.intersection(pac))
    }

    func dfs(_ heights: [[Int]], _ r: Int, _ c: Int, _ prevValue: Int, _ visited: inout Set<[Int]>) {
        if r < 0 || r >= heights.count { return }
        if c < 0 || c >= heights[0].count { return }
        if heights[r][c] < prevValue { return }

        let pos = [r, c]
        if visited.contains(pos) { return }
        visited.insert(pos)

        dfs(heights, r + 1, c, heights[r][c], &visited)
        dfs(heights, r - 1, c, heights[r][c], &visited)
        dfs(heights, r, c + 1, heights[r][c], &visited)
        dfs(heights, r, c - 1, heights[r][c], &visited)
    }

   
}
```