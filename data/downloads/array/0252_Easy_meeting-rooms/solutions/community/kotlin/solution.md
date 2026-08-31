# just a variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-rooms/solutions/6083652/](https://leetcode.com/problems/meeting-rooms/solutions/6083652/)

---

# Code
```kotlin []
class Solution {
    fun canAttendMeetings(intervals: Array<IntArray>): Boolean {
            intervals.sortBy { it[0] }
            return !(1..intervals.lastIndex).any { intervals[it-1][1] > intervals[it][0] } 
        }
}
```