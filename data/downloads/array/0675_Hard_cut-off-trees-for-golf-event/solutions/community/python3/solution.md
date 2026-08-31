# [Python] BFS & PriorityQueue - w/ comments and prints for visualization

**Author:** Vikktour
**Votes:** 9
**Link:** [https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/1033258/](https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/1033258/)

---

## Approach
Have priority queue that stores (height,x,y) for each tree in order of min to max.
Use BFS to find the next available smallest height in priority queue.

## Complexity
Let m=len(forest), n=len(forest[0]), N=m*n

Time: O(N^2) - 692ms (45.50%)
- N^2: N for each BFS search between two elements. The priority queue can have N elements. In total, this is N^2.
- NlogN for building the priority queue, but it gets dominated by N^2.
 
Space: O(N) - 14.9MB (56.88%)
For storing elements in the priority queue.

## Code
```Python
from typing import List 
import heapq
import collections
import numpy as np #for printing
class Solution:
    def cutOffTree(self, forest: List[List[int]]) -> int:
        #print("forest at start: \
{}".format(np.array(forest)))
        m = len(forest)
        n = len(forest[0])
        
        #store all trees in priority queue in (height,x,y) format
        pq = []
        for x in range(m):
            for y in range(n):
                height = forest[x][y]
                if height > 1:
                    heapq.heappush(pq,(height,x,y))
        #print("heap: {}".format(pq))
        
        #takes in starting position and next tree position, returns min steps to get to that next tree position
        def bfs(x,y,nextX,nextY) -> int:
            queue = collections.deque([(x,y,0)])
            seen = {(x,y)}
            #print("starting at: ({},{})".format(x,y))
            #keep BFS searching until we find target tree or tried all paths
            while queue:
                x,y,steps = queue.popleft()

                if x == nextX and y == nextY:
                    #found the next tree, chop it down and return depth
                    forest[x][y] = 1
                    #print("ending at: ({},{}) after {} steps".format(x,y,steps))
                    return steps

                #append adjacent nodes (if they are a valid position i.e. height >= 1, within bounds of forest, and not already used)
                for dx,dy in [(-1,0),(0,1),(0,-1),(1,0)]:
                    adjX,adjY = x+dx, y+dy
                    if (0 <= adjX < m and 0 <= adjY < n) and (forest[adjX][adjY] >= 1) and ((adjX,adjY) not in seen):
                        # if (nextX,nextY) == (0,0):
                        #     #print("seen for reaching {},{}: {}".format(nextX,nextY,seen))
                        #     print("queue: {}".format(queue))
                        queue.append((adjX,adjY,steps+1))
                        seen.add((adjX,adjY))
                #print("seen: {}".format(seen))

            #no such path exists
            return -1
        
        #start from 0,0 and have next be the first smallest tree, and use BFS for the others
        x,y = 0,0
        steps = 0
        #while there are still trees to cut
        while pq:
            _,nextX,nextY = heapq.heappop(pq)
            
            #find the shortest path to the next tree
            shortestPath = bfs(x,y,nextX,nextY)
            if shortestPath == -1:
                #print("forest: \
{}".format(np.array(forest)))
                return -1
            steps += shortestPath
            #print("total steps taken: {}".format(steps))
            x,y = nextX,nextY

        #print("forest at end: \
{}".format(np.array(forest)))
        return steps
```