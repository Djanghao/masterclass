# Backtracking in Python

**Author:** kryuki
**Votes:** 3
**Link:** [https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/1786073/](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/1786073/)

---

Split the input string `s` into possible pieces, and check recursively when it's 1 smaller than the previous value.
Note that the string must be split into two or more pieces, so I added an argument `parts` to manage the number of split pieces.

```
import math

class Solution:
    def splitString(self, s: str) -> bool:
        def rec(idx, parts, prev_val):
            if idx == L:
                return parts >= 2
            
            for i in range(idx, L):
                num = int(s[idx : i + 1])
                if prev_val == math.inf or num == prev_val - 1:
                    if rec(i + 1, parts + 1, num):
                        return True
            return False
        
        L = len(s)
        return rec(0, 0, math.inf)
```