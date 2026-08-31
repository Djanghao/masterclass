# [PYTHON] | DP | BEATS 98% SPACE AND TIME | O(N*M**2) | SC O(N**2)

**Author:** satyampd5340
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-corner-rectangles/solutions/2241728/](https://leetcode.com/problems/number-of-corner-rectangles/solutions/2241728/)

---

```class Solution:
    def countCornerRectangles(self, grid: List[List[int]]) -> int:
        dp = [[0 for _ in range(len(grid[0]))] for _ in range(len(grid[0]))]
        ans = 0
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 1:
                    for k in range(j+1,len(grid[0])):
                        if grid[i][k] == 1:
                            ans += dp[j][k]
                            dp[j][k] = dp[j][k] + 1
        return ans