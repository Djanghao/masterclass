# [Swift] Easy Solution

**Author:** sairamkotha
**Votes:** 4
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/809056/](https://leetcode.com/problems/meeting-rooms-ii/solutions/809056/)

---

```
final class Solution {
    func minMeetingRooms(_ intervals: [[Int]]) -> Int {
        var startTimes = Array(repeating: 0, count: intervals.count)
        var endTimes = Array(repeating: 0, count: intervals.count)
        
        for (i, interval) in intervals.enumerated() {
            startTimes[i] = interval[0]
            endTimes[i] = interval[1]
        }
        startTimes = startTimes.sorted()
        endTimes = endTimes.sorted()
        var sPtr = 0
        var ePtr = 0
        var usedRooms = 0
        while sPtr < startTimes.count {
             if startTimes[sPtr] >= endTimes[ePtr] {
                ePtr += 1
                usedRooms -= 1
             }
            usedRooms += 1
            sPtr += 1
        }
        
        return usedRooms
    }
}
```