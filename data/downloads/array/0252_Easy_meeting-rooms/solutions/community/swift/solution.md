# Swift

**Author:** RC12
**Votes:** 1
**Link:** [https://leetcode.com/problems/meeting-rooms/solutions/251888/](https://leetcode.com/problems/meeting-rooms/solutions/251888/)

---

```
    func canAttendMeetings(_ intervals: [Interval]) -> Bool {
        let start = intervals.map({$0.start}).sorted()
        let end = intervals.map({$0.end}).sorted()
        var i = 1, j = 0
        while i < start.count, j < end.count {
            if end[j] > start[i] {
                return false
            }
            i += 1
            j += 1
        }
        return true
    }
```