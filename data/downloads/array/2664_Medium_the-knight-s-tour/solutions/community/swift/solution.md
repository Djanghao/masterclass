# Swift - Based on editorial backtracking answer

**Author:** starfunkl
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-knights-tour/solutions/5955219/](https://leetcode.com/problems/the-knights-tour/solutions/5955219/)

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
```swift []
class Solution {
    func tourOfKnight(_ m: Int, _ n: Int, _ r: Int, _ c: Int) -> [[Int]] {
        var chessBoard = [[Int]](repeating: [Int](repeating: 0, count: n), count: m)
        chessBoard[r][c] = -1

        _ = solveKnightsTour(dimensions: (width: m, height: n), position: (x: r, y: c), board: &chessBoard, moveCount: 1)

        chessBoard[r][c] = 0

        return chessBoard
    }

    private func solveKnightsTour(
        dimensions: (width: Int, height: Int), 
        position: (x: Int, y: Int),
        board: inout [[Int]],
        moveCount: Int
    ) -> Bool {
        guard moveCount != dimensions.width * dimensions.height else {
            return true
        }

        let possibleMoves = [
            (2, 1), (2, -1), 
            (1, -2), (-1, -2), 
            (-2, -1), (-2, 1), 
            (-1, 2), (1, 2)
        ]

        for possibleMove in possibleMoves {
            guard isValid(
                dimensions: dimensions,
                move: (x: possibleMove.0, y: possibleMove.1), 
                currentPosition: position,
                board: board
            ) else {
                continue
            }

            let newX = position.x + possibleMove.0
            let newY = position.y + possibleMove.1

            board[newX][newY] = moveCount
            let result = solveKnightsTour(
                dimensions: dimensions,
                position: (x: newX, y: newY),
                board: &board,
                moveCount: moveCount + 1
            )
            if result == true {
                return true
            } else {
                board[newX][newY] = 0
            }
        }
        return false
    }

    func isValid(
        dimensions: (width: Int, height: Int),
        move: (x: Int, y: Int), 
        currentPosition: (x: Int, y: Int),
        board: [[Int]]
    ) -> Bool {
        let x = currentPosition.x + move.x
        let y = currentPosition.y + move.y

        guard x < dimensions.width, x >= 0 else {
            return false
        }
        
        guard y < dimensions.height, y >= 0 else {
            return false
        }

        guard board[x][y] == 0 else {
            return false
        }

        return true
    }
}
```