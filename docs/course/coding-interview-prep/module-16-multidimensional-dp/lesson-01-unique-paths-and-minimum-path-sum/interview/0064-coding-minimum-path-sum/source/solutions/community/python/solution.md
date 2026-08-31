# Simple python dp 70ms

**Author:** luanmaova
**Votes:** 199
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/23466/](https://leetcode.com/problems/minimum-path-sum/solutions/23466/)

---



    def minPathSum(self, grid):
        m = len(grid)
        n = len(grid[0])
        for i in range(1, n):
            grid[0][i] += grid[0][i-1]
        for i in range(1, m):
            grid[i][0] += grid[i-1][0]
        for i in range(1, m):
            for j in range(1, n):
                grid[i][j] += min(grid[i-1][j], grid[i][j-1])
        return grid[-1][-1]