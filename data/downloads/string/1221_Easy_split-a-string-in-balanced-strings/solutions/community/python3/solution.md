# Python one-line (99.31%)

**Author:** ye15
**Votes:** 46
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/412762/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/412762/)

---

Summary of algo:
1) set a flag to zero and loop through characters in string;
2) if char is `R`, add flag by 1; if char is `L`, subtract 1 from flag;
3) add 1 to counter whenever flag is 0.
One-line implementation utilizing accumulate function is below. 
```
from itertools import accumulate

class Solution:
    def balancedStringSplit(self, s: str) -> int:
        return list(accumulate(1 if c == "R" else -1 for c in s)).count(0)
```

Edited on 3/2/2021
```
class Solution:
    def balancedStringSplit(self, s: str) -> int:
        ans = prefix = 0
        for c in s: 
            prefix += 1 if c == "R" else -1
            if not prefix: ans += 1
        return ans 
```