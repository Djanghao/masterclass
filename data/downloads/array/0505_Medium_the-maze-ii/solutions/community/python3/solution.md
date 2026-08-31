# [Python] Simple BFS Solution with comments

**Author:** 101leetcode
**Votes:** 14
**Link:** [https://leetcode.com/problems/the-maze-ii/solutions/708805/](https://leetcode.com/problems/the-maze-ii/solutions/708805/)

---

```
from collections import deque
class Solution:
    def shortestDistance(self, maze: List[List[int]], start: List[int], destination: List[int]) -> int:
        ## RC ##
		## APPROACH : DFS ##
		## Similar to Leetcode 490 The Maze, 499 The Maze III ##
        
        if start == destination:
            return 0
        
        # path, distance
        queue = deque( [tuple( start + [0] )] )
        
        # start position marked visited
        visited = { tuple(start) : 0 }
        res = []
        
        while queue:
            
            prev_x, prev_y, prev_distance = queue.popleft()
            
            for dx, dy in [(1,0),(-1,0),(0,1),(0,-1)]:
                
                # to make sure, we use the same values from queue, for every iteration (if you use same they will change in for loop)
                x, y, dist = prev_x, prev_y, prev_distance
                
                while 0 <= x+dx < len(maze) and 0 <= y+dy < len(maze[0]) and maze[x+dx][y+dy] == 0:
                    dist += 1
                    x += dx
                    y += dy
                    
                
                if [x, y] == destination:
                        res.append(dist)
                        continue
                        
                # WATCH OUT ==> the there is better way to visit the previously visited position, mark the distance
                if ((x, y) in visited and visited[(x, y)] > dist) or ((x, y) not in visited):
                    visited[(x, y)] = dist
                    queue.append((x, y, dist))

        return min(res) if res else -1
                
```