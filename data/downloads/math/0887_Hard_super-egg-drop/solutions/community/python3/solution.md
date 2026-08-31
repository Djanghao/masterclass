# [Python3] a few solutions

**Author:** ye15
**Votes:** 6
**Link:** [https://leetcode.com/problems/super-egg-drop/solutions/1468875/](https://leetcode.com/problems/super-egg-drop/solutions/1468875/)

---

**Approach 1 -- O(KNlogN)**
```
class Solution:
    def superEggDrop(self, k: int, n: int) -> int:
        
        @cache
        def fn(n, k):
            """Return min moves given n floors and k eggs."""
            if k == 1: return n
            if n == 0: return 0 
            lo, hi = 1, n + 1
            while lo < hi: 
                mid = lo + hi >> 1
                if fn(mid-1, k-1) < fn(n-mid, k): lo = mid + 1
                else: hi = mid 
            return 1 + max(fn(lo-1, k-1), fn(n-lo, k))
        
        return fn(n, k)
```

**Approach 2 -- O(KN)**
```
class Solution:
    def superEggDrop(self, k: int, n: int) -> int:
        dp = [[0]*(k+1) for _ in range(n+1) ] # (n+1) x (k+1)
        for i in range(n+1): dp[i][1] = i
        for j in range(k+1): dp[0][j] = 0

        for j in range(2, k+1): # j eggs
            x = 1
            for i in range(1, n+1): # i floors
                while x <= i and dp[i-x][j] > dp[x-1][j-1]: x += 1
                dp[i][j] = 1 + dp[x-1][j-1]
        return dp[n][k]
```

**Approach 3 -- O(KlogN)**
```
class Solution:
    def superEggDrop(self, k: int, n: int) -> int:
        
        @cache
        def fn(m, k): 
            """Return max floor reachable with m moves and k eggs."""
            if m == 0 or k == 0: return 0 
            return 1 + fn(m-1, k-1) + fn(m-1, k)
        
        return next(m for m in range(1, n+1) if fn(m, k) >= n)
```