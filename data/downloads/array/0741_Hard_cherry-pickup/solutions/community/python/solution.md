# Clean O(N^3) Python DP with Memo Beats Space 100%

**Author:** raunaqness
**Votes:** 11
**Link:** [https://leetcode.com/problems/cherry-pickup/solutions/487522/](https://leetcode.com/problems/cherry-pickup/solutions/487522/)

---

```
class Solution(object):
    
    def dfs(self, grid, m, n, x1, y1, x2, y2):

        # check if out of bounds or -1
        if (x1 >= m) or (x2 >= m) or (y1 >= n) or (y2 >= n) or \\
            grid[x1][y1] == -1 or grid[x2][y2] == -1:
            return float('-inf')

        if (x1, y1, x2) not in self.memo:

            cherries = 0

            if grid[x1][y1] == 1:
                cherries += 1

            if grid[x2][y2] == 1 and x1 != x2:
                cherries += 1

            if x1 == m-1 and y1 == n-1:
                return cherries

            cherries += max(
                self.dfs(grid, m, n, x1 + 1, y1, x2 + 1, y2),
                self.dfs(grid, m, n, x1 + 1, y1, x2, y2 + 1),
                self.dfs(grid, m, n, x1, y1 + 1, x2 + 1, y2),
                self.dfs(grid, m, n, x1, y1 + 1, x2, y2 + 1),
            )

            self.memo[(x1, y1, x2)] = cherries

        return self.memo[(x1, y1, x2)]
    
    def cherryPickup(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        
        m = len(grid)
        n = len(grid[0])

        self.cherries = 0
        self.memo = {}

        return max(0, self.dfs(grid, m, n, 0, 0, 0, 0))
        
```
