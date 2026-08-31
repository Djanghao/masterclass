# Python 3   ||   3 lines,  recursion   ||   T/S: 98% / 98%

**Author:** Spaulding_
**Votes:** 20
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4519864/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4519864/)

---

```
class Solution:

    def minimumOperationsToMakeEqual(self, x: int, y: int) -> int:

        @lru_cache(None)
        def dp(x: int, y: int) -> int:

            if y - x >= 0: return y - x                     # increment x to x = y
                                                            # (edge case)
            
            return min( x-y,                                # decrement x to x = y
                                                           
                        dp(x// 5     , y) +  x % 5 +  1,    # decrement to mult of 5 (11)
                        dp(x//11     , y) +  x %11 +  1,    # and div by 5 (or 11) 
                        
                        dp((x+ 5)// 5, y) -  x % 5 +  6,    # increment to mult of 5 (11)
                        dp((x+11)//11, y) -  x %11 + 12 )   # and div by 5 (or 11) 

        return dp(x,y)
```
[https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/submissions/1294974921/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/submissions/1294974921/)



I could be wrong, but I think that time complexity is *O*(*H*) and space complexity is *O*(*H*), in which *H* ~ height in the tree. Worst-case is *H* = `abs(y - x)`.