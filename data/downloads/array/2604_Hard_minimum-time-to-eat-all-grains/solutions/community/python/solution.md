# Binary Search Practice - Python

**Author:** wxy0925
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-eat-all-grains/solutions/3357433/](https://leetcode.com/problems/minimum-time-to-eat-all-grains/solutions/3357433/)

---

```
"""
Treatment: Binary Search

We would like to find: min t such that can_finish(t) == True, in plain English, find
minimal time t such that the hens can eat up the grains.

This is a standard binary search paradigm. We will do:
    - define a boolean fn can_finish(t) to produce monotonicity/order
    - min t such that can_finish(t) is True
        - find proper search range, do thrinkage, and return proper value

Follow up Youtube channel `Code-Yao` for more binary search practices and problems.
"""
class Solution:
    def minimumTime(self, hens: List[int], grains: List[int]) -> int:
        
        # step-0 prep: sorting
        hens.sort()
        grains.sort()
        n, m = len(hens), len(grains)
        
        # step-1 define boolean fn: can_finish(t)
        # return if the hens can eat up grains within t units of time.
        
        def can_finish(t):
            start = 0 # init or leftmost grain index
            # check if there exist a hen that can reach on or beyond the rightmost grain after first eating left or right
            # i.e., the hens can eat up all the grain
            
            for h in hens:
                reach = t
                if grains[start] < h: # grain is in the left of the current hen
                    t_eat_left = h - grains[start]
                    if t_eat_left > t:
                        return False
                    reach = max(0, mid - 2 * t_eat_left, (mid - t_eat_left) // 2) 
                
                # h + reach is the rightmost position the current hen can go within t after eating
                start = bisect.bisect_right(grains, h + reach)
                if start >= m:
                    return True
            return False
    
        # step-2 binary search: find min t such that can_finish(t) == True
        
        # 2-1 search range [l, r]
        m_, M = min(hens[0], grains[0]), max(hens[-1], grains[-1]) # we have used m for length
        l = 0 # all positions of grains are with hens
        r = 2 * (M - m_) # this is 2X the largest index gap involed, r >= 2 * (M - m) will be fine 
        while l < r:
            mid = l + (r - l) // 2 # 2-2 thrinkage
            if can_finish(mid): # 2-3 this if block implies can_finish(r) will be always True, so return r
                r = mid
            else:
                l = mid + 1
        return r
```