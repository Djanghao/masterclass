# [Swift] O(1) space, O(mn) time

**Author:** alptekin35
**Votes:** 2
**Link:** [https://leetcode.com/problems/game-of-life/solutions/522477/](https://leetcode.com/problems/game-of-life/solutions/522477/)

---

```
class Solution {
    func gameOfLife(_ board: inout [[Int]]) {
        let m = board.count
        let n = board[0].count
        for i in 0..<m{
            for j in 0..<n{
                if board[i][j] == 1{ // currently, it is alive
                    var neighBours = 0
                    neighBours += checkCell(&board, i-1, j-1, m, n)
                    neighBours += checkCell(&board, i-1, j, m, n)
                    neighBours += checkCell(&board, i-1, j+1, m, n)
                    neighBours += checkCell(&board, i, j+1, m, n)
                    neighBours += checkCell(&board, i+1, j+1, m, n)
                    neighBours += checkCell(&board, i+1, j, m, n)
                    neighBours += checkCell(&board, i+1, j-1, m, n)
                    neighBours += checkCell(&board, i, j-1, m, n)
                    if neighBours < 2 || neighBours > 3{
                        board[i][j]  = 2
                    }
                }else{ // currently, it is dead
                    var neighBours = 0
                    neighBours += checkCell(&board, i-1, j-1, m, n)
                    neighBours += checkCell(&board, i-1, j, m, n)
                    neighBours += checkCell(&board, i-1, j+1, m, n)
                    neighBours += checkCell(&board, i, j+1, m, n)
                    neighBours += checkCell(&board, i+1, j+1, m, n)
                    neighBours += checkCell(&board, i+1, j, m, n)
                    neighBours += checkCell(&board, i+1, j-1, m, n)
                    neighBours += checkCell(&board, i, j-1, m, n)
                    if neighBours == 3{
                        board[i][j]  = 3
                    }
                }
            }
        }
        for i in 0..<m{
            for j in 0..<n{
                if board[i][j] == 2{
                    board[i][j] = 0
                }else if board[i][j] == 3{
                    board[i][j] = 1
                }
            }
        }
    }
    
    func checkCell(_ board: inout [[Int]], _ i:Int,_ j:Int,_ m:Int,_ n:Int) -> Int{
        if i < 0 || i >= m || j < 0 || j >= n {
            return 0
        }
        if board[i][j] == 0 || board[i][j] == 3{
            return 0
        }
        return 1
    }
}
```