# [Python3] top-down dp

**Author:** ye15
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/2196009/](https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/2196009/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/7a67de4e975be771355e048bf8dde4cf0906e360) for solutions of biweekly 81. 

```
class Solution:
    def distinctSequences(self, n: int) -> int:
        
        @lru_cache
        def fn(n, p0, p1): 
            """Return total number of distinct sequences."""
            if n == 0: return 1
            ans = 0
            for x in range(1, 7): 
                if x not in (p0, p1) and gcd(x, p0) == 1: ans += fn(n-1, x, p0)
            return ans % 1_000_000_007
        
        return fn(n, -1, -1)
```