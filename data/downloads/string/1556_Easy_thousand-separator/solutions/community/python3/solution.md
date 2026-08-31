# Python 3 by reversing

**Author:** srushti22
**Votes:** 41
**Link:** [https://leetcode.com/problems/thousand-separator/solutions/805965/](https://leetcode.com/problems/thousand-separator/solutions/805965/)

---

```
class Solution:
    def thousandSeparator(self, n: int) -> str:
        s=str(n)
        s=s[::-1]
        res = '.'.join(s[i:i + 3] for i in range(0, len(s), 3))
        return res[::-1]
```