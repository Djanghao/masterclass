# [✅] Easy to Understand Solution, O(mn) Runtime

**Author:** acetechinterview
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/4390889/](https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/4390889/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
- Iterate through matrix
- If value is 1, then check for consecutive values using separate functions
- Checking vertically means iterating through remaining rows in the same col
- Checking horizontally means iterating through remaining columns in the same row
- Checking diagonally means increasing the row and col index by 1
- Checking anti-diagonally means increasing the row by 1, but decreasing the col by 1
- Each function will exit iteration if values are not consecutive

# Complexity
- Time complexity: O(mn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func longestLine(_ mat: [[Int]]) -> Int {
        let rowCount = mat.count
        let colCount = mat.first!.count
        var longest = 0

        for row in 0..<mat.count {
            for col in 0..<mat[row].count {
                guard mat[row][col] == 1 else { continue }
                longest = max(longest, getHorizontalCount(row, col))
                longest = max(longest, getVerticalCount(row, col))
                longest = max(longest, getDiagonalCount(row, col))
                longest = max(longest, getAntiDiagonalCount(row, col))
            }
        }

        func getHorizontalCount(_ row: Int, _ col: Int) -> Int {
            var count = 1
            let value = mat[row][col]

            for iterCol in (col+1)..<colCount {
                guard value == mat[row][iterCol] else {
                    break
                }

                count += 1
            }

            return count
        }

        func getVerticalCount(_ row: Int, _ col: Int) -> Int {
            var count = 1
            let value = mat[row][col]

            for iterRow in (row+1)..<rowCount {
                guard value == mat[iterRow][col] else {
                    break
                }

                count += 1
            }

            return count
        }

        func getDiagonalCount(_ row: Int, _ col: Int) -> Int {
            var count = 1
            let value = mat[row][col]

            var rowDiag = row + 1
            var colDiag = col + 1

            while rowDiag < rowCount && colDiag < colCount {
                guard value == mat[rowDiag][colDiag] else {
                    break
                }

                count += 1
                rowDiag += 1
                colDiag += 1
            }

            return count
        }

        func getAntiDiagonalCount(_ row: Int, _ col: Int) -> Int {
            var count = 1
            let value = mat[row][col]

            var rowDiag = row + 1
            var colDiag = col - 1

            while rowDiag < rowCount && colDiag >= 0 {
                guard value == mat[rowDiag][colDiag] else {
                    break
                }

                count += 1
                rowDiag += 1
                colDiag -= 1
            }

            return count
        }

        return longest
    }
}
```