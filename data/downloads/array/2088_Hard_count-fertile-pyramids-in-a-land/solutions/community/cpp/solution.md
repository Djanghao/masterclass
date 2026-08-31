# Two DPs

**Author:** abhimahalunge01
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/4110518/](https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/4110518/)

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
class Solution {
public:
    int solve(vector<vector<int>>& grid,int r,int c, vector<vector<int>>&dp){
      if(grid[r][c]==0){
          return dp[r][c]=0;
      }
      int m = grid.size();
      int n =grid[0].size();
      if(r==m-1){
          return 0;
      }
      if(dp[r][c]!=-1){
          return dp[r][c];
      }  
      if(c-1>=0 && c+1<n && r+1<m){
        if(grid[r+1][c-1] && grid[r+1][c] && grid[r+1][c+1] ){
            return dp[r][c] =1 + min(solve(grid,r+1,c-1,dp) ,min( solve(grid ,r+1,c,dp) , solve(grid,r+1,c+1,dp)));
        }

      }
      return dp[r][c]=0;

    }
    int countPyramids(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        vector<vector<int>>dp(m,vector<int>(n,-1));
        int sum=0;
        for(int i =0;i<m;i++){
            for(int j =0;j<n;j++){
                dp[i][j] = solve(grid,i,j,dp);
                cout<<dp[i][j]<<endl;
                sum+=dp[i][j];
            }
        }
          vector<vector<int>>dp2(m,vector<int>(n,-1));
           vector<vector<int>>grid2(m,vector<int>(n,0));
        for(int i=m-1;i>=0;i--){
            for(int j=0;j<n;j++){
                grid2[m-i-1][j] = grid[i][j];
            }
        }
          for(int i =0;i<m;i++){
            for(int j =0;j<n;j++){
                dp2[i][j] = solve(grid2,i,j,dp2);
                // cout<<dp[i][j]<<endl;
                sum+=dp2[i][j];
            }
        }
        return sum;
    }
};
```