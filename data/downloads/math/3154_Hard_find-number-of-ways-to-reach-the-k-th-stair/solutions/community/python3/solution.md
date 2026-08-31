# [Python3] top-down and bottom-up dp

**Author:** ye15
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5177135/](https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5177135/)

---

**top-down**
```
class Solution:
    def waysToReachStair(self, k: int) -> int:
        
        @cache
        def fn(x, jump, down): 
            """Return """
            if x > k+1: return 0
            ans = 0 
            if x == k: ans += 1
            ans += fn(x+pow(2, jump), jump+1, False)
            if not down and x: ans += fn(x-1, jump, True)
            return ans 
        
        return fn(1, 0, False)
```

**bottom-up**
```
class Solution:
    def waysToReachStair(self, k: int) -> int:
        n = int(log2(k+1))+4
        dp = [[[0]*2 for _ in range(n+1)] for _ in range(n)]
        for i in range(n-1, -1, -1): 
            for j in range(i+1, -1, -1): 
                x = pow(2, i)-j
                if x > k+1: dp[i][j][0] = dp[i][j][1] = 0 
                else: 
                    if x == k: dp[i+1][j][0] += 1
                    dp[i][j][0] = dp[i][j][1] = dp[i+1][j][0]
                    if x: dp[i][j][0] += dp[i][j+1][1]
        return dp[0][0][0]
```