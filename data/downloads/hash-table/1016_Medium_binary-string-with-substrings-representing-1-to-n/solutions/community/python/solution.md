# 2 LINES ||| PYTHON EASY SOLUTION|| USING STRING

**Author:** thezealott
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/2841590/](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/2841590/)

---

```
class Solution:
    def queryString(self, s: str, n: int) -> bool:
        for i in range(1,n+1):
            if bin(i)[2:] not in s:return 0
        return 1