# [Python3] 1-line

**Author:** ye15
**Votes:** 9
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/2734341/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/2734341/)

---


```
class Solution:
    def haveConflict(self, event1: List[str], event2: List[str]) -> bool:
        return event1[0] <= event2[0] <= event1[1] or event2[0] <= event1[0] <= event2[1]
```