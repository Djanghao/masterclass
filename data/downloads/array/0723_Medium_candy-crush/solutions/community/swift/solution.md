# Swift 28ms, 15Mb – beats 100%

**Author:** Yurii_Koval
**Votes:** 0
**Link:** [https://leetcode.com/problems/candy-crush/solutions/5286211/](https://leetcode.com/problems/candy-crush/solutions/5286211/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Mark all adjacent values with its' negative values and replace with 0 while crashing

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(m^2\u22C5n^2)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
class Solution {
    func candyCrush(_ board: [[Int]]) -> [[Int]] {
        var mutatedBoard = board
        while !findAndCrush(&mutatedBoard) {
            dropBelowZero(&mutatedBoard)
        }
        return mutatedBoard
    }

    func findAndCrush(_ board: inout [[Int]]) -> Bool {
            var complete = true
            // vertically adjacent
            for r in 1..<board.count - 1 {
                for c in 0..<board[0].count where board[r][c] != 0  {
                    if abs(board[r - 1][c]) == abs(board[r][c]) && 
                            abs(board[r][c]) == abs(board[r + 1][c]) {
                        board[r - 1][c] = -abs(board[r - 1][c])
                        board[r][c] = -abs(board[r][c])
                        board[r + 1][c] = -abs(board[r + 1][c])
                        complete = false
                    }
                }
            }
            // horizontally adjacent
            for r in 0..<board.count {
                for c in 1..<board[0].count - 1 where board[r][c] != 0 {
                    if abs(board[r][c - 1]) == abs(board[r][c]) && 
                            abs(board[r][c]) == abs(board[r][c + 1]) {
                        board[r][c - 1] = -abs(board[r][c - 1])
                        board[r][c] = -abs(board[r][c])
                        board[r][c + 1] = -abs(board[r][c + 1])
                        complete = false
                    }
                }
            }
            return complete
        }  

    func dropBelowZero(_ board: inout [[Int]]) {
        for col in 0..<board[0].count {
            var lowestZero = -1
            for row in stride(from: board.count - 1, to: -1, by: -1) {
                if board[row][col] <= 0 {
                    lowestZero = max(row, lowestZero)
                    board[row][col] = 0
                } else if lowestZero >= 0 {
                    board[lowestZero][col] = board[row][col]
                    board[row][col] = 0
                    lowestZero -= 1
                }
            }
        }
    }

}
```