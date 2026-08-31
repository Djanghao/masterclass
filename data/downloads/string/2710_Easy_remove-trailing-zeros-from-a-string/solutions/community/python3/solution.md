# Python3 Solution

**Author:** Motaharozzaman1996
**Votes:** 5
**Link:** [https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/3571226/](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/3571226/)

---


```
class Solution:
    def removeTrailingZeros(self, num: str) -> str:
        return num.rstrip('0')
```