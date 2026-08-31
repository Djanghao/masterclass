# Easy Python Solution

**Author:** Vistrit
**Votes:** 78
**Link:** [https://leetcode.com/problems/find-the-difference/solutions/1751493/](https://leetcode.com/problems/find-the-difference/solutions/1751493/)

---

```
def findTheDifference(self, s: str, t: str) -> str:
        for i in t:
            if s.count(i) != t.count(i):
                return i
```