# Standard Memo template - DP solution

**Author:** arshdeeps86
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5105545/](https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5105545/)

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
```
public class Solution {
    int[][] counts;
    int[][] dp;
    public int MinimumOperations(int[][] grid) {
        counts = new int[grid[0].Length][];
        dp = new int[grid[0].Length][];
        for (int i = 0; i < counts.Length; ++i)
        {
            counts[i] = new int[10];
            dp[i] = new int[11];
            Array.Fill(dp[i], -1);
        }

        for (int i = 0; i < grid[0].Length; ++i)
        {
            for (int j = 0; j < grid.Length; ++j)
            {
                counts[i][grid[j][i]]++;
            }
        }
        return Solve(grid, 0, -1);
    }

    int Solve(int[][] grid, int col, int prev)
    {
        if (grid[0].Length == col) return 0;

        if (dp[col][prev + 1] != -1)
        {
            return dp[col][prev + 1];
        }
        int res = int.MaxValue;
        for (int target = 0; target <= 9; ++target)
        {
            if (target == prev) continue;

            res = Math.Min(res, Solve(grid, col + 1, target) + grid.Length - counts[col][target]);
        }
        return dp[col][prev + 1] = res;

    }
}
```