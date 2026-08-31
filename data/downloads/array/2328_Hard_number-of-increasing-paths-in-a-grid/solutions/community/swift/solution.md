# ✅ Beats 100% Runtime | DFS

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3651108/](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3651108/)

---

# Solution
```swift
struct Solution {
    @_optimize(speed)
    func countPaths(_ grid: [[Int]]) -> Int {
        let (m, n) = (grid.count, grid[0].count)
        var dp = [[Int]](repeating: [Int](repeating: 0, count: n), count: m)
        let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        let mod = 1_000_000_007
        var answer = 0
        
        func dfs(_ grid: [[Int]], _ i: Int, _ j: Int) -> Int {
            guard dp[i][j] == 0 else { return dp[i][j] }
            var answer = 1

            for d in directions {
                let (prevI, prevJ) = (i + d[0], j + d[1])
                let containsI = (0..<grid.count).contains(prevI)
                let containsJ = (0..<grid[0].count).contains(prevJ)
                
                if containsI, containsJ, grid[prevI][prevJ] < grid[i][j] {
                    answer += dfs(grid, prevI, prevJ)
                    answer %= mod
                }
            }
            dp[i][j] = answer
            return answer
        }

        for i in 0..<m {
            for j in 0..<n {
                answer = (answer + dfs(grid, i, j)) % mod
            }
        }
        return answer
    }
}
```