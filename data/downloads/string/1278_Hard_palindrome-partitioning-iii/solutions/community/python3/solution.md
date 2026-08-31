# [Python3] DP top-down & bottom-up

**Author:** ye15
**Votes:** 9
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iii/solutions/442012/](https://leetcode.com/problems/palindrome-partitioning-iii/solutions/442012/)

---

Math:
Define `dp[i][j]` as the minimal number of characters that one needs to change to divide the substring `s[i:]` when it can be divided into `j` non-empty disjoint substrings. The recursion eqution is 
`dp[i][j] = min(cost[i,l] + dp[l+1][j-1] for l in range(i, len(s)-j+1)` 
where `dp[i][1] = cost[i, len(s)-1]` and `dp[i][len(s)-i] = 0`. 

Implemenation 1: top-down implementation with memoization 
```
from functools import lru_cache

class Solution:
    def palindromePartition(self, s: str, k: int) -> int:
        
        @lru_cache(None)
        def cost(i, j=len(s)-1): 
            """Return cost of converting string[i:j+1] to palindrome"""
            return 0 if i >= j else cost(i+1, j-1) + (s[i]!=s[j])
        
        @lru_cache(None)
        def dp(i, j): 
            """Return minimal char change for string[i:] dividing into j substring
            dp(i, j) = min(cost(i, l) + dp(l+1, j) for l in range(i, len(s)-j))
            dp(i, 0) = cost(i)
            dp(i, len(s)-i) = 0 
            """
            if j == 1: return cost(i)
            return min((cost(i, l)+dp(l+1, j-1) for l in range(i, len(s)-j+1)), default=0)
        
        return dp(0, k)
```

Implementation 2: bottom-up
```
from functools import lru_cache

class Solution:
    def palindromePartition(self, s: str, k: int) -> int:
        
        @lru_cache(None)
        def cost(i, j=len(s)-1):
            return 0 if i >= j else cost(i+1,j-1) + (s[i] != s[j])
        
        ans = [cost(i) for i in range(len(s))]
        for j in range(k-1):
            for i in range(len(s)-j-1):
                ans[i] = min((ans[l+1] + cost(i, l) for l in range(i, len(s)-j-1)), default=0)
                
        return ans[0]
```