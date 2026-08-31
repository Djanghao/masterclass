# Python binary search solution (O(lgn)).

**Author:** OldCodingFarmer
**Votes:** 181
**Link:** [https://leetcode.com/problems/sqrtx/solutions/25061/](https://leetcode.com/problems/sqrtx/solutions/25061/)

---

```
class Solution(object):
    def mySqrt(self, x):
        l, r = 0, x
        while l <= r:
            mid = l + (r-l)//2
            if mid * mid <= x < (mid+1)*(mid+1):
                return mid
            elif x < mid * mid:
                r = mid - 1
            else:
                l = mid + 1
```