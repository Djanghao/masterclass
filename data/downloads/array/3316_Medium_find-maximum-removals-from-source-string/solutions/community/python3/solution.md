# [Python3/Java/C++] Knapsack DP - Top-down -> Bottom-Up - Step by Step + Detailed Solution

**Author:** dolong2110
**Votes:** 24
**Link:** [https://leetcode.com/problems/find-maximum-removals-from-source-string/solutions/5904073/](https://leetcode.com/problems/find-maximum-removals-from-source-string/solutions/5904073/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Finding the maximum of removal with choosing something -> `0-1 Knap-sack`

# Approach
<!-- Describe your approach to solving the problem. -->
**1. Initialization:**

- `m, n = len(source), len(pattern)`: Store the lengths of the `source` and `pattern` strings in `m` and `n` respectively.
- `s = set(targetIndices)`: Convert the `targetIndices` list to a set `s` for efficient lookups (checking if an index is in `targetIndices`).

**2. `dp(i, j)` function:**

This is a recursive function with caching that forms the core of the dynamic programming approach. It takes two arguments:

`i`: The current index being considered in the `source` string.
`j`: The current index being considered in the `pattern` string.

The function returns the maximum number of removals possible from the `source` string starting from index `i`, while still matching the `pattern` from index `j`.

- **Base Cases:**

    - `if i == m:`: If we have reached the end of the `source` string:
        - `if j == n:`: If we have also reached the end of the `pattern` string, it means we have found a match, so return 0 (no more removals needed).
    - `else:`: If we haven't reached the end of the `pattern`, it means the pattern is not found, so return `-float("inf")` (negative infinity) to indicate an invalid state.
    - `if j == n:`: If we have reached the end of the `pattern` string, it means we have found a match. We can remove the current character in `source` if its index `i` is in `targetIndices` (`int(i in s)`) and continue recursively with the next character in `source` (`dp(i + 1, j)`).

- **Recursive Step:**

    - `res = int(i in s) + dp(i + 1, j)`: Initialize `res` with the maximum removals possible if we remove the current character at index `i` (if allowed) and continue with the next character in `source`.
    - `if source[i] == pattern[j]:`: If the current character in `source` matches the current character in `pattern`:
        - `res = max(res, dp(i + 1, j + 1))`: Update `res` by taking the maximum between the previous `res` (removing the character) and the result of keeping the character and continuing the match with the next characters in both `source` and `pattern`.
    -`return res`: Return the calculated maximum number of removals.

**3. @cache decorator:**

This decorator is used to memoize the results of the `dp` function. It stores the results of `dp(i, j)` calls in a cache. If `dp(i, j)` is called again with the same arguments, the cached result is returned directly, avoiding redundant computations and improving performance.

**4. Calling `dp` and handling the result:**

- `res = dp(0, 0)`: Call the `dp` function starting from index `0` in both `source` and `pattern`.
- `return res if res != -float("inf") else 0`: If the result `res` is not negative infinity (meaning a valid subsequence was found), return `res`. Otherwise, return 0 (no removals possible).

**In essence, the code uses dynamic programming to explore all possible combinations of removing or keeping characters from `source` at the specified `targetIndices` to find the maximum number of removals while still preserving the `pattern` as a subsequence.**


# Code
##### 1. Top-Down
```
class Solution:
    def maxRemovals(self, source: str, pattern: str, targetIndices: List[int]) -> int:
        m, n = len(source), len(pattern)
        s = set(targetIndices)
        @cache
        def dp(i: int, j: int) -> int:
            if i == m:
                if j == n: return 0
                else: return -float("inf")
            if j == n: return int(i in s) + dp(i + 1, j)
            res = int(i in s) + dp(i + 1, j)
            if source[i] == pattern[j]: res = max(res, dp(i + 1, j + 1))
            return res
        res = dp(0, 0)
        return res if res != -float("inf") else 0
```
- Time complexity: $$O(M * N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(M * N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

##### 2. Bottom-Up
```python3 []
class Solution:
    def maxRemovals(self, source: str, pattern: str, targetIndices: List[int]) -> int:
        m, n = len(source), len(pattern)
        s = set(targetIndices)
        dp = [[-float("inf")] * (n + 1) for _ in range(m + 1)]
        dp[m][n] = 0
        for i in range(m - 1, -1, -1):
            for j in range(n, -1, -1):
                if j == n: dp[i][j] = int(i in s) + dp[i + 1][j]
                else:
                    dp[i][j] = int(i in s) + dp[i + 1][j]
                    if source[i] == pattern[j]: dp[i][j] = max(dp[i][j], dp[i + 1][j + 1])
        return dp[0][0] if dp[0][0] != -float("inf") else 0
```
- Time complexity: $$O(M * N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(M * N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

##### 3. Bottom-Up - Optimized Space
Credit for lee215
```python3 []
class Solution:
    def maxRemovals(self, source: str, pattern: str, targetIndices: List[int]) -> int:
        m, n = len(source), len(pattern)
        s = set(targetIndices)
        dp = [-float("inf") for _ in range(n + 1)]
        dp[-1] = 0
        for i in range(m - 1, -1, -1):
            for j in range(n + 1):
                dp[j] += i in s
                if j < n and source[i] == pattern[j]:
                    dp[j] = max(dp[j], dp[j + 1])
        return dp[0]
```
```java []
class Solution {
    public int maxRemovals(String source, String pattern, int[] targetIndices) {
        int m = source.length();
        int n = pattern.length();
        int[] target = new int[m];
        int[] dp = new int[n + 1];

        // Mark target indices
        for (int i : targetIndices) {
            target[i] += 1;
        }

        // Initialize DP array
        Arrays.fill(dp, Integer.MIN_VALUE);
        dp[n] = 0;

        // Fill DP table
        for (int i = m - 1; i >= 0; i--) {
            for (int j = 0; j <= n; j++) {
                dp[j] += target[i];
                if (j < n && source.charAt(i) == pattern.charAt(j)) {
                    dp[j] = Math.max(dp[j], dp[j + 1]);
                }
            }
        }

        return dp[0];
    }
}
```
``` c++ []
class Solution {
public:
    int maxRemovals(string source, string pattern, vector<int>& targetIndices) {
        int m = source.size(), n = pattern.size();
        unordered_set<int> target(targetIndices.begin(), targetIndices.end());

        vector<int> dp(n + 1, INT_MIN);
        dp[n] = 0;
        for (int i = m - 1; i >= 0; --i) {
            for (int j = 0; j <= n; ++j) {
                dp[j] += target.count(i);
                if (j < n && source[i] == pattern[j]) {
                    dp[j] = max(dp[j], dp[j + 1]);
                }
            }
        }
        return dp[0];
    }
};
```

- Time complexity: $$O(M * N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->