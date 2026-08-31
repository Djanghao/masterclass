# C++ sort

**Author:** jianchao-li
**Votes:** 37
**Link:** [https://leetcode.com/problems/meeting-rooms/solutions/67782/](https://leetcode.com/problems/meeting-rooms/solutions/67782/)

---

Sort `intervals` according to `start` and check whether each two consecutive intervals are non-overlapping.

```cpp
class Solution {
public:
    bool canAttendMeetings(vector<Interval>& intervals) {
        sort(intervals.begin(), intervals.end(), [](Interval& l, Interval& r){return l.start < r.start;});
        for (int i = 1; i < intervals.size(); i++) {
            if (intervals[i].start < intervals[i - 1].end) {
                return false;
            }
        }
        return true;
    }
};
```