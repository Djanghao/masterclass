# [Python] Simple Solution

**Author:** 101leetcode
**Votes:** 24
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/698327/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/698327/)

---

```
class Solution:
    def xorOperation(self, n: int, start: int) -> int:
        ## RC ##
        ## APPROACH : MATH ##
        res = 0
        for i in range(n):
            res ^= start + 2 * i
        return res
```