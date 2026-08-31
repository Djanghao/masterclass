# Memory-Optimized Tabulation

**Author:** votrubac
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5905952/](https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5905952/)

---

It is easier to start with top-down DP, but converting it to bottom-up allows to optimize the memory. 

Update: I added the top-down solution as a comment.

**C++**
```cpp
int countWinningSequences(const string &s) {
    int res = 0, sz = s.size(), mod = 1000000007;
    long long dp[2][2001][3] = {};
    dp[0][1000][0] = 1;
    for (int i = 0; i < sz; ++i) {
        int a = s[i] == 'F' ? 2 : s[i] == 'E' ? 1 : 0;
        for (int b = 0; b < 3; ++b) {
            // F > E, E > W, W > F
            int pt = a == b ? 0 : a == 0 && b == 2 ? -1 : b == 0 && a == 2 ? 1 : a > b ? -1 : 1;
            for (int j = 1000 - i; j < 1001 + i; ++j)
                dp[!(i % 2)][j + pt][b] = (
                    dp[i % 2][j][0] + dp[i % 2][j][1] + dp[i % 2][j][2] - (i == 0 ? 0 : dp[i % 2][j][b])
                ) % mod;
        }
    }
    for (int j = 1001; j < 1001 + sz; ++j)
        res = (dp[sz % 2][j][0] + dp[sz % 2][j][1] + dp[sz % 2][j][2] + res) % mod;
    return res;
}
```