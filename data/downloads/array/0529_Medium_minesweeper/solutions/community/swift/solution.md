# Swift | DFS Clean Approach

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/minesweeper/solutions/5422879/](https://leetcode.com/problems/minesweeper/solutions/5422879/)

---

```
class Solution {
    func updateBoard(_ board: [[Character]], _ click: [Int]) -> [[Character]] {
        let (m, n) = (board.count, board[0].count)
        var board = board
        let (row, col) = (click[0], click[1])

        switch board[row][col] {
        case "M": board[row][col] = "X"
        case "E": revealEmpty(row, col)
        default: break
        }

        return board

        // Recursively reveals board (DFS).
        func revealEmpty(_ row: Int, _ col: Int) {
            if board[row][col] != "E" { return }

            // Count the number of adjacent mines and update cell.
            var count = 0
            for dr in -1...1 {
                for dc in -1...1 {
                    if dr == 0 && dc == 0 { continue }
                    if row + dr < 0 || row + dr >= m || col + dc < 0 || col + dc >= n { continue }
                    if board[row + dr][col + dc] == "M" { count += 1}
                }
            }
            let val: Character = count == 0 ? "B" : Character("\\(count)")
            board[row][col] = val
    
            if count > 0 { return }

            // Reveal adjacent cells.
            for dr in -1...1 {
                for dc in -1...1 {
                    if dr == 0 && dc == 0 { continue }
                    if row + dr < 0 || row + dr >= m || col + dc < 0 || col + dc >= n { continue }
                    revealEmpty(row + dr, col + dc)
                }
            }
        }
    }
}
```