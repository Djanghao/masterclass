# [C#] Clean | Sort | LINQ

**Author:** PJz41
**Votes:** 2
**Link:** [https://leetcode.com/problems/meeting-rooms/solutions/2939255/](https://leetcode.com/problems/meeting-rooms/solutions/2939255/)

---

# Approach
Sort by start time and check there are no overlapping meeting rooms by comparing previous end time with next start time.
# Code 
```
public class Solution {
    public bool CanAttendMeetings(int[][] intervals) {
        Array.Sort(intervals, (a, b) => a[0] - b[0]);
        return intervals
            .Zip(intervals.Skip(1), (a, b) => new { a, b })
            .All(p => p.a[1] <= p.b[0]);
    }
}
```
# Complexity
- Time complexity: $$O(N * LogN)$$
- Space complexity: $$O(1)$$