# Swift Solution with Simple Explanation

**Author:** icedcappuccino
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5432476/](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5432476/)

---

# Approach
We can break down the problem into a few subproblems:
1. Count and record the number of "X"s in a submatrix bounded by `grid[0][0]` and `grid[i][j]` (inclusive) for all `i` and `j`
2. Count and record the number of "Y"s in a submatrix bounded by `grid[0][0]` and `grid[i][j]` (inclusive) for all `i` and `j`
3. Use the results of the above problems to count the number of submatrices meeting the required criteria

# Complexity
- Time complexity: $$O(M*N)$$ where M and N are the length and width of the grid
- Space complexity: $$O(M*N)$$ where M and N are the length and width of the grid

# Code
```
class Solution {
    func numberOfSubmatrices(_ grid: [[Character]]) -> Int {
        var xCount: [[Int]] = gridCharCount(grid, "X")
        var yCount: [[Int]] = gridCharCount(grid, "Y")

        var ans: Int = 0
        for r in 0..<grid.count {
            for c in 0..<grid[r].count {
                if xCount[r][c] > 0 && xCount[r][c] == yCount[r][c] {
                    ans += 1
                } 
            }
        }
        return ans
    }

    func gridCharCount(_ grid: [[Character]], _ charToFind: Character) -> [[Int]] {
        var result: [[Int]] = []

        // count char in each row
        for r in 0..<grid.count {
            var row: [Int] = []
            var rowCharCount: Int = 0
            for c in 0..<grid[r].count {
                if grid[r][c] == charToFind {
                    rowCharCount += 1
                }
                row.append(rowCharCount)
            }
            result.append(row)
        }

        // count char in submatrix
        if grid.count > 1 {
            for c in 0..<grid[0].count {
                for r in 1..<grid.count {
                    result[r][c] += result[r - 1][c]
                }
            }
        }

        return result
    }
}
```