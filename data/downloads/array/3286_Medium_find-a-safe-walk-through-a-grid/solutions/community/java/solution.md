# Simple DP || Traditional Method✅✅

**Author:** Harshsharma08
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5786799/](https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5786799/)

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
```java []
class Solution {
    boolean[][] vis;
    int[][][] dp;
    boolean check(List<List<Integer>> grid, int row, int col, int hlt) {
        int m = grid.size(); int n = grid.get(0).size();
        if (row >= m || col >= n || row<0 || col<0 || hlt<=0 || vis[row][col]) return false;
        if (row==m-1 && col==n-1) {
            return hlt>grid.get(row).get(col);
        }
        if (dp[row][col][hlt]!=-1) return dp[row][col][hlt]==1;
        vis[row][col] = true;
        boolean up = check(grid,row-1,col,hlt-grid.get(row).get(col));
        boolean dw = check(grid,row+1,col,hlt-grid.get(row).get(col));
        boolean lf = check(grid,row,col-1,hlt-grid.get(row).get(col));
        boolean rf = check(grid,row,col+1,hlt-grid.get(row).get(col));
        vis[row][col] = false;
        boolean result = up || dw || lf || rf;
        if(result){
            dp[row][col][hlt]=1;
        }
        else dp[row][col][hlt]=0;
        return result;
    }
    public boolean findSafeWalk(List<List<Integer>> grid, int health) {
        int m = grid.size();
        int n = grid.get(0).size();
        dp = new int[m][n][health+1];
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                Arrays.fill(dp[i][j],-1);
            }
        }
        vis = new boolean[m][n];
        return check(grid, 0, 0, health);
    }
}
```