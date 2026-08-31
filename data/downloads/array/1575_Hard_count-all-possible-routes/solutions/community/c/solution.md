# C++ | recursion + memoization

**Author:** shardul109
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-all-possible-routes/solutions/1651491/](https://leetcode.com/problems/count-all-possible-routes/solutions/1651491/)

---

```
class Solution {
public:
    int mod = 1e9 + 7;
    
    int recur(vector<int> &locations , int start , int finish , int fuel , vector<vector<int>> &dp){
        
        if (dp[start][fuel] != -1) return dp[start][fuel];
        
        int ans = 0;
        if (start == finish) ans++;
        
        for (int i=0;i<locations.size();i++){
            if (i == start || abs(locations[i] - locations[start]) > fuel) continue;
            
            ans += recur(locations , i , finish , fuel - abs(locations[i] - locations[start]) , dp) % mod;
            ans %= mod;
        }
        
        return dp[start][fuel] = ans % mod;
    }
    
    int countRoutes(vector<int>& locations, int start, int finish, int fuel) {
        int sz = locations.size();
        
        vector<vector<int>> dp(sz , vector<int>(fuel + 1 , -1));
        
        return recur(locations , start , finish , fuel , dp);
    }
};
```