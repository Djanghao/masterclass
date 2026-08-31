# easy to understand python

**Author:** pheobhe
**Votes:** 21
**Link:** [https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/1228893/](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/1228893/)

---

```
class Solution:
    def checkZeroOnes(self, s: str) -> bool:
        s1 = s.split('0')
        s0 = s.split('1')
        r1 = max([len(i) for i in s1])
        r0 = max([len(i) for i in s0])
        return r1>r0
```