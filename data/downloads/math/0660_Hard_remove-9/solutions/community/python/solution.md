# Same as base 9 number system

**Author:** theabbie
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-9/solutions/5917110/](https://leetcode.com/problems/remove-9/solutions/5917110/)

---

```
class Solution:
    def newInteger(self, n: int) -> int:
        d = []
        while n:
            d.append(n % 9)
            n //= 9
        d.reverse()
        res = 0
        for x in d:
            res = 10 * res + x
        return res
```