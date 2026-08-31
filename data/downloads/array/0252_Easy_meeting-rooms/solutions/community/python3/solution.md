# Python Sort

**Author:** tliu77
**Votes:** 18
**Link:** [https://leetcode.com/problems/meeting-rooms/solutions/509251/](https://leetcode.com/problems/meeting-rooms/solutions/509251/)

---

```
class Solution:
    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
        intervals.sort()
        for i in range(len(intervals) - 1):
            if intervals[i][1] > intervals[i+1][0]:
                return False
        return True
```