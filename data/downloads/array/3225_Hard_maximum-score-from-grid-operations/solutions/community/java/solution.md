# Clean Java Recursive DP

**Author:** kartikeysemwal
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-from-grid-operations/solutions/5512718/](https://leetcode.com/problems/maximum-score-from-grid-operations/solutions/5512718/)

---

The problem could only be understood by the testcases. The only intuition here is to take into consideration what height we have taken from last column and last to last column. They are named as last1 and last2.

Useful testcases:
[[0,0,0,0,0],[0,0,3,0,0],[0,1,0,0,0],[5,0,0,3,0],[0,0,0,0,2]]
Output: 11

[[0,1000000000],[0,1000000000]]
Output: 2000000000 (This one is good to understand the case III)

[[10,9,0,0,15],[7,1,0,8,0],[5,20,0,11,0],[0,0,0,1,2],[8,12,1,10,3]]
Output: 94

# Code
```
class Solution {

    Long dp[][][];

    long solve(int grid[][], int col, int last1, int last2)
    {
        int n = grid.length;

        if(col >= n)
        {
            return 0;
        }

        if(dp[col][last1][last2] != null)
        {
            return dp[col][last1][last2];
        }

        long fromLast2 = 0;

        for(int i=0; i<last2; i++)
        {
            fromLast2 = fromLast2 + grid[i][col];
        }

        // Case I

        // don't take anything from this column, just take contribution of last2

        long ans = fromLast2 + solve(grid, col + 1, 0, last1);

        long sum = 0;

        // Case II

        if(col + 1 < n)
        {
            // take from this column and block next column for taking it
            // also note here we are passing last2 as 0 because last1 will overlapped and exceed with last2
            for(int i=last1; i<n; i++)
            {
                sum = sum + grid[i][col];
                ans = Math.max(ans, sum + solve(grid, col + 1, i + 1, 0));
            }
        }

        // Case III

        // here mark the current columns as block by manipulating next last2
        // also take into consideration last2 which we got here
        for(int i=0; i<n; i++)
        {
            if(i < last2)
            {
                fromLast2 = fromLast2 - grid[i][col];
            }
            ans = Math.max(ans, fromLast2 + solve(grid, col + 1, 0, i + 1));
        }

        dp[col][last1][last2] = ans;

        return ans;
    }

    public long maximumScore(int[][] grid) {
        int n = grid.length;

        dp = new Long[n + 1][n + 1][n + 1];

        return solve(grid, 0, 0, 0);
    }
}
```