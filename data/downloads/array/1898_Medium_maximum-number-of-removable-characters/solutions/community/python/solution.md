# [Python] Binary Search

**Author:** OysterMax
**Votes:** 30
**Link:** [https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/1268520/](https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/1268520/)

---

**Idea**
Binary Search `k` in interval `[0, r)`, where `r` = `len(removable)`
For each `mid`, check if `removable[:mid+1]` could make `p` a subsequence of `s`.
If True, `k` could be larger, so we search in the right half; else, search in the left half.

**Complexity**
Time: `O((p+s+r) * logr)`
Space: `O(r)`
where `r` = `len(removable)`; `p` = `len(p)`; `s` = `len(s)`.

**Python**
```
class Solution:
    def maximumRemovals(self, s: str, p: str, removable: List[int]) -> int:
        
        def check(m):
            i = j = 0
            remove = set(removable[:m+1])
            while i < len(s) and j < len(p):
                if i in remove:
                    i += 1
                    continue
                if s[i] == p[j]:
                    i += 1
                    j += 1
                else:
                    i += 1
            
            return j == len(p)
            
                
        # search interval is [lo, hi)
        lo, hi = 0, len(removable)+1
        
        while lo < hi:
            mid = (lo + hi) // 2
            if check(mid):
                lo = mid + 1
            else:
                hi = mid
                
        return lo if lo < len(removable) else lo-1
```

**Optimization**
It is expensive to do `remove = set(removable[:m+1])` repeatedly, see [@AlkhanZi 's post](https://leetcode.com/problems/maximum-number-of-removable-characters/discuss/1268520/Python-Binary-Search/1389899) below on how to speed it up.
