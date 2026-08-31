# Simple Python Code using BFS and HashSet with Explanation

**Author:** will_wang
**Votes:** 28
**Link:** [https://leetcode.com/problems/number-of-distinct-islands/solutions/108511/](https://leetcode.com/problems/number-of-distinct-islands/solutions/108511/)

---

  The test case:
  
   11000
   10000
   00110
   00100


The first island:
11
1
`[(0,0), (0,1), (1,0)] - (0,0) = [(0,0), (0,1), (1,0)] `

islands = set( '[(0,0), (0,1), (1,0)] ' )

The second island:(the same one)
`[(2,2), (2,3), (3,2)] - (2,2) = [(0,0), (0,1), (1,0)] `
`str(island) ` is already in the islands(hashSet).

```
# Time: O(m*n) 
# Space: O(m*n)
# 694. Number of Distinct Islands 

class Solution(object):
    def numDistinctIslands(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        islands = set()  
        
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                island = []
                front = [(i,j)]
                
                while front:
                    nxt = []
                    for x,y in front:
                        if 0 <= x < len(grid) and 0 <= y < len(grid[x]) and grid[x][y] == 1:
                            grid[x][y] = 0
                            island.append((x-i,y-j))  # minus the current (i,j) in the big for loop 
                            for m,n in (x+1, y), (x-1,y), (x, y+1), (x, y-1):
                                nxt.append((m,n))
                    front = nxt 
                
                if island and str(island) not in islands:
                    islands.add(str(island))
                    
        return len(islands)
```