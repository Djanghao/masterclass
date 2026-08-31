# [Python3] group-by-group

**Author:** ye15
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-number-of-texts/solutions/2017834/](https://leetcode.com/problems/count-number-of-texts/solutions/2017834/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/9aa0edb0815f3e0a75a47808e1690ca424f169e5) for solutions of weekly 292. 

```
class Solution:
    def countTexts(self, pressedKeys: str) -> int:
        MOD = 1_000_000_007 
        
        @cache 
        def fn(n, k): 
            """Return number of possible text of n repeated k times."""
            if n < 0: return 0
            if n == 0: return 1
            ans = 0
            for x in range(1, k+1): ans = (ans + fn(n-x, k)) % MOD
            return ans 
        
        ans = 1
        for key, grp in groupby(pressedKeys): 
            if key in "79": k = 4
            else: k = 3
            ans = (ans * fn(len(list(grp)), k)) % MOD 
        return ans 
```

Added a shorter implementation 
```
class Solution:
    def countTexts(self, pressedKeys: str) -> int:
        dp = [0] * (len(pressedKeys)+1)
        dp[0] = 1
        for i, ch in enumerate(pressedKeys):
            dp[i+1] = dp[i]
            if i and pressedKeys[i-1] == ch: 
                dp[i+1] += dp[i-1]
                if i >= 2 and pressedKeys[i-2] == ch: 
                    dp[i+1] += dp[i-2]
                    if i >= 3 and pressedKeys[i-3] == ch and ch in "79": dp[i+1] += dp[i-3]
            dp[i+1] %= 1_000_000_007
        return dp[-1]
```