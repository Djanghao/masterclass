# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-paths-iii/solutions/4355188/](https://leetcode.com/problems/unique-paths-iii/solutions/4355188/)

---

# Complexity
- Time complexity: 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n * m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    private func dfs(
        _ i: Int,
        _ j: Int,
        _ curBlanks: Int,
        _ totalBlanks: Int,
        _ visited: inout [[Bool]],
        _ grid: [[Int]]
    ) -> Int {
        guard i >= .zero && i < grid.count &&
                j >= .zero && j < grid[0].count &&
                !visited[i][j] else {
            return .zero
        }

        switch grid[i][j] {
        case 0:
            visited[i][j] = true
            defer { visited[i][j] = false }
            let curBlanks = curBlanks + 1
            return dfs(i + 1, j, curBlanks, totalBlanks, &visited, grid) +
                dfs(i - 1, j, curBlanks, totalBlanks, &visited, grid) +
                dfs(i, j + 1, curBlanks, totalBlanks, &visited, grid) +
                dfs(i, j - 1, curBlanks, totalBlanks, &visited, grid)
        case 1:
            guard curBlanks == .zero else { return .zero }
            return dfs(i + 1, j, curBlanks, totalBlanks, &visited, grid) +
                dfs(i - 1, j, curBlanks, totalBlanks, &visited, grid) +
                dfs(i, j + 1, curBlanks, totalBlanks, &visited, grid) +
                dfs(i, j - 1, curBlanks, totalBlanks, &visited, grid)
        case 2:
            return curBlanks == totalBlanks ? 1 : 0
        default:
            return .zero
        }
    }

    func uniquePathsIII(_ grid: [[Int]]) -> Int {
        var blanksCount = 0
        var startI: Int!
        var startJ: Int!
        for i in 0 ..< grid.count {
            for j in 0 ..< grid[0].count {
                if grid[i][j] == 0 {
                    blanksCount += 1
                } else if grid[i][j] == 1 {
                    startI = i
                    startJ = j
                }
            }
        }
        var visited = Array(repeating: Array(repeating: false, count: grid[0].count), count: grid.count)
        return dfs(startI, startJ, .zero, blanksCount, &visited, grid)
    }
}

```