# Python | Clean and Simple Code | 9-ary number

**Author:** aryonbe
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-9/solutions/3232692/](https://leetcode.com/problems/remove-9/solutions/3232692/)

---

# Code
```
class Solution:
    def newInteger(self, n: int) -> int:
        res = []
        while n:
            res.append(n%9)
            n //= 9
        res.reverse()
        return int("".join(map(str,res)))
```