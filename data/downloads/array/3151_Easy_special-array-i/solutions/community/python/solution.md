# Python - one line

**Author:** Ante_
**Votes:** 3
**Link:** [https://leetcode.com/problems/special-array-i/solutions/5178720/](https://leetcode.com/problems/special-array-i/solutions/5178720/)

---

```
class Solution:
    def isArraySpecial(self, A):
        return all((a & 1) != (b & 1) for a, b in zip(A, A[1:]))

```