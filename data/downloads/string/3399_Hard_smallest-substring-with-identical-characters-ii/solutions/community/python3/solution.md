# [Python3] binary search

**Author:** ye15
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-substring-with-identical-characters-ii/solutions/6175380/](https://leetcode.com/problems/smallest-substring-with-identical-characters-ii/solutions/6175380/)

---


```
class Solution:
    def minLength(self, s: str, numOps: int) -> int:
        n = len(s)
        s = list(map(int, s))
        one = sum(abs(v - (i&1)) for i, v in enumerate(s))
        need = min(one, n-one)
        if min(one, n-one) <= numOps: return 1 
        
        def fn(x): 
            cnt = need = prev = 0
            for i, v in enumerate(s): 
                if i and prev != v: cnt = 0 
                cnt += 1
                prev = s[i]
                if cnt == x+1: 
                    if i+1 < n and v == s[i+1]: prev = 1^s[i]
                    need += 1
                    cnt = 1
            return need <= numOps
        
        lo, hi = 2, n
        while lo < hi: 
            mid = lo + hi >> 1
            if fn(mid): hi = mid
            else: lo = mid+1
        return lo 
```