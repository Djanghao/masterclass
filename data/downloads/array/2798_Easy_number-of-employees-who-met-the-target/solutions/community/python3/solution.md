# [Python] Simple 1 line

**Author:** wf5432
**Votes:** 13
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3836156/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3836156/)

---

# Code
```
class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        return sum(h >= target for h in hours)

```