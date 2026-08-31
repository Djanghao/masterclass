# Python 3 | Prefix-sum, DP, O(N^3) | Explanation

**Author:** idontknoooo
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-1-bordered-square/solutions/1435087/](https://leetcode.com/problems/largest-1-bordered-square/solutions/1435087/)

---

- Implementation as __*hint*__ section suggested
- See below comments for more detail
```
class Solution:
    def largest1BorderedSquare(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        dp = [[(0, 0)] * (n) for _ in range((m))] 
        for i in range(m):                      # calculate prefix-sum as `hint` section suggested
            for j in range(n):
                if not grid[i][j]:
                    continue
                dp[i][j] = (dp[i][j][0] + dp[i-1][j][0] + 1, dp[i][j][1] + dp[i][j-1][1] + 1)
        for win in range(min(m, n)-1, -1, -1):  # for each window size
            for i in range(m-win):              # for each x-axis
                for j in range(n-win):          # for each y-axis
                    if not grid[i][j]: continue # determine whether square of (i, j), (i+win, j+win) is 1-boarded
                    x1, y1 = dp[i+win][j+win]   # bottom-right corner
                    x2, y2 = dp[i][j+win]       # upper-right corner
                    x3, y3 = dp[i+win][j]       # bottom-left corner
                    x4, y4 = dp[i][j]           # upper-left corner
                    if y1 - y3 == x1 - x2 == y2 - y4 == x3 - x4 == win:
                        return (win+1) * (win+1)
        return 0
```