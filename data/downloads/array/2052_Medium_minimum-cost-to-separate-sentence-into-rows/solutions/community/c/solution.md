# DFS

**Author:** votrubac
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/solutions/1544540/](https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/solutions/1544540/)

---

**Python 3**
```python
class Solution:
    def minimumCost(self, s: str, k: int) -> int:
        @cache
        def dfs(i: int) -> int:
            return 0 if i + k >= len(s) else (
                min([(k + i - j) * (k + i - j) + dfs(j + 1) for j in range(i, i + k + 1) if s[j] == ' '])
            )
        return dfs(0)
```

**C++**
Originally, it was accepted with 0 ms runtime even without memoisation, but stronger test cases were added later.
```cpp
int dp[5001] = {};
int minimumCost(string &s, int k, int i = 0) {
    if (i + k >= s.size())
        return 0;
    if (dp[i] == 0) {
        dp[i] = INT_MAX;
        for (int j = i; j - i <= k; ++j)
            if (s[j] == ' ')
                dp[i] = min(dp[i], (k + i - j) * (k + i - j) + minimumCost(s, k, j + 1));
        }
    return dp[i];
}
```