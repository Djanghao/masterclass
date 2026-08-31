# [Python 3] One liner

**Author:** vilchinsky
**Votes:** 31
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/344834/](https://leetcode.com/problems/largest-unique-number/solutions/344834/)

---

```
class Solution:
    def largestUniqueNumber(self, A: List[int]) -> int:        
        return max([-1] + [k for k,v in collections.Counter(A).items() if v == 1])
```