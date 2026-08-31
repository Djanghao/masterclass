# [Python3] top-down dp

**Author:** ye15
**Votes:** 5
**Link:** [https://leetcode.com/problems/least-operators-to-express-number/solutions/1367268/](https://leetcode.com/problems/least-operators-to-express-number/solutions/1367268/)

---


```
class Solution:
    def leastOpsExpressTarget(self, x: int, target: int) -> int:
        
        @cache
        def fn(val): 
            """Return min ops to express val."""
            if val < x: return min(2*val-1, 2*(x-val))
            k = int(log(val)//log(x))
            ans = k + fn(val - x**k)
            if x**(k+1) < 2*val: 
                ans = min(ans, k + 1 + fn(x**(k+1) - val))
            return ans 
        
        return fn(target)
```