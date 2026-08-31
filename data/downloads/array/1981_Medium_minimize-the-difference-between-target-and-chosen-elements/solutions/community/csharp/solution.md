# Dp with Memoization

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/5625282/](https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/5625282/)

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
    public int MinimizeTheDifference(int[][] mat, int target) {
        int r = mat.Length;
        int c = mat[0].Length;
        int[,] dp = new int[r+1, 5000];
        for(int i=0; i<=r; i++)
        {
            for(int j=0; j<5000; j++)
            {
                dp[i,j] = -1;
            }
        }
        return Min(mat, 0, 0, r, c, target,dp);
    }

    private int Min(int[][] mat, int i, int sum, int r, int c, int target, int[,] dp)
    {
        if (i == r)
        {
            return Math.Abs(sum-target);
        }
        int v = Int32.MaxValue;
        if (dp[i,sum] != -1)
        {
            return dp[i,sum];
        }
        for(int k=0; k<c; k++)
        {
            int x = Min(mat, i+1, sum+mat[i][k], r, c, target, dp);
            v = Math.Min(v, x);
        }
        dp[i,sum] = v;
        return v;
    }
}
```