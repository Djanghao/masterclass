# Two Liner with explanation

**Author:** stupefy
**Votes:** 1
**Link:** [https://leetcode.com/problems/perform-string-shifts/solutions/2636197/](https://leetcode.com/problems/perform-string-shifts/solutions/2636197/)

---

```
class Solution:
    def stringShift(self, s: str, shift: List[List[int]]) -> str:
        # map (0,1) to (-1,1) with f(x)=-1+2x
        r = sum((-1+d*2)*l for (d, l) in shift) % len(s) # shift right by r 
        return s[-r:]+s[:-r]
```