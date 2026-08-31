# [Python3] brute-force

**Author:** ye15
**Votes:** 27
**Link:** [https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/1299526/](https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/1299526/)

---


```
class Solution:
    def rotateGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        m, n = len(grid), len(grid[0]) # dimensions 
        
        for r in range(min(m, n)//2): 
            i = j = r
            vals = []
            for jj in range(j, n-j-1):     vals.append(grid[i][jj])
            for ii in range(i, m-i-1):     vals.append(grid[ii][n-j-1])
            for jj in range(n-j-1, j, -1): vals.append(grid[m-i-1][jj])
            for ii in range(m-i-1, i, -1): vals.append(grid[ii][j])
                
            kk = k % len(vals)
            vals = vals[kk:] + vals[:kk]
            
            x = 0  
            for jj in range(j, n-j-1):     grid[i][jj] = vals[x]; x += 1
            for ii in range(i, m-i-1):     grid[ii][n-j-1] = vals[x]; x += 1
            for jj in range(n-j-1, j, -1): grid[m-i-1][jj] = vals[x]; x += 1
            for ii in range(m-i-1, i, -1): grid[ii][j] = vals[x]; x += 1
        return grid
```