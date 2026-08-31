# [Python] 2 Solutions / Easy to understand

**Author:** ayushi7rawat
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/1060254/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/1060254/)

---

Brute Force:
```
class Solution:
    def busyStudent(self, startTime: List[int], endTime: List[int], queryTime: int) -> int:
        count = 0
        for i in range(len(startTime)):
            if startTime[i] <= queryTime  <=endTime[i]:
                count += 1
        return count

```
One-liner:
```
class Solution:
    def busyStudent(self, s: List[int], e: List[int], q: int) -> int:
        return sum((s[i] <= q  <=e[i]) for i in range(len(s)))
```