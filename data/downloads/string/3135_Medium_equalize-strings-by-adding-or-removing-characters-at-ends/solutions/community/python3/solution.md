# Longest Common Substring with minimum Space

**Author:** true-detective
**Votes:** 6
**Link:** [https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5101069/](https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5101069/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
What should be unchanged is the substring that is common between both strings `s` and `t` and is the longest.
so we should first find the longest common substring between the two strings, which can be calculated with `dp`. and the answer is `m - lcs + n - lcs`. `m - lcs` is the number of characters that should be removed from the initial string and `n - lcs` is the number of characters that should be added to target string. so the answer is `m + n - 2 * lcs`. 

# Approach
<!-- Describe your approach to solving the problem. -->
Finding the longest common substring can be done with dp. It can be done with 2 dimensional DP which is easier to understand. we used only 2 vectors because we do not need to keep the entire matrix in memory. (less memory usage.)
in 2 dimensinal dp, `dp[i][j]` means the number of characters that string `s[:i]` and `t[:j]` has in common as substring.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(m * n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class Solution:
    def minOperations(self, s: str, t: str) -> int:
        m, n = len(s), len(t)
        last = [0] * n
        M = 0
        for i in range(m):
            dp = [0] * n
            for j in range(n):
                if s[i] == t[j]:
                    dp[j] = 1 + (last[j-1] if j - 1 >= 0 else 0)
                    M = max(M, dp[j])
            last = dp
        return m + n - 2 * M

```