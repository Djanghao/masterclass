# Memoise Mod K

**Author:** votrubac
**Votes:** 29
**Link:** [https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/2678788/](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/2678788/)

---

We do not need to memoise the sum, we just need to memoise the modulo - `sum % k`. 

In the end, if the modulo is zero - the path sum is divisible. Since `k` is small, we only need to store up to 51 modulos.

#### Top-Down DP
Python folks are at a disadvantage (or rather, do not have an advantage) here, as `@cache` is not fast enough (TLE).

For Python, we need to memoise by hand (or use a bottom-up approach).

**C++**
```cpp
int numberOfPaths(vector<vector<int>>& g, int k) {
    int dp[50001][51] = {}, m = g.size(), n = g[0].size();
    function<int(int, int, int)> dfs = [&](int i, int j, int mod){
        if (i >= m || j >= n)
            return 0;
        if (i == m - 1 && j == n - 1)
            return (mod + g[i][j]) % k ? 0 : 1;
        if (dp[i * n + j][mod] == 0)
            dp[i * n + j][mod] = (1 + dfs(i + 1, j, (mod + g[i][j]) % k) + 
                dfs(i, j + 1, (mod + g[i][j]) % k)) % 1000000007;
        return dp[i * n + j][mod] - 1;
    };
    return dfs(0, 0, 0);
}
```

#### Bottom-Up DP
Note that the tabulation for the current and previous row (`ra` and `rb`) is 1-based, so we do not have to do additional checks.
**C++**
```cpp
int numberOfPaths(vector<vector<int>>& g, int k) {
    int m = g.size(), n = g[0].size();
    vector<vector<int>> ra(n + 1, vector<int>(k + 1)), rb = ra;
    rb[1][0] = 1;
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j)
            for (int l = 0; l < k; ++l)
                ra[j + 1][(l + g[i][j]) % k] = (ra[j][l] + rb[j + 1][l]) % 1000000007;
        swap(ra, rb);
    }
    return rb[n][0];
} 
```