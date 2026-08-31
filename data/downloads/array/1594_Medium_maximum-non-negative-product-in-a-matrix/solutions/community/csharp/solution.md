# Max Non Negative Product: Efficient Dynamic Programming Algo

**Author:** madhusudanrathi99
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/4728514/](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/4728514/)

---

# Intuition
The intuition is to use dynamic programming to keep track of the maximum and minimum product path at each cell, as a negative number can become positive when multiplied by another negative number.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Initialize Variables**: 
Create a 3D `dp` array to store the maximum and minimum product path at each cell. Initialize `dp[i][j]` with `long.MinValue / 2` and `long.MaxValue / 2` to handle edge cases.
2. **Define Helper Function**: 
The `solver` function is a helper function that takes a grid and two indices `i` and `j`. It calculates the maximum and minimum product path at cell `(i, j)` by considering the paths from the cell above `(i - 1, j)` and the cell to the left `(i, j - 1)`.
3. **Iterate Over Grid**: 
In the `MaxProductPath` function, we iterate over each cell in the grid. For each cell, we call the `solver` function to calculate the maximum and minimum product path at that cell.
4. **Return Result**: 
After iterating over all cells in the grid, we return the maximum product path at the bottom-right cell `(m - 1, n - 1)`. If the maximum product path is negative, we return `-1`.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(M * N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(M*N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    int MOD = 1000000007;
    public long[] solver(int[][] grid, int i, int j, ref long[][][] dp) {
        if(i == 0 && j == 0)
            return dp[i][j] = [grid[0][0], grid[0][0]];
        if(i < 0 || j < 0)
            return new long[] {long.MinValue / 2, long.MaxValue / 2};
        if(dp[i][j][0] != long.MinValue / 2)
            return dp[i][j];
        long[] up = solver(grid, i - 1, j, ref dp);
        long[] left = solver(grid, i, j - 1, ref dp);
        if(grid[i][j] > 0)
            dp[i][j] = [grid[i][j] * Math.Max(up[0], left[0]), grid[i][j] * Math.Min(up[1], left[1])];
        else
            dp[i][j] = [grid[i][j] * Math.Min(up[1], left[1]), grid[i][j] * Math.Max(up[0], left[0])];
        return dp[i][j];
    }

    public int MaxProductPath(int[][] grid) {
        int m = grid.Length;
        int n = grid[0].Length;
        long[][][] dp = new long[m][][];
        for(int i = 0; i < m; i++) {
            dp[i] = new long[n][];
            for(int j = 0; j < n; j++) {
                dp[i][j] = new long[] {long.MinValue / 2, long.MaxValue / 2};
            }
        }
        long[] ans = solver(grid, m - 1, n - 1, ref dp);
        return ans[0] > -1 ? (int)(ans[0] % MOD) : -1;
    }
}
```