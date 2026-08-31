# DP

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/6114479/](https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/6114479/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int MaxScore(IList<IList<int>> grid) {
        int rows = grid.Count, cols = grid[0].Count;
        if (rows == 0 || cols == 0)
            return 0;
        int[,] dp = new int[rows, cols];
        int res = int.MinValue;
        dp[0, 0] = grid[0][0];

        for(int j = 1; j < cols; j++)
        {
            res = Math.Max(res, grid[0][j] - dp[0,j-1]);
            dp[0,j] = Math.Min(grid[0][j], dp[0,j-1]);
        }

        for(int i = 1; i < rows; i++)
        {
            res = Math.Max(res, grid[i][0] - dp[i-1, 0]);
            dp[i, 0] = Math.Min(grid[i][0], dp[i-1, 0]);
        }

        for(int i = 1; i < rows; i++)
        for(int j = 1; j < cols; j++)
        {
            int pre = Math.Min(dp[i-1, j-1], Math.Min(dp[i-1, j], dp[i, j-1]));
            res = Math.Max(grid[i][j]-pre, res);
            dp[i,j] = Math.Min(pre, grid[i][j]);
        }

        return res;
    }
}
```