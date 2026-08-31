# [Python3] binary search

**Author:** ye15
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5753354/](https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5753354/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/49eb160eaf0d0c3b6bb97edea0f15ad8feb660b5) for solutions of weekly 414. 

```python
class Solution:
    def maxPossibleScore(self, start: List[int], d: int) -> int:
        start.sort()
        
        def fn(mid): 
            x = -inf
            for s in start: 
                x += mid
                if x > s+d: return False 
                x = max(x, s)
            return True 
        
        lo, hi = 0, 2_000_000_000
        while lo < hi: 
            mid = lo + hi + 1 >> 1
            if fn(mid): lo = mid
            else: hi = mid-1
        return lo 
```