# Simple, Using Sets

**Author:** criticks
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/4877621/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/4877621/)

---


# Code
```
class Solution {
    func tictactoe(_ moves: [[Int]]) -> String {
        var winConditions: [Set<[Int]>] = [
            [[0, 0], [0, 1], [0, 2]], // top row
            [[1, 0], [1, 1], [1, 2]], // middle row
            [[2, 0], [2, 1], [2, 2]], // bottom row
            [[0, 0], [1, 0], [2, 0]], // left col
            [[0, 1], [1, 1], [2, 1]], // middle col
            [[0, 2], [1, 2], [2, 2]], // right col
            [[2, 0], [1, 1], [0, 2]], // positive diag
            [[0, 0], [1, 1], [2, 2]], // negative diag
        ]
        
        var aMoveSet = Set<[Int]>()
        var bMoveSet = Set<[Int]>()
        
        var currentlyA = true 
        for move in moves {
            if currentlyA {
                aMoveSet.insert(move)
                if winConditions.contains{ $0.isSubset(of: aMoveSet) } { return "A" }
            } else {
                bMoveSet.insert(move)
                if winConditions.contains{ $0.isSubset(of: bMoveSet) } { return "B" }
            }
            currentlyA.toggle()
        }
        return moves.count == 9 ? "Draw" : "Pending"
    }
}
```