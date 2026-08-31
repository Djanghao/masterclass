# [sequential thought][recursion][memo][dp][faster][easy understanding]

**Author:** rajat_gupta_
**Votes:** 68
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/856314/](https://leetcode.com/problems/minimum-path-sum/solutions/856314/)

---

```
// sequential thought process for this problem

//The path to reach (m, n) must be through one of the 2 cells:(m-1, n) or (m, n-1). So minimum cost to reach (m, n) can be written as \u201Cminimum of the 2 cells plus cost[m][n]\u201D.
//minCost(m, n) =min(minCost(m-1, n), minCost(m, n-1) )+ cost[m][n]

//1.Recursion(TLE) [time complexity of the code is exponential]

class Solution {
public:
    int minCost(vector<vector<int>> &cost,int m, int n) { 
      if (n <0 || m <0) 
         return INT_MAX; 
      else if(m==0 && n==0) 
         return cost[m][n]; 
        
      return cost[m][n]+min(minCost(cost,m-1,n),minCost(cost,m,n-1)); 
    } 
    
    int minPathSum(vector<vector<int>>& grid) {
        int M=grid.size(),N=grid[0].size();
        return minCost(grid,M-1,N-1);
    }
    
};

//2.memoization[faster than 71.35% ]

class Solution {
public:
    int minCost(vector<vector<int>> &cost,int m, int n,vector<vector<int>>& memo) { 
      if (n <0 || m <0) 
         return INT_MAX; 
      else if(m==0 && n==0) 
         return cost[m][n]; 
      if(memo[m][n]!=-1)
          return memo[m][n];
      int r=cost[m][n]+min(minCost(cost,m-1,n,memo),minCost(cost,m,n-1,memo));
        memo[m][n]=r;
      return r;
    } 
    
    int minPathSum(vector<vector<int>>& grid) {
        int m=grid.size(),n=grid[0].size();
        vector<vector<int>> memo(m,vector<int>(n, -1));
        return minCost(grid,m-1,n-1,memo);
    }
    
};

//3. Dynamic Programming [ faster than 71.65% ] [ TC: (m*n) ]

class Solution {
public:
    int minCost(vector<vector<int>> &cost,int m, int n,vector<vector<int>> dp) { 
      dp[m-1][n-1]=cost[m-1][n-1];
      for(int i=n-2;i>=0;i--){
          dp[m-1][i]=dp[m-1][i+1]+cost[m-1][i];
      } 
      for(int i=m-2;i>=0;i--){
          dp[i][n-1]=dp[i+1][n-1]+cost[i][n-1];
      }
      for(int i=m-2;i>=0;i--){
          for(int j=n-2;j>=0;j--){
              dp[i][j]=cost[i][j]+min(dp[i+1][j],dp[i][j+1]);
          }
      }
      return dp[0][0];
    } 
    
    int minPathSum(vector<vector<int>>& grid) {
        int m=grid.size(),n=grid[0].size();
        vector<vector<int>> dp(m,vector<int>(n, 0));
        return minCost(grid,m,n,dp);
    }
    
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
