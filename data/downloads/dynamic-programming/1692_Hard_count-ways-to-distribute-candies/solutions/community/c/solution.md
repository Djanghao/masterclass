# Python/C++ 1D DP

**Author:** WangQiuc
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-ways-to-distribute-candies/solutions/975091/](https://leetcode.com/problems/count-ways-to-distribute-candies/solutions/975091/)

---

Suppose  `dp[n][k]` is the number of ways to distribute `n` candies for `k` bags, we can come up with the recursion:
```
dp[n][k] = k*dp[n-1][k] + dp[n-1][k-1]
```
As we can either put `n`th candy to any of existed `k` bags, or put it to a new bag which is the `k`th bag.
Base cases are `dp[i][1] = dp[i][i] = 1`.

Notice `(n,k)` only depend on `(n-1,k)` and `(n-1,k-1)`, we use dp rolling to reduce it to 1D.
```
def waysToDistribute(n, k):
    M = 10**9+7
    dp = [1] * (k+1)
    for i in range(1,n):
        for j in range(min(i,k), 1, -1):
            dp[j] = (j*dp[j] + dp[j-1]) % M
    return dp[k]
```
The `i`th outer iteration calculates `dp[i'+1][j]` in 2D scenario. We don't need the iteration `i=0`  as `dp[1]` has been manually set as `1`.
We don't need to worry about `dp[i][j]` when `i < k` so we always iterate `j` from `min(i,k)`.
C++
```
int waysToDistribute(int n, int k) {
    int M = 1e9+7;
    vector<long long> dp(k+1, 1);
    for(int i = 1; i < n; i++)
        for(int j = min(i,k); j > 1; j--)
            dp[j] = (j*dp[j] + dp[j-1]) % M;
    return dp[k];
}
```