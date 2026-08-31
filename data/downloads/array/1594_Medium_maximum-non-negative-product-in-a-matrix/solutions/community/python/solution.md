# Python 3 | DP O(m*n) time, In place | Explanation

**Author:** idontknoooo
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/855377/](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/855377/)

---

### Explanation
- At each position `(i, j)`, maintain a tuple for `(small, large)`
	- small: smallest product up to this point
	- large: largest product up to this point
- Update each point from top to bottom, from left to right. Current `small` or `large` only depends on values on the left or above.
### Implementation
```
class Solution:
    def maxProductPath(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        grid[0][0] = grid[0][0], grid[0][0]                                      # (small, large) for starting point
        for j in range(1, n):
            grid[0][j] = grid[0][j-1][0]*grid[0][j], grid[0][j-1][1]*grid[0][j]  # special handling first row
        for i in range(1, m):
            grid[i][0] = grid[i-1][0][0]*grid[i][0], grid[i-1][0][1]*grid[i][0]  # special handling first col
        for i in range(1, m):
            for j in range(1, n):
                nums = [grid[i-1][j][0]*grid[i][j], grid[i][j-1][0]*grid[i][j], grid[i-1][j][1]*grid[i][j], grid[i][j-1][1]*grid[i][j]]
                small, large = min(nums), max(nums)
                grid[i][j] = (small, large)                                      # update all other points
        return (grid[-1][-1][1] % 1000000007) if grid[-1][-1][1] >= 0 else -1
```