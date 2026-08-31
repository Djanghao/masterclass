# Swift | Backtracking alternative

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/5338824/](https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/5338824/)

---

From an empty board, we try to reach the given board using legal moves.

This is quite a bit slower but less error prone as we don't have to deal with all the edge cases.

# Code
```
class Solution {
    func validTicTacToe(_ board: [String]) -> Bool {
        func gameOver(_ board: [[Character]]) -> Bool {
            let patterns = [0b111000000, 0b000111000, 0b000000111,
                            0b100100100, 0b010010010, 0b001001001,
                            0b100010001, 0b001010100]
            for pattern in patterns {
                cLoop: for c in ["X" as Character, "O" as Character] {
                    for i in 0..<9 where pattern & (1 << i) != 0 {
                        if board[i / 3][i % 3] != c { continue cLoop }
                    }
                    return true
                }
            }
            return false
        }

        func canReach(_ current: inout [[Character]],
                      _ player: Character, 
                      _ target: [[Character]],
                      _ visited: inout Set<[[Character]]>) -> Bool {
            if current == target { return true }
            if gameOver(current) { return false }
            if visited.contains(current) { return false }
            visited.insert(current)
            for row in 0..<3 {
                for col in 0..<3 {
                    if current[row][col] == " " {
                        current[row][col] = player
                        if canReach(&current, player == "X" ? "O" : "X",  target,&visited) {
                            return true
                        }
                        current[row][col] = " "
                    }
                }
            }
            return false
        }

        var current = Array(repeating: Array(repeating: " " as Character, count:3), count: 3)
        var visited = Set<[[Character]]>()
        let target = board.map { Array($0) }
        return canReach(&current, "X", target, &visited)
    }
}
```