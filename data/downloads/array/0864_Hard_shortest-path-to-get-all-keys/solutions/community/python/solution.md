# python bfs w/comment

**Author:** leovam
**Votes:** 29
**Link:** [https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/1055450/](https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/1055450/)

---

```py
'''
w: minimum steps  --> BFS
h: we have additional interesting conditions here 
    we can go to A if we have key a
    then we might need to store more information than just (x,y) in regular graph 
    traversal problem
    
note that for each cell, we can travese more than once since in some cases we need 
to grab the key and then return to a previous place and start searching again. so we should not add the position when we append the position to the queue
'''

import collections

class Solution:
    def shortestPathAllKeys(self, grid: List[str]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        #1 . find the start point
        #2. find how many key we need to collection
        cnt = 0
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '@':
                    start = [r,c]
                if grid[r][c] in 'abcdef':
                    cnt += 1
        
        
        deque = collections.deque([(start[0], start[1], '')])
        seen = set()
        directions = [(0,1), (0,-1),(-1,0),(1,0)]
        steps = 0
        #print(cnt)
        
        while deque:
            size = len(deque)
            for _ in range(size):
                x, y, key = deque.popleft()
                if (x, y, key) in seen:
                    continue
                if len(key) == cnt:
                    return steps
                
                seen.add((x, y, key))

                for dx, dy in directions:
                    nx = x+dx
                    ny = y+dy
                    if 0 <= nx < rows and 0 <= ny < cols and grid[nx][ny] !='#': # note that in the following code, we did not
                                                                                 # add the position to seen when we append it to the queue
                        cell = grid[nx][ny]
                        if cell in 'ABCDEF' and cell.lower() in key:
                            deque.append((nx, ny, key))
                        elif cell in '.@':
                            deque.append((nx, ny, key))
                        elif cell in "abcdef":
                            if cell not in key:
                                deque.append((nx,ny, key+cell))
                            else:
                                deque.append((nx,ny, key))
            
            steps += 1

        return -1
```