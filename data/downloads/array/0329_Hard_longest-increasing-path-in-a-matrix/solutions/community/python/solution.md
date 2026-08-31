# Python solution, memoization dp, 288ms

**Author:** kitt
**Votes:** 286
**Link:** [https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/78334/](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/78334/)

---

We can find longest decreasing path instead, the result will be the same. Use `dp` to record previous results and choose the max `dp` value of smaller neighbors.

    def longestIncreasingPath(self, matrix):
        def dfs(i, j):
            if not dp[i][j]:
                val = matrix[i][j]
                dp[i][j] = 1 + max(
                    dfs(i - 1, j) if i and val > matrix[i - 1][j] else 0,
                    dfs(i + 1, j) if i < M - 1 and val > matrix[i + 1][j] else 0,
                    dfs(i, j - 1) if j and val > matrix[i][j - 1] else 0,
                    dfs(i, j + 1) if j < N - 1 and val > matrix[i][j + 1] else 0)
            return dp[i][j]

        if not matrix or not matrix[0]: return 0
        M, N = len(matrix), len(matrix[0])
        dp = [[0] * N for i in range(M)]
        return max(dfs(x, y) for x in range(M) for y in range(N))