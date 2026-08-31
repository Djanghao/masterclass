# Best Solution Explained

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/3169677/](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/3169677/)

---


```
class Solution {
public:
    long long int solve(vector<vector<int>> &x, vector<vector<int>> &dp, int r, int c){
        if(r>=x.size()){
            return 0;
        }
        if(dp[r][c]!=-1){
            return dp[r][c];
        }
        long long int ans=INT_MAX;
        for(int i=0; i<x.size(); i++){
            if((c&(1<<i))){
                int t=c;
                t=t^(1<<i);
                ans=min(ans, x[r][i]+solve(x, dp, r+1, t));
            }
        }
        return dp[r][c]=ans;
    }
    int minimumXORSum(vector<int>& a, vector<int>& b){
        int n=a.size();
        vector<vector<int>> x(n , vector<int> (n));
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                x[i][j]=a[i]^b[j];
            }
        }
        int c = pow(2, n)-1;
        vector<vector<int>> dp(n , vector<int> (c+1, -1));
        return solve(x, dp, 0, c);
    }
};
```