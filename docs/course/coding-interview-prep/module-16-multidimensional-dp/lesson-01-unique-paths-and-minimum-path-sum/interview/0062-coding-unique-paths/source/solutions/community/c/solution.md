# C++ solution|| Using 3 different Appraoches

**Author:** anubhavbaner7
**Votes:** 101
**Link:** [https://leetcode.com/problems/unique-paths/solutions/1374942/](https://leetcode.com/problems/unique-paths/solutions/1374942/)

---

**If you really found my solution helpful please upvote it, as it motivates me to post such kind of codes and help the coding community, if you have some queries or some improvements please feel free to comment and share your views.**
```
//Recursive Appraoch
//This will give a TLE
  int solve(int i,int j,int m,int n)
    {
        if(i>=m||j>=n)
            return 0;
        if(i==m-1&&j==n-1)
            return 1;
        return solve(i+1,j,m,n)+solve(i,j+1,m,n);
    }
    int uniquePaths(int m, int n) {
        return solve(0,0,m,n);
    }

//DP(recursive+memoization)
    int solve(int i,int j,int m,int n,vector<vector<int>> &dp)
    {
        if(i>=m||j>=n)
            return 0;
        if(i==m-1&&j==n-1)
            return 1;
        if(dp[i][j]!=-1)
            return dp[i][j];
        
        return dp[i][j]=solve(i+1,j,m,n,dp)+solve(i,j+1,m,n,dp);
    }
    int uniquePaths(int m, int n) {
      vector<vector<int>> dp(m,vector<int>(n,-1));
        return solve(0,0,m,n,dp);
    }
//TC:O(m*n)
//SC:O(m*n)

//DP(Bottom-Up Appraoch)
  int uniquePaths(int m, int n) {
     int dp[m][n];
        for(int i=0;i<m;i++)
        {
            for(int j=0;j<n;j++)
            {
                if(i==0||j==0)
                    dp[i][j]=1;
                else
                    dp[i][j]=dp[i-1][j]+dp[i][j-1];
            }
        }
        return dp[m-1][n-1];
    }
//TC:O(m*n)
//SC:O(m*n)
```