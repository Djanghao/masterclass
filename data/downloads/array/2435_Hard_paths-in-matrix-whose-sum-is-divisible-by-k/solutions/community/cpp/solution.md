# C++ | DP | Explained and Easy to Understand

**Author:** lukewu28
**Votes:** 13
**Link:** [https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/2678965/](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/2678965/)

---


# Approach
It is obvious that this is a grid DP problem.

Initialize $$dp[n][m][k]$$ where $$dp[i][j][r]$$ represents the number of paths to $$(i, j)$$ with remainder $$r$$.
From this we get the following transfer equation:
$$dp[i][j][r] = dp[i-1][j][(r-grid[i][j])\\mod k] + dp[i][j-1][(r-grid[i][j])\\mod k]$$

Finally, run the dp and return $$dp[n-1][m-1][0]$$, the number of paths ending at $$(n-1, m-1)$$ divisible by $$k$$.
# Complexity
- Time complexity: $$O(nmk)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(nmk)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int numberOfPaths(vector<vector<int>>& grid, int k) {
        int n = grid.size(), m = grid[0].size();
        long long dp[n][m][k];
        for(int i = 0; i < k; i++) dp[0][0][i] = 0;
        dp[0][0][grid[0][0]%k] = 1;
        const int MOD =1000000007;
        for(int i = 0; i < n; i++){
            for(int j = 0; j < m; j++){
                grid[i][j] %= k;
            }
        }
        for(int i = 1; i< n; i ++){
            for(int j = 0; j < k; j++){
                dp[i][0][j] = dp[i-1][0][(j-grid[i][0]+k)%k];
            }
        }        
        for(int i = 1; i< m; i ++){
            for(int j = 0; j < k; j++){
                dp[0][i][j] = dp[0][i-1][(j-grid[0][i]+k)%k];
            }
        }
        for(int i = 1; i < n; i++){
            for(int j = 1; j < m; j++){
                for(int l = 0; l < k; l++){
                    dp[i][j][l] = 
                        (dp[i-1][j][(l-grid[i][j]+k)%k] + 
                         dp[i][j-1][(l-grid[i][j]+k)%k]
                        ) % MOD;
                }
            }
        }
        return dp[n-1][m-1][0];
        
    }
};
```