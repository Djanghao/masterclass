# Python 3   ||| 6 lines, sort    ||   T/S: 99% / 88%

**Author:** Spaulding_
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/3513787/](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/3513787/)

---

```
class Solution:
    def minScore(self, grid: List[List[int]]) -> List[List[int]]:

        m, n = len(grid), len(grid[0])
        row, col = [0]*m,[0]*n

        arr = sorted(product(range(m),range(n)), key = lambda x : grid[x[0]][x[1]])
        
        for i,j in arr:
            grid[i][j] = row[i] = col[j] = max(row[i],col[j])+1
        
        return  grid
```
[https://leetcode.com/problems/minimize-maximum-value-in-a-grid/submissions/1287482230/   ](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/submissions/1287482230/   )  

I could be wrong, but I think that time complexity is *O*(*MN*log*MN*) and space complexity is *O*(*MN*) for each.
