# Python solution using lambda function || easy to understand for begineers

**Author:** mohitsatija
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/3097423/](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/3097423/)

---

```
from math import floor
class Solution:
    def waysToBuyPensPencils(self, total: int, cost1: int, cost2: int) -> int:
        ans = 0
        y = lambda x: (total-x*cost1)/cost2
        for i in range(total+1):
            c = floor(y(i))
            if c>=0:
                ans += c+1
        return ans
```