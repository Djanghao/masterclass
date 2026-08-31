# Python | groupby | Easy Solution

**Author:** aryonbe
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/3302130/](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/3302130/)

---

# Code
```
from itertools import groupby
class Solution:
    def isDecomposable(self, s: str) -> bool:
        twocnt = 0
        onecnt = 0
        groups = groupby(s)
        for e,v in groups:
            curl = len(list(v))
            if curl%3 == 2:
                twocnt += 1
            elif curl%3 == 1:
                onecnt += 1
        return onecnt == 0 and twocnt == 1

```