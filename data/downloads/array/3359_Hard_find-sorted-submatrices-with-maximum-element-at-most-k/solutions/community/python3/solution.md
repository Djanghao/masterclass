# [Python3] Count submatrices with all ones

**Author:** drknzz
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-sorted-submatrices-with-maximum-element-at-most-k/solutions/6066625/](https://leetcode.com/problems/find-sorted-submatrices-with-maximum-element-at-most-k/solutions/6066625/)

---

# Intuition
I suggest solving [1504. Count Submatrices With All Ones](https://leetcode.com/problems/count-submatrices-with-all-ones/description/) first, to get the intuition on histograms.

Then, what we do in this question is create a histogram from the input matrix, based on the row condition given (non-increasing rows, values less than or equal to `k`).

With the histogram ready, we transpose it (it's rotated left, because of how we created it) and pass to `numSubmat` which counts the submatrices and returns the final result.


# Code
```python3 []
class Solution:
    def countSubmatrices(self, grid: List[List[int]], k: int) -> int:
        m, n = len(grid), len(grid[0])
        dp = [[0] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                if grid[i][j] > k:
                    continue
                dp[i][j] = dp[i][j-1] + 1 if j - 1 >= 0 and grid[i][j-1] >= grid[i][j] else 1

        return self.numSubmat(list(zip(*dp)))

    def numSubmat(self, dp: List[List[int]]) -> int:
        m, n = len(dp), len(dp[0])
        res = 0
        for i in range(m):
            st = []
            count = 0
            for j in range(n):
                while st and dp[i][st[-1]] >= dp[i][j]:
                    r = st.pop()
                    l = st[-1] if st else -1
                    count -= (dp[i][r] - dp[i][j]) * (r - l)

                st.append(j)
                count += dp[i][j]
                res += count

        return res

```