# Python2.7 (3 solutions: Recursive, Classic, Pythonic)

**Author:** viakondratiuk
**Votes:** 135
**Link:** [https://leetcode.com/problems/reverse-string/solutions/80946/](https://leetcode.com/problems/reverse-string/solutions/80946/)

---

```
class Solution(object):
    def reverseString(self, s):
        l = len(s)
        if l < 2:
            return s
        return self.reverseString(s[l/2:]) + self.reverseString(s[:l/2])


class SolutionClassic(object):
    def reverseString(self, s):
        r = list(s)
        i, j  = 0, len(r) - 1
        while i < j:
            r[i], r[j] = r[j], r[i]
            i += 1
            j -= 1

        return "".join(r)

class SolutionPythonic(object):
    def reverseString(self, s):
        return s[::-1]
```