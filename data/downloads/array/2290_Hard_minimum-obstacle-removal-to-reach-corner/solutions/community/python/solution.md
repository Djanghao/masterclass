# [Python] 0-1 BFS

**Author:** Doskarin
**Votes:** 27
**Link:** [https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/2086338/](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/2086338/)

---

Classic 0-1 BFS implementation with a little caveat : we need to process elements in the queue with less obstacles first. This will make sure our destination will have the smallest obstacles removed.

Time Complexity : ```O(R * C)``` - each cell in the grid is processed once as we traverse
Space Complexity : ```O(R * C)``` - we need 2D helper array "distance" in order to record shortest obstacles removed for each cell

Code
```
class Solution(object):
    def minimumObstacles(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        R, C = len(grid), len(grid[0])
        
        d = [(1,0),(-1,0),(0,1),(0,-1)]
        
        distances = [[-1] * C for _ in range(R)]
        
        q = deque([(0, 0, 0)])
        
        while q:
            for _ in range(len(q)):
                dist, r, c = q.popleft()
                
                for dr, dc in d:
                    rr, cc = r + dr, c + dc
					#Check if the cell is inbounds and has not been visited before
                    if 0 <= rr < R and 0 <= cc < C and distances[rr][cc] == -1:
                        
                        #If the cell is an obstacle - assign current distance + 1 to its value
						if grid[rr][cc] == 1:
                            distances[rr][cc] = dist + 1
                            q.append((dist + 1, rr, cc))
                            
                        else:
                            #Make sure we process cells with less obstacles first hence appendleft
                            distances[rr][cc] = dist
                            q.appendleft((dist, rr, cc))
                            
        return distances[R - 1][C - 1]

```