# Python, C++ | DP | O (n*m*k) | Clean solution with explanation

**Author:** alexnik42
**Votes:** 8
**Link:** [https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/2678803/](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/2678803/)

---

When we encounter the problem, which has grid and some sort of path, then most definitely we need to come up with some DP solution.

Here DP will look like `dp[n][m][mod]`, where `n` is `len(grid)`, m is `len(grid[0])`, `mod` is all possible modulus (`sum % k`, so the size of it will be `k`).

Base case: `dp[0][0][grid[0][0] % k] = 1`
Afterwards we check both left and upper cell and sum up the number of paths for each `mod` in range of `k` to `dp[i][j][(mod + grid[i][j]) % k]`. At the end we just return number of paths with mod equal to `0`.

**Python**

```
def numberOfPaths(self, grid: List[List[int]], k: int) -> int:
    n, m = len(grid), len(grid[0])
    dp = [[[0] * k for _ in range(m)] for _ in range(n)]
    dp[0][0][grid[0][0] % k] = 1
    
    for i in range(n):
        for j in range(m):
            for mod in range(k):
                if j > 0:
                    dp[i][j][(mod + grid[i][j]) % k] += dp[i][j - 1][mod] % 1000000007
                if i > 0:
                    dp[i][j][(mod + grid[i][j]) % k] += dp[i - 1][j][mod] % 1000000007
    
    return dp[-1][-1][0] % 1000000007 
```

**UPDATE**

Python solution started to give TLE sometimes. I believe that test cases were not properly optimized for Python. I created the same solution using C++ and it works completely fine.

**C++**

```
class Solution {
public:
    int numberOfPaths(vector<vector<int>>& grid, int k) {
        int n = grid.size(), m = grid[0].size();
        vector<vector<vector<int>>> dp(n, vector<vector<int>>(m, vector<int>(k, 0)));
        dp[0][0][grid[0][0] % k] = 1;
        
        for (size_t i = 0; i < n; ++i) {
            for (size_t j = 0; j < m; ++j) {
                for (int mod = 0; mod < k; ++mod) {
                    if (j > 0) {
                        dp[i][j][(mod + grid[i][j]) % k] += dp[i][j - 1][mod] % 1000000007;
                    }
                    if (i > 0) {
                        dp[i][j][(mod + grid[i][j]) % k] += dp[i - 1][j][mod] % 1000000007;
                    }
                }
            }
        }
        return dp[n - 1][m - 1][0] % 1000000007;
    }
};
```

As [fornoreason](https://leetcode.com/fornoreason/) pointed out, in the solution above we can simply use 
```
int dp[n][m][k];
memset(dp, 0, sizeof(dp));
```
instead of vectors to significantly improve running time.