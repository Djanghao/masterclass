# Python | O(N^2) time, O(N) space | Intuitive

**Author:** cheupei
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence-ii/solutions/2701170/](https://leetcode.com/problems/longest-palindromic-subsequence-ii/solutions/2701170/)

---

### Intuition
1. `1 <= s.length <= 250`, so O(N^2) solution is allowed.
2. For every letter, we iterate backwards. If there is a letter different from me, it form a possible palindrome, so we update `maxL`. Otherwise, we update the longest palindrome of corresponding letter.

### Code
```
class Solution(object):
    def longestPalindromeSubseq(self, s):
        """
        :type s: str
        :rtype: int
        """
        n = len(s)
        dp = [0] * n
        for i in range(n):
            maxL = 0
            for j in range(i-1, -1, -1):
                if s[j] == s[i]:
                    dp[j] = max(dp[j], 2 + maxL)
                else:
                    maxL = max(maxL, dp[j])
        return max(dp)
```

