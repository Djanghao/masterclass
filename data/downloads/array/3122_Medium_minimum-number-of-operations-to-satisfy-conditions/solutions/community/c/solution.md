# C++ || DP || Memorization || Easy to understand code

**Author:** pavanbsp
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5052711/](https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5052711/)

---

```
class Solution {
public:
    
    int solve(int ind, int last, int n, int m, vector<vector<int>>& a, vector<vector<int>>& dp) {
        if(ind == m)
            return 0;
        if(dp[ind][last] != -1)
            return dp[ind][last];
        int ans = n*m;
        for(int i = 0; i < 10; i++) {
            if(i == last) continue;
            int c = n - a[ind][i];
            ans = min(ans, c + solve(ind+1, i, n, m, a, dp));
        }
        return dp[ind][last] = ans;
    }
    
    int minimumOperations(vector<vector<int>>& grid) {
        int m = grid[0].size(), n = grid.size();
        vector<vector<int>> a(m, vector<int>(10, 0));
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                a[j][grid[i][j]]++;
            }
        }
        vector<vector<int>> dp(grid[0].size(), vector<int>(10, -1));
        int ans = n*m;
        for(int i = 0; i < 10; i++) {
            ans = min(ans, solve(0, i, n, m, a, dp));
        }
        return ans;
    }
};
```