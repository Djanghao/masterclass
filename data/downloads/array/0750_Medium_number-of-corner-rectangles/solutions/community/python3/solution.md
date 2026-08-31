# [Python3] Find matching pairs between rows using list of sets representation

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-corner-rectangles/solutions/520715/](https://leetcode.com/problems/number-of-corner-rectangles/solutions/520715/)

---

Algorithm:
For a given row `i`, loop through rows `i+1` to `m-1` to find matching column pairs. Here, I convert `grid` to list of sets representation in which each set contains the columns for a given row whose value is 1. 

Implementation (692ms, 91.19%): 
```
class Solution:
    def countCornerRectangles(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        grid = [{i for i in range(n) if row[i]} for row in grid] #list of sets representation
        
        ans = 0
        for i in range(m):
            for j in range(i+1, m):
                ans += (lambda n: n*(n-1)//2)(len(grid[i] & grid[j]))
        return ans 
```

Analysis:
Time complexity `O(M^2 N)`
Space complexity `O(MN)` (for the list of sets representation)

Edited on 1/29/2021
```
class Solution:
    def countCornerRectangles(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0]) # dimensions 
        ans = 0
		seen = {}
        for i in range(m):
            for j in range(n): 
                if grid[i][j]: 
                    for jj in range(j): 
                        if grid[i][jj]: 
                            ans += seen.get((jj, j), 0)
                            seen[jj, j] = 1 + seen.get((jj, j), 0)
        return ans 
```