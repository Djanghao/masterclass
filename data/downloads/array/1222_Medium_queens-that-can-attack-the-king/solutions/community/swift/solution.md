# Simple and Beats 100%

**Author:** abuzeidIbrahim
**Votes:** 0
**Link:** [https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/4160583/](https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/4160583/)

---

# Intuition
to avoid the complexity of which queen can attack, we will draw the baord and make the king move till capture a queen.

# Approach
Repeat these two process
- King will move and stop when capture a queen, then add it and stop moving
- Reset the king position to inital and move in another direction 

# Complexity
- Time complexity:
O(n)/4

- Space complexity:
O(1)

# Code
```
class Solution {
    func queensAttacktheKing(_ queens: [[Int]], _ king: [Int]) -> [[Int]] {
       // draw the board, 1: queen, 0: empty, 2: visited
        var board:[[Int]] = Array(repeating: Array(repeating: 0, count: 8), count: 8)
        var res: [[Int]] = []
        for q in queens{
            board[q[0]][q[1]] = 1
        }
        board[king[0]][king[1]] = 2 
        
        func move(_ incY: Int,_ incX:Int ){
            var x = king[0]
            var y = king[1]
            while true {
                y += incY
                x += incX
                guard y < 8 , y >= 0, x < 8, x >= 0 , board[x][y] != 2 else {return}
                let isQ =  board[x][y] == 1
                board[x][y] = 2 //visited
                if isQ{// queen
                    res.append([x,y])
                    break
                }
                
            }
        }
        move(1,0)
        move(-1,0)
        move(0,1)
        move(0,-1)
        move(1,1)
        move(-1,-1)
        move(1,-1)
        move(-1,1)
        return res
    }
    
}
```