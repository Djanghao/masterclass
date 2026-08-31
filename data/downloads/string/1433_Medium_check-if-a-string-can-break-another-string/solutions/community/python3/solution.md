# Python3 O(n) one pass solution - Check If a String Can Break Another String

**Author:** r0bertz
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/609613/](https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/609613/)

---

```
from collections import Counter

class Solution:
    def checkIfCanBreak(self, s1: str, s2: str) -> bool:
        c1 = Counter(s1)
        c2 = Counter(s2)
        diff = 0
        s = set()
        for i in range(26):
            c = chr(ord('a') + i)
            diff += c1[c] - c2[c]
            if diff:
                s.add(diff > 0)
        return len(s) < 2
```