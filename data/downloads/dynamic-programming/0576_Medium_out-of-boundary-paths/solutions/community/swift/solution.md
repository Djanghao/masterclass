# 🚀 Swift | Time: O(m * n * N) | Space: O(m * n * N)

**Author:** alekseiwe
**Votes:** 2
**Link:** [https://leetcode.com/problems/out-of-boundary-paths/solutions/4630180/](https://leetcode.com/problems/out-of-boundary-paths/solutions/4630180/)

---

# Complexity
- Time complexity: O(m * n * N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  O(m * n * N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func findPaths(_ m: Int, _ n: Int, _ maxMove: Int, _ startRow: Int, _ startColumn: Int) -> Int {
        let rows = m
        let columns = n
        let mod = 1000000007
        var dict: [String: Int] = [:]
        
        func dfs(
            _ row: Int,
            _ column: Int,
            _ remainingMove: Int
        ) -> Int {
            if row < 0 { return 1 }
            if row == rows { return 1 }
            if column < 0 { return 1 }
            if column == columns { return 1}
            if remainingMove == 0 { return 0 }
            
            let key = "\\(row)-\\(column)-\\(remainingMove)"
            if let val = dict[key] { return val }
            
            let res = (
                dfs(row + 1, column, remainingMove - 1) % mod +
                dfs(row - 1, column, remainingMove - 1) % mod +
                dfs(row, column + 1, remainingMove - 1) % mod +
                dfs(row, column - 1, remainingMove - 1) % mod
            ) % mod
            dict[key] = res
            return res
        }
        
        return dfs(startRow, startColumn, maxMove)
    }
}
```