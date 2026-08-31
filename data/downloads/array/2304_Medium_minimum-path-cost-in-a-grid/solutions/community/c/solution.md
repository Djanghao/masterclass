# DP

**Author:** votrubac
**Votes:** 52
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/2141155/](https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/2141155/)

---

We compute the result in O(m * n * n) using memoisation. Constraints allow for that, as both `n` and `m` is limited to `50`.

**C++**
```cpp
int minPathCost(vector<vector<int>>& g, vector<vector<int>>& moveCost) {
    int m = g.size(), n = g[0].size();
    vector<vector<int>> dp(m, vector<int>(n, INT_MAX));
    dp[0] = g[0];
    for (int i = 1; i < m; ++i)
        for (int j = 0; j < n; ++j)
            for (int k = 0; k < n; ++k)
                dp[i][k] = min(dp[i][k], g[i][k] + dp[i - 1][j] + moveCost[g[i - 1][j]][k]);
    return *min_element(begin(dp[m - 1]), end(dp[m - 1]));
}
```
Memory optimization, as we only look one row up.
**C++**
```cpp
int dp[2][50] = {};
class Solution {
public:
int minPathCost(vector<vector<int>>& g, vector<vector<int>>& moveCost) {
    int m = g.size(), n = g[0].size();
    for (int i = 0; i < m; ++i)
        for (int j = 0; j < n; ++j)
            if (i == 0)
                dp[0][j] = g[0][j];
            else
                for (int k = 0; k < n; ++k)
                    dp[i % 2][k] = min(j == 0 ? INT_MAX : dp[i % 2][k], g[i][k] + dp[(i - 1) % 2][j] + moveCost[g[i - 1][j]][k]);
    return *min_element(begin(dp[(m - 1) % 2]), begin(dp[(m - 1) % 2]) + n);
}
```