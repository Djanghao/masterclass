# [Java/C++/Python] Top-down DP solution

**Author:** lee215
**Votes:** 180
**Link:** [https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/1887010/](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/1887010/)

---

# **Intuition**
Top down dynamic programming.
Also noticed that some people already get accepted, a dp program.
<br>

# **Explanation**
`dp[i,k]` means picking `k` elements from `pile[i]` to `pile[n-1]`.
We can pick 0,1,2,3... elements from the current `pile[i]` one by one.
It asks for the maximum total value of coins we can have,
so we need to return `max` of all the options.
<br>

# **Complexity**
Time `O(nm)`
Space `O(nk)`
where `m = sum(piles[i].length) <= 2000`
<br>

**Java**
From @ssmegentle
```java
    public int maxValueOfCoins(List<List<Integer>> piles, int k) {
        Integer[][] memo = new Integer[piles.size() + 1][k + 1];

        return dp(piles, memo, 0, k);
    }
    public int dp(List<List<Integer>> piles, Integer[][] memo, int i, int k) {
        if (k == 0 || i == piles.size()) return 0;
        if (memo[i][k] != null) return memo[i][k];

        int res = dp(piles, memo, i + 1, k);
        int cur = 0;

        for (int j = 0; j < Math.min(piles.get(i).size(), k); ++j) {
            cur += piles.get(i).get(j);
            res = Math.max(res, cur + dp(piles, memo, i + 1, k - j - 1));
        }
        return memo[i][k] = res;
    }
```
**C++**
```cpp
    int maxValueOfCoins(vector<vector<int>>& A, int K) {
        int n = A.size();
        vector<vector<int>> memo(n + 1, vector<int>(K + 1, 0));
        function<int(int, int)> dp = [&](int i, int k) {
            if (memo[i][k] > 0) return memo[i][k];
            if (i == n || k == 0) return 0;
            int res = dp(i + 1, k), cur = 0;
            for (int j = 0; j < A[i].size() && j < k; ++j) {
                cur += A[i][j];
                res = max(res, dp(i + 1, k - j - 1) + cur);
            }
            memo[i][k] = res;
            return res;
        };
        return dp(0, K);
    }
```
**Python**
```py
    def maxValueOfCoins(self, A, K):
        
        @functools.lru_cache(None)
        def dp(i, k):
            if k == 0 or i == len(A): return 0
            res, cur = dp(i + 1, k), 0
            for j in range(min(len(A[i]), k)):
                cur += A[i][j]
                res = max(res, cur + dp(i+1, k-j-1))
            return res
        
        return dp(0, K)
```
