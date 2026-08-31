# [Python3] math

**Author:** ye15
**Votes:** 18
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/1053645/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/1053645/)

---


```
class Solution:
    def maximumScore(self, a: int, b: int, c: int) -> int:
        a, b, c = sorted((a, b, c))
        if a + b < c: return a + b
        return (a + b + c)//2
```