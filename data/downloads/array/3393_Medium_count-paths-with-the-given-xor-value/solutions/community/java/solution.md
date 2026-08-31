# Java DP solution : beginner's solution

**Author:** Rohit-Sharma-45
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-paths-with-the-given-xor-value/solutions/6171214/](https://leetcode.com/problems/count-paths-with-the-given-xor-value/solutions/6171214/)

---

```
class Solution {
    public int mod = (int)(1e9 + 7);
    public int m = -1; 
    public int n = -1;
    public int dp[][][]; 
    public int countPathsWithXorValue(int[][] grid, int k) {
        m = grid.length; 
        n = grid[0].length; 
        dp = new int[m][n][16];
        for(int a[][] : dp){
            for(int b[] : a){
                Arrays.fill(b, -1);
            }
        }
        return dfs(grid, 0, k, 0, 0);
    }
    
    public int dfs(int grid[][], int xor_val, int k, int i, int j){
        if(i < 0 || j < 0 || j >= n || i >= m){
            return 0;
        }
        xor_val ^= grid[i][j];
        
        if(dp[i][j][xor_val] != -1)   return dp[i][j][xor_val];
        if(i == m-1 && j == n-1 && xor_val == k)    return 1;
        int down = dfs(grid, xor_val, k, i+1, j);
        int right = dfs(grid, xor_val, k, i, j+1);
        
        return dp[i][j][xor_val] = (down + right) % mod;
    }
}
```