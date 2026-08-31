# Easy + Clean Python beats 90% with Comments!

**Author:** Pythagoras_the_3rd
**Votes:** 38
**Link:** [https://leetcode.com/problems/shortest-path-to-get-food/solutions/1051229/](https://leetcode.com/problems/shortest-path-to-get-food/solutions/1051229/)

---

```
class Solution:
    def getFood(self, grid: List[List[str]]) -> int:
        
        rows = len(grid)
        cols = len(grid[0])
        # Our four permitted directions.
        dirs = [(1,0),(-1,0),(0,1),(0,-1)]
        
        q = collections.deque()
        # Find the starting position and add to the queue.
        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == '*':
                    q.append((row, col, 0))
                    break
        
        while q:
            r, c, steps = q.popleft()
            for y, x in dirs:
                nr = y + r
                nc = x + c
				# Ensure that the new row and col is in the grid and an unvisited or food node.
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] in ('#','O'):
				    # We found food, we're done.
                    if grid[nr][nc] == '#':
                        return steps + 1
					# Mark as visited so we don't visit again.
                    grid[nr][nc] = '|'
                    q.append((nr, nc, steps + 1))
        # We ran out of locations and found no food.
        return -1
```

OR more simply:
```
class Solution:
    def getFood(self, grid: List[List[str]]) -> int:
        
        rows = len(grid)
        cols = len(grid[0])
        
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        
        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == '*':
                    q = collections.deque([])
                    q.append((row, col, 0))
                    grid[row][col] = 0
                    while q:
                        r, c, d = q.popleft()
                        for y, x in directions:
                            nr = r + y
                            nc = c + x
                            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] in ('O', '#'):
                                if grid[nr][nc] == '#':
                                    return d + 1
                                q.append((nr, nc, d+1))
                                grid[nr][nc] = 0
        return -1
```