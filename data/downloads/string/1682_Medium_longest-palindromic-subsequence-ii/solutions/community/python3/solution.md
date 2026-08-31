# [Python3] bottom-up dp

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence-ii/solutions/1057085/](https://leetcode.com/problems/longest-palindromic-subsequence-ii/solutions/1057085/)

---

**Algo**
Bottom-up dp and specifically bottom-up dp as the top-down implemention has TLE. 

**Implementation**
```
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        dp = [[[0]*27 for _ in s] for _ in s] # n x n x 27 
        
        for i in reversed(range(len(s))):
            for j in range(i+1, len(s)):
                for k in range(27): 
                    if s[i] == s[j] != chr(k+96): 
                        dp[i][j][k] = 2 + dp[i+1][j-1][ord(s[i])-96]
                    else: 
                        dp[i][j][k] = max(dp[i+1][j][k], dp[i][j-1][k])
        return dp[0][-1][0]
```

**Analysis**
Time complexity `O(N^2)`
Space complexity `O(N^2)`

Caveat: The below top-down implementation results in TLE which is quite unfair from interview perspective. For algorithmic problems, we shouldn't be in a situation that bottom-up implementation works and yet top-down fails. 
```
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        
        @cache
        def fn(lo, hi, ch=""):
            """Return """
            if lo >= hi: return 0 
            if s[lo] == s[hi] != ch: return 2 + fn(lo+1, hi-1, s[lo])
            return max(fn(lo+1, hi, ch), fn(lo, hi-1, ch))
        
        return fn(0, len(s)-1)
```