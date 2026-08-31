# Swift Simple Solution

**Author:** laxansh
**Votes:** 1
**Link:** [https://leetcode.com/problems/battleships-in-a-board/solutions/673504/](https://leetcode.com/problems/battleships-in-a-board/solutions/673504/)

---

```
 func countBattleships(_ board: [[Character]]) -> Int {
        var num = 0
        for i in 0..<board.count {
            for j in 0..<board[i].count {
                if board[i][j] == "." {
                    continue 
                }
                if i > 0 && String(board[i-1][j]) == "X" {
                    continue
                } 
                if j > 0 && String(board[i][j-1]) == "X" {
                    continue
                }
                num += 1
            }
        }
        return num
    }
```