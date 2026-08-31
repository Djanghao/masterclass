# Python solution - Easy, fast, with comments

**Author:** vvenzin
**Votes:** 22
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/304990/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/304990/)

---

```python
class Solution:
    def maxIncreaseKeepingSkyline(self, grid: List[List[int]]) -> int:
        
        N = len(grid)       # Height
        M = len(grid[0])    # Width
        
        # Transpose grid: Interchange rows and columns
        grid_t = zip(*grid)
                
        # Vertical and horizontal skylines
        sk_v = [max(row) for row in grid]     # As seen from left/right
        sk_h = [max(row) for row in grid_t]   # As seen from top/bottom
        
        res = 0
        for i in range(N):      # Rows of original grid
            for j in range(M):  # Columns of original grid
                # The new building cannot be higher than either skylines
                diff = min(sk_h[j], sk_v[i]) - grid[i][j]
                res += diff
        return res
```