# DP| Memoization

**Author:** switch-switch
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-paths-with-the-given-xor-value/solutions/6171751/](https://leetcode.com/problems/count-paths-with-the-given-xor-value/solutions/6171751/)

---

```
class Solution {
public:
    
    const int MOD = 1e9+7;
    int rec(int i,int j, int curxor, int k , vector<vector<int>>&grid, vector<vector<vector<int>>>&dp){
        int n = grid.size();
        int m = grid[0].size();
        // pruning
        if(i>=n || j>=m){
            return 0;
        }
        // base case
        if(i==n-1 && j==m-1){
            if((curxor ^ grid[i][j])==k){
                return 1;
            }
            else{
                return 0;
            }
        }
        // cache check
        if(dp[i][j][curxor]!=-1){
            return dp[i][j][curxor];
        }
        // transition or calculate
        int newxorr = curxor^grid[i][j];
        int rightway = (rec(i,j+1,newxorr,k,grid,dp))%MOD;
        int downway = (rec(i+1,j,newxorr,k,grid,dp))%MOD;
        
        // save and return 
        return dp[i][j][curxor] = (rightway+downway)%MOD;
        
    }
    int countPathsWithXorValue(vector<vector<int>>& grid, int k) {
        

        // n rows and m columns 2^(n+m)
        // memoization 
        
        
        int n = grid.size();
        int m = grid[0].size();
        vector<vector<vector<int>>>dp(n,vector<vector<int>>(m,vector<int>(32,-1)));
        return rec(0,0,0,k,grid,dp);
    }
};
```

I have also made a detailed explanation video, Do check it out to learn writing dp from first principles!
link - https://youtu.be/as_uE5Z_u_w