# [Python] Very Simple Solution with Explanation, No space used

**Author:** 101leetcode
**Votes:** 36
**Link:** [https://leetcode.com/problems/game-of-life/solutions/696582/](https://leetcode.com/problems/game-of-life/solutions/696582/)

---

```
class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        ## RC ##
        ## APPRAOCH : IN-PLACE MANIPULATION ##
        #  when the value needs to be updated, we donot just change  0 to 1 / 1 to 0 but we do in increments and decrements of 2. (table explains)        
        ##   previous value state change  current state   current value
        ##   0              no change     dead            0
        ##   1              no change     live            1
        ##   0              changed (+2)  live            2
        ##   1              changed (-2)  dead            -1
        
		## TIME COMPLEXITY : O(MxN) ##
		## SPACE COMPLEXITY : O(1) ##

        directions = [(1,0), (1,-1), (0,-1), (-1,-1), (-1,0), (-1,1), (0,1), (1,1)]
        
        for i in range(len(board)):
            for j in range(len(board[0])):
                live = 0                # live neighbors count
                for x, y in directions: # check and count neighbors in all directions
                    if ( i + x < len(board) and i + x >= 0 ) and ( j + y < len(board[0]) and j + y >=0 ) and abs(board[i + x][j + y]) == 1:
                        live += 1
                if board[i][j] == 1 and (live < 2 or live > 3):     # Rule 1 or Rule 3
                    board[i][j] = -1
                if board[i][j] == 0 and live == 3:                  # Rule 4
                    board[i][j] = 2
        for i in range(len(board)):
            for j in range(len(board[0])):
                board[i][j] = 1 if(board[i][j] > 0) else 0
        return board
```