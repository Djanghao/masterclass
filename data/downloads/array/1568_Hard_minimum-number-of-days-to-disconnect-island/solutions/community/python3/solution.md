# Python [you need at most 2 days]

**Author:** GSAN
**Votes:** 195
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/819303/](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/819303/)

---

The tricky part of this question is to notice that, you can disconnect any given island formation in at most 2 days (and you need to convince yourself that this is true).

**Day 0:** Check islands at day 0, return 0 if you have less than or greater than one island.

**Day 1**: If not, try to add water at any given location, and check if that gives you a valid island formation.

**Day 2:** Else, just return 2!

```
import copy
class Solution:
	#this is just a helper function for the no_islands function below
    def no_islands_recur(self, grid, i, j, m, n):
        if grid[i][j]==0:
            return
        grid[i][j]=0
        if i-1>=0:
            self.no_islands_recur(grid, i-1, j, m, n)
        if i+1<m:
            self.no_islands_recur(grid, i+1, j, m, n)
        if j-1>=0:
            self.no_islands_recur(grid, i, j-1, m, n)
        if j+1<n:
            self.no_islands_recur(grid, i, j+1, m, n)
    
	
    #find how many islands the given grid has        
    def no_islands(self, grid):
        ret = 0
        m, n = len(grid), len(grid[0])
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    ret += 1
                    self.no_islands_recur(grid, i, j, m, n)
        return ret
    
    
    def minDays(self, grid: List[List[int]]) -> int:
        #if we have 0 or more than 1 islands at day 0, return day 0
        time = 0
        grid_copy = copy.deepcopy(grid)
        n = self.no_islands(grid_copy)
        if n!=1:
            return time
        
		#try to remove any land any see if it works
        time = 1
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                grid_copy = copy.deepcopy(grid)
                grid_copy[i][j] = 0
                n = self.no_islands(grid_copy)
                if n!=1:
                    return time
        
		#well then just return 2
        time = 2
        return time
```

