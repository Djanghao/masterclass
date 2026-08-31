# [Java/C++/Python] DP solution

**Author:** lee215
**Votes:** 113
**Link:** [https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/1863955/](https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/1863955/)

---

# **Explanation**
`dp[i][k]` means that,
using `k` tiles to cover the first `i` tiles
the minimum number of white tiles still visible.


For each tile `s[i]`, we heve two options,
One option is doing nothing, `jump` this tile,
`jump = dp[i - 1][k] + int(s[i - 1])`
The other option is covering this tile
`cover = dp[i - l][k - 1]`

Then we take the minimum result of two options:
`dp[i][k] = min(jump, cover)`

Finally after explore all combination of `(i,k)`,
we return `dp[n][nc]`.
<br>

# **Complexity**
Time `O(NC)`
Space `O(NC)`
where `N = floor.length` and `C = numCarpets`.
Space can be optimized to `O(N)`.
<br>

**Java**
```java
    public int minimumWhiteTiles(String s, int nc, int l) {
        int n = s.length(), dp[][] = new int[n + 1][nc + 1];
        for (int i = 1; i <= n; ++i) {
            for (int k = 0; k <= nc; ++k) {
                int jump = dp[i - 1][k] + s.charAt(i - 1) - '0';
                int cover = k > 0 ? dp[Math.max(i - l, 0)][k - 1] : 1000;
                dp[i][k] = Math.min(cover, jump);
            }
        }
        return dp[n][nc];
    }
```

**C++**
```cpp
    int minimumWhiteTiles(string s, int nc, int l) {
        int n = s.size();
        vector<vector<int>> dp(n + 1, vector<int>(nc + 1));
        for (int i = 1; i <= n; ++i) {
            for (int k = 0; k <= nc; ++k) {
                int jump = dp[i - 1][k] + s[i - 1] - '0';
                int cover = k > 0 ? dp[max(i - l, 0)][k - 1] : 1000;
                dp[i][k] = min(cover, jump);
            }
        }
        return dp[n][nc];
    }
```

**Python3**
```py
    def minimumWhiteTiles(self, A, k, l):

        @lru_cache(None)
        def dp(i, k):
            if i <= 0: return 0
            return min(int(A[i - 1]) + dp(i - 1, k), dp(i - l, k - 1) if k else 1000)
            
        return dp(len(A), k) 
```
