# [Python3] dp & bitmasking

**Author:** ye15
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/609386/](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/609386/)

---

Algorithm:
Define function `fn(h, mask)` to indicate the number of ways to wear `h` (starting from 0) to last hat among people whose availability is indicated by set bit in mask. 

Implementation (time complexity `O(40 * 2^10)` | space complexity `O(40 * 2^10)` 
```
from functools import lru_cache

class Solution:
    def numberWays(self, hats: List[List[int]]) -> int:
        ppl = dict() # mapping : hat -> people 
        for i, hat in enumerate(hats):
            for x in hat: ppl.setdefault(x, []).append(i)
                
        @lru_cache(None)
        def fn(h, mask):
            """Return the number of ways to wear h to last hats among people whose 
            availability is indicated by mask"""
            if mask == (1 << len(hats)) - 1: return 1 # # set bits = # people 
            if h == 40: return 0                      # if used all hat, 
            ans = fn(h+1, mask) 
            for p in ppl.get(h+1, []):       # loop through all people preferring the hat
                if mask & (1 << p): continue # if taken, continue
                mask |= 1 << p               # set bit
                ans += fn(h+1, mask)
                mask ^= 1 << p               # reset bit
            return ans % 1_000_000_007
        
        return fn(0, 0)
```