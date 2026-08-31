# [Python] Topo DP Solution and DFS Solution

**Author:** lee215
**Votes:** 64
**Link:** [https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/2230147/](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/2230147/)

---

# **Intuition**
Because we want strictly increasing paths,
there is no cycle of path.
We can iterative all `A[i][j]` in increasing order.
<br>

# **Explanation**
`dp[i][j]` means the number of paths ending at `A[i][j]`.
We initial all `dp[i][j] = 1`.

Because we want strictly increasing paths, there is no cycle of path.
We iterative all `A[i][j]` in increasing order,
`d[i][j] += dp[x][y] from smaller neighbours`.

Finally return the sum of `dp`.
<br>

# **Complexity**
Time `O(mn^2log(m+n))`
Space `O(mn)`
<br>


**Python**
```py
    def countPaths(self, A):
        m, n, mod = len(A), len(A[0]), 10 ** 9 + 7
        dp = [[1] * n for i in range(m)]
        for a, i, j in sorted([A[i][j], i, j] for i in range(m) for j in range(n)):
            for x, y in [[i, j + 1], [i, j - 1], [i + 1, j], [i - 1, j]]:
                if 0 <= x < m and 0 <= y < n and A[x][y] < A[i][j]:
                    dp[i][j] += dp[x][y] % mod
        return sum(map(sum, dp)) % mod
```
<br>

# Solution 2: DFS
Time `O(mn)`
Space `O(mn)`
```py
    def countPaths(self, A):
        m, n, mod = len(A), len(A[0]), 10 ** 9 + 7

        @lru_cache(None)
        def count(i, j):
            res = 1
            for x, y in [[i, j + 1], [i, j - 1], [i + 1, j], [i - 1, j]]:
                if 0 <= x < m and 0 <= y < n and A[x][y] < A[i][j]:
                    res += count(x, y) % mod
            return res

        return sum(count(i,j) for i in range(m) for j in range(n)) % mod
```