# Python 3 (three lines) (beats 100.00 %)

**Author:** junaidmansuri
**Votes:** 45
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/403688/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/403688/)

---

_Six Line Version:_
```
class Solution:
    def balancedStringSplit(self, S: str) -> int:
        m = c = 0
        for s in S:
            if s == 'L': c += 1
            if s == 'R': c -= 1
            if c == 0: m += 1
        return m


```
_Three Line Version:_
```
class Solution:
    def balancedStringSplit(self, S: str) -> int:
        m, c, D = 0, 0, {'L':1, 'R':-1}
        for s in S: c, m = c + D[s], m + (c == 0)
        return m
		
		
- Junaid Mansuri