# Python - one line

**Author:** Ante_
**Votes:** 1
**Link:** [https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5265685/](https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5265685/)

---

```
class Solution:
    def orArray(self, A):
        return [a|b for a, b in pairwise(A)]       
```