# [Python3] check diff

**Author:** ye15
**Votes:** 88
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/1108295/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/1108295/)

---


```
class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        diff = [[x, y] for x, y in zip(s1, s2) if x != y]
        return not diff or len(diff) == 2 and diff[0][::-1] == diff[1]
```