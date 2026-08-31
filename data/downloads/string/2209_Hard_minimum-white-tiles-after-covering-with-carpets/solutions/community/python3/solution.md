# [Python3] dp

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/1874969/](https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/1874969/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/7e91381aab0f51486f380f703245463c99fed635) for solutions of biweekly 74. 

```
class Solution:
    def minimumWhiteTiles(self, floor: str, numCarpets: int, carpetLen: int) -> int:
        
        @cache
        def fn(i, n):
            """Return min while tiles at k with n carpets left."""
            if n < 0: return inf 
            if i >= len(floor): return 0 
            if floor[i] == '1': return min(fn(i+carpetLen, n-1), 1 + fn(i+1, n))
            return fn(i+1, n)
        
        return fn(0, numCarpets)
```

```
class Solution:
    def minimumWhiteTiles(self, floor: str, numCarpets: int, carpetLen: int) -> int:
        dp = [[0]*(1 + numCarpets) for _ in range(len(floor)+1)]
        for i in range(len(floor)-1, -1, -1): 
            for j in range(0, numCarpets+1): 
                if floor[i] == '1': 
                    dp[i][j] = 1 + dp[i+1][j] 
                    if j: 
                        if i+carpetLen >= len(floor): dp[i][j] = 0 
                        else: dp[i][j] = min(dp[i+carpetLen][j-1], dp[i][j])
                else: dp[i][j] = dp[i+1][j]
        return dp[0][numCarpets]
```