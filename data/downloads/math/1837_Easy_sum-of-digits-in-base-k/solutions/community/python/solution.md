# Fast and Easy Python Solution

**Author:** PranavBhatt
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/2870259/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/2870259/)

---

```
class Solution:
    def sumBase(self, n: int, k: int) -> int:
        addition = 0
        while n != 0:
            addition += n % k
            n = n // k
        return addition
```