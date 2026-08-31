# Python - Straightforward and Clean with Explanation

**Author:** jkp5380
**Votes:** 42
**Link:** [https://leetcode.com/problems/candy-crush/solutions/1028524/](https://leetcode.com/problems/candy-crush/solutions/1028524/)

---

Don't be intimidated by how long or ugly the code looks. Sometimes I fall into that trap. It's simpler than it seems.
Also, I would love feedback if this is helpful, or if there are any mistakes!

A key insight to the problem is to know that in order to make crushing the candies an easier process, you should store the locations of the board where a candy can be crushed in a separate data structure. 

We will use a set called "crushable" and store coordinates of the board where a candy may be crushed


5 Main Steps.

1. Mark where the candies can be crushed horizontally
	- Loop through the board and check 3 spots at a time to see if there is the same character and that character isn't 0
2. Mark where the candies can be crushed vertically
   - Same thing, but vertically
3. Crush the candies
   - Go through the set of crushable locations, and edit the original board
4. Shift candies down if there are zeroes below them. 
   - Pay attention to the columns. We will start from the bottom of the board, and work our way up, shifting the candies that were not crushed into their "fallen" position. 
5. Find out where to determine whether or not a board's candies can be crushed anymore
   - If we loop through the entire board, and no candy was crushed, then we are finished. 

Time: O(m * n) where m = rows and n = cols. Or you could say O(n) where n = every element in the board
	- We must loop through the entire board no matter what

Space: O(n) where n is the total number of elements in the board
	- In the worst case scenario, we store the locations of every spot on the board in the crushable set
```
class Solution:
    def candyCrush(self, board: List[List[int]]) -> List[List[int]]:
        m,n = len(board), len(board[0])
        stable = False
        while True:
            stable = True
            crushable = set()
            # 1. check for horizontal crushables 
            for x in range(m):
                for y in range(n-2):
                    if board[x][y] == board[x][y+1] == board[x][y+2] != 0:
                        stable = False
                        crushable.update([(x,y),(x,y+1),(x,y+2)])
                        
            # 2. check for vertical crushables
            for x in range(m-2):
                for y in range(n):
                    if board[x][y] == board[x+1][y] == board[x+2][y] != 0:
                        stable = False
                        crushable.update([(x,y),(x+1,y),(x+2,y)])
                
            # 5. if no candies were crushed, we're done
            if stable:
                return board
                
            # 3. crush the candies
            for x,y in crushable:
                board[x][y] = 0
            
            # 4. let the candies "fall"
            for y in range(n):
                offset = 0
                for x in range(m-1, -1, -1): # loop through column backward
                    k = x + offset
                    if (x,y) in crushable: # this will help us put items at bottom of the board
                        offset += 1
                    else:
                        board[k][y] = board[x][y] # notice the use of k
                # now that all items have been copied to their right spots, place zero's appropriately at the top of the board
                for x in range(offset): 
                    board[x][y] = 0

```