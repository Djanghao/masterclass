# [Python] DP solution

**Author:** lee215
**Votes:** 23
**Link:** [https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/2678950/](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/2678950/)

---

# **Explanation**
`dp[i][j][kk]` means the number of paths with `sum % k = kk`.
The transform equation is:
`dp[i][j][(kk + A[i][j]) % k] = dp[i-1][j][kk] + dp[i][j-1][kk]`
We can use 1D array `dp` to simplify the 2D dp.
<br>

# **Complexity**
Time `O(nmk)`
Space `O(mk)`
<br>

**Python**
```py
    def numberOfPaths(self, A, k):
        n, m, mod = len(A), len(A[0]), 10**9 + 7
        dp = [Counter() for j in range(m + 1)]
        dp[0][0] = 1
        for i, r in enumerate(A):
            for j, a in enumerate(r):
                dp[j] = Counter({(a + b) % k: c % mod for b, c in (dp[j] + dp[j-1]).items()})
        return dp[m - 1][0]
```
