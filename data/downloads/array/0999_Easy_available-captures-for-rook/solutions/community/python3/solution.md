# Python 3. Not the shortest but Neat and Easy to Understand

**Author:** JummyEgg
**Votes:** 11
**Link:** [https://leetcode.com/problems/available-captures-for-rook/solutions/354637/](https://leetcode.com/problems/available-captures-for-rook/solutions/354637/)

---

The idea is to find the Rook location and then start looking at 4 directions to find nearest piece. Check if the nearest piece is friend or foe using `isupper()`, `islower()`. 
Runtime varies from 48 ms (14%) to 32 ms (96%) so i guess it's good enough. Anyways, the most important thing is it's easy to understand
```python
class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
        
        def check_direction(R,C,direction):
            if direction=="right":
                for col in range(C+1,8): # increasing col 
                    if board[R][col].islower():return 1
                    if board[R][col].isupper():return 0
            if direction=="left":
                for col in range(C-1,-1,-1): # decreasing col 
                    if board[R][col].islower():return 1
                    if board[R][col].isupper():return 0
            if direction=="down":
                for row in range(R+1,8): # increasing row
                    if board[row][C].islower():return 1
                    if board[row][C].isupper():return 0
            if direction=="up": 
                for row in range(R-1,-1,-1): # decreasing col 
                    if board[row][C].islower():return 1
                    if board[row][C].isupper():return 0
            return 0 # we reach the edge (nothing was found)
                    
        for row in range(8):
            for col in range(8):
                if board[row][col]=="R":
					# sum all directions up
                    return sum([check_direction(row,col,"right"),
                                check_direction(row,col,"left"),
                                check_direction(row,col,"up"),
                                check_direction(row,col,"down")])
```