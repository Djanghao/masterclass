# DP - Line by Line Explanation

**Author:** tr1nity
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solutions/4169616/](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solutions/4169616/)

---

Please check out LeetCode The Hard Way for more solution explanations and tutorials. If you like it, please give a star and watch my Github Repository. Link in bio.

---

The first observation is that the computational complexity does not depend on `arrLen`, only the steps and position matter. If we have `n` steps, we can only walk at most `n / 2` steps to the left or the right.  Therefore, we can use DFS with memoization to find out the answer.

```cpp
class Solution {
public:
    int numWays(int steps, int arrLen) {
        int M = 1e9 + 7;
        // dp[i][j]: how many ways to reach i-th pos using j steps
        vector<vector<int>> dp(steps / 2 + 1, vector<int>(steps + 1, -1));
        function<long long(int,int)> dfs = [&](int pos, int steps) -> long long {
            // if we walk outside the array or use all the steps
            // then return 0
            if (pos < 0 || pos > arrLen - 1 || pos > steps) return 0;
            // if we use all the steps, return 1 only if pos is 0
            if (steps == 0) return pos == 0;
            // if it has been calculated, return directly
            if (dp[pos][steps] != -1) return dp[pos][steps];
            // memoize it
            return dp[pos][steps] = (
                // move to the left
                dfs(pos - 1, steps - 1) % M + 
                // stay at current position
                dfs(pos, steps - 1) % M + 
                // move to the right
                dfs(pos + 1, steps - 1) % M
            ) % M;
        };
        return dfs(0, steps);
    }
};
```

**Python version**

```py
class Solution:
    def numWays(self, steps: int, arrLen: int) -> int:
        M = 10 ** 9 + 7
        @lru_cache(None)
        def dfs(pos, steps):
            # if we walk outside the array or use all the steps
            # then return 0
            if pos < 0 or pos > steps or pos > arrLen - 1: return 0
            # if we use all the steps, return 1 only if pos is 0
            if steps == 0: return pos == 0
            return (
                # move to the left
                dfs(pos - 1, steps - 1) +
                # stay at current position
                dfs(pos, steps - 1) +
                # move to the right
                dfs(pos + 1, steps - 1) 
            ) % M
        return dfs(0, steps)
```