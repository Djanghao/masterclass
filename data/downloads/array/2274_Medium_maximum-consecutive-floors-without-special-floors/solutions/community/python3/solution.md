# Python Simulation - Just sort the array special

**Author:** MokshitSurana
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/2039754/](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/2039754/)

---

```
class Solution:
    def maxConsecutive(self, bottom: int, top: int, special: list[int]) -> int:
        special.sort()
        res = special[0] - bottom
        
        for i in range(1, len(special)):
            res = max(res, special[i] - special[i - 1] - 1)
            
        return max(res, top - special[-1])
```