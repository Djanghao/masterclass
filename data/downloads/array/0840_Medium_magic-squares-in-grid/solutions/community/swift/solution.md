# Magic square beats 100 %

**Author:** kchyngiz
**Votes:** 0
**Link:** [https://leetcode.com/problems/magic-squares-in-grid/solutions/5614007/](https://leetcode.com/problems/magic-squares-in-grid/solutions/5614007/)

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
    func numMagicSquaresInside(_ grid: [[Int]]) -> Int {
        if grid.count < 3 || grid[0].count < 3 { return 0 }
        
        var count: Int = 0
        let rowCount = grid.count 
        let colCount = grid[0].count 
        
        for row in 0..<(rowCount - 2) {
            for col in 0..<(colCount - 2) {
                if isMagic(row: row, col: col, grid: grid) {
                    count += 1
                }
            }
        }

        return count 
    }

    func isMagic(row: Int, col: Int, grid: [[Int]]) -> Bool {
        // Check if the grid contains numbers 1-9
        var seen = Set<Int>()
        for i in row..<row + 3 {
            for j in col..<col + 3 {
                let num = grid[i][j]
                if num < 1 || num > 9 || seen.contains(num) {
                    return false
                }
                seen.insert(num)
            }
        }

        // Calculate the sum of the first row
        let targetSum = grid[row][col] + grid[row][col + 1] + grid[row][col + 2]

        // Check rows and columns sum
        for i in 0..<3 {
            let rowSum = grid[row + i][col] + grid[row + i][col + 1] + grid[row + i][col + 2]
            let colSum = grid[row][col + i] + grid[row + 1][col + i] + grid[row + 2][col + i]
            if rowSum != targetSum || colSum != targetSum {
                return false
            }
        }

        // Check diagonals sum
        let diag1Sum = grid[row][col] + grid[row + 1][col + 1] + grid[row + 2][col + 2]
        let diag2Sum = grid[row][col + 2] + grid[row + 1][col + 1] + grid[row + 2][col]
        
        return diag1Sum == targetSum && diag2Sum == targetSum
    }
}

```