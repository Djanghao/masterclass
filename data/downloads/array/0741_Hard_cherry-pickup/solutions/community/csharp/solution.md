# Beats 90%

**Author:** user7611s
**Votes:** 0
**Link:** [https://leetcode.com/problems/cherry-pickup/solutions/5185266/](https://leetcode.com/problems/cherry-pickup/solutions/5185266/)

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
    public int CherryPickup(int[][] grid) {
        int[,,] dp = new int[grid.Length,grid[0].Length,grid.Length];
        int result =  solve(0,0,0,grid,dp);
         
        return Math.Max(result,0);
    }
    public int solve(int r1,int c1, int r2,int[][] grid,int[,,] dp)
    {
        int c2 = (r1 + c1) - r2;

        if(r1>= grid.Length || r2 >= grid.Length || c1 >= grid[0].Length || c2 >= grid[0].Length || grid[r1][c1] == -1 || grid[r2][c2] == -1)
        {
            return int.MinValue;
        }
        if(r1 == grid.Length-1 && c1 == grid[0].Length -1)
        {
            return grid[r1][c1];
        }
        if(dp[r1,c1,r2] != 0)
        {
            return dp[r1,c1,r2];
        }

        int cherries = 0;
        if(r1 == r2 && c1 == c2)
        {
            cherries = grid[r1][c1];
        }
        else
        {
            cherries = grid[r1][c1] + grid[r2][c2];
        }

// now try every possible movement
        int f1 = solve(r1,c1 +1,r2,grid,dp); //h h both horizontel
        int f2 = solve(r1 +1,c1,r2+1,grid,dp); // d d both vertical
        int f3 = solve(r1+1,c1,r2,grid,dp); // first one down and second horizontal
        int f4 = solve(r1,c1+1,r2+1,grid,dp); // first one horizontal and second vertical

        cherries += Math.Max(f1,Math.Max(f2,Math.Max(f3,f4)));
        dp[r1,c1,r2] = cherries;
        return dp[r1,c1,r2];

    }
}
```