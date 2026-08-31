# DP

**Author:** votrubac
**Votes:** 161
**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solutions/1692963/](https://leetcode.com/problems/solving-questions-with-brainpower/solutions/1692963/)

---

Our `dp` array contains maximum points we get if we start from question `i`. 

We calculate it going right to left, and the answer for position `i` is the maximum of:
- Take: `points[i] + dp[i + 1 + brainpower[i]]`,
- Skip: `dp[i + 1]`.

**C++**
We add a bunch of sentinel values to `dp` array to avoid the length check.
```cpp
long long mostPoints(vector<vector<int>>& q) {
    long long dp[200001] = {};
    for (int i = q.size() - 1; i >= 0; --i)
        dp[i] = max(q[i][0] + dp[q[i][1] + i + 1], dp[i + 1]);
    return dp[0];
}
```
**Python 3**
For those who prefer a recursive approach.

```python
class Solution:
    def mostPoints(self, q: List[List[int]]) -> int:
        @cache
        def dfs(i: int) -> int:
            return 0 if i >= len(q) else max(dfs(i + 1), q[i][0] + dfs(i + 1 + q[i][1]))
        return dfs(0)
```