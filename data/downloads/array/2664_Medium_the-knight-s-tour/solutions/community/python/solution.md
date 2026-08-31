# [Python3] Backtracking with DFS - Easy

**Author:** inosigu
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-knights-tour/solutions/4694958/](https://leetcode.com/problems/the-knights-tour/solutions/4694958/)

---

```
class Solution:
    def tourOfKnight(self, leny: int, lenx: int, starty: int, startx: int) -> List[List[int]]:
        movements = [(2,1),(1,2),(-2,1),(2,-1),(-1,2),(1,-2),(-1,-2),(-2,-1)]
        self.finalstep = leny*lenx
        
        board = [ [-1] * lenx for _ in range(leny) ]
        board[starty][startx] = 0
    

        def backtracking(y, x, step):
            if self.finalstep == step:
                return True
            for y1, x1 in movements:
                y2, x2 = y+y1, x+x1
                if -1 < y2 < leny and -1 < x2 < lenx and board[y2][x2] == -1:
                    board[y2][x2] = step
                    if backtracking(y2, x2, step+1):
                        return True
                    board[y2][x2] = -1
                    
        backtracking(starty, startx, 1)    
        return board
```