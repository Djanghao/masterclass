# Swift: Beats 100%, Matrix DFS + DP Memoization

**Author:** ashish-badak
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/5519064/](https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/5519064/)

---

# Complexity
- **Time complexity:**
`O(nm)` where:
    - `n == grid.count` and
    - `m == grid[0].count`
- **Space complexity:**
`O(nmk)` where:
    - `n == grid.count`,
    - `m == grid[0].count` and
    - `k == (rowCount + columnCount) / 2` (target sum of 1's and 0's in a path.)

# Code
```
class Solution {
    func isThereAPath(_ grid: [[Int]]) -> Bool {
        let rowCount = grid.count
        let columnCount = grid[0].count
        if (rowCount + columnCount).isMultiple(of: 2) { return false }
        let target = (rowCount + columnCount) / 2

        var mappedPaths: [[[Int:Bool]]] = Array(
            repeating: Array(repeating: [:], count: columnCount),
            count: rowCount
        )

        func hasBalancedPath(row: Int, column: Int, sum: Int) -> Bool {
            guard row < rowCount, column < columnCount else { return false }

            let currentSum = sum + grid[row][column]

            if let path = mappedPaths[row][column][currentSum] {
                return path
            }

            if row == rowCount - 1, column == columnCount - 1 {
                mappedPaths[row][column][currentSum] = currentSum == target
                return mappedPaths[row][column][currentSum]!
            }

            if hasBalancedPath(row: row + 1, column: column, sum: currentSum) {
                mappedPaths[row][column][currentSum] = true
                return true
            }

            let downwardPath = hasBalancedPath(row: row, column: column + 1, sum: currentSum)
            mappedPaths[row][column][currentSum] = downwardPath
            return downwardPath
        }

        return hasBalancedPath(row: 0, column: 0, sum: 0)
    }
}
```