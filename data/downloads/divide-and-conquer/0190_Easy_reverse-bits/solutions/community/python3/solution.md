# Python 3 (40ms) | Real BIT Manipulation Solution

**Author:** MrShobhit
**Votes:** 50
**Link:** [https://leetcode.com/problems/reverse-bits/solutions/1791099/](https://leetcode.com/problems/reverse-bits/solutions/1791099/)

---

```
class Solution:
    def reverseBits(self, n: int) -> int:
        res = 0
        for _ in range(32):
            res = (res<<1) + (n&1)
            n>>=1
        return res
```