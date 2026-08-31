# Easy Java Solution

**Author:** Sumitk7970
**Votes:** 16
**Link:** [https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/2678881/](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/2678881/)

---

```
class Solution {
    int[][][] dp;
    int mod = 1_000_000_007;
    
    public int numberOfPaths(int[][] grid, int k) {
        int rows = grid.length;
        int cols = grid[0].length;
        dp = new int[rows][cols][k];
        for(int[][] a : dp) {
            for(int[] b : a) {
                Arrays.fill(b, -1);
            }
        }
        
        return helper(grid, 0, 0, 0, k);
    }
    
    int helper(int[][] grid, int r, int c, int sum, int k) {
        if(r < 0 || r == grid.length || c < 0 || c == grid[0].length) {
            return 0;
        }
        
        sum += grid[r][c];
        if(r == grid.length-1 && c == grid[0].length-1) {
            return sum%k==0 ? 1 : 0;
        }
        
        if(dp[r][c][sum%k] != -1) {
            return dp[r][c][sum%k];
        }
        
        dp[r][c][sum%k] = (helper(grid, r+1, c, sum, k) + helper(grid, r, c+1, sum, k)) % mod;
        return dp[r][c][sum%k];
    }
}