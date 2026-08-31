# Simple DFS + DP

**Author:** jainam_sogani
**Votes:** 90
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/2017937/](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/2017937/)

---

This problem can be solved by simply applying a DFS from top of the grid to bottom and keeping a count of '(' and ')' as k.

```
class Solution {
public:
    int n, m;
    int dp[100][100][205];
    bool solve(vector<vector<char>>& grid, int i, int j, int k)
    {
        if(i>=n || j>=m)
            return 0;
        
        if(grid[i][j]=='(')
            k++;
        else
            k--;
        
        if(k<0)
            return 0;
        
        if(i==n-1 && j==m-1)
            return (k==0);
        
        if(dp[i][j][k]!=-1)
            return dp[i][j][k];
        
        return dp[i][j][k]=(solve(grid, i+1, j, k) | solve(grid, i, j+1, k));
    }
    
    bool hasValidPath(vector<vector<char>>& grid)
    {
        n=grid.size();
        m=grid[0].size();
        memset(dp, -1, sizeof(dp));
        return solve(grid, 0, 0, 0);
    }
};
```