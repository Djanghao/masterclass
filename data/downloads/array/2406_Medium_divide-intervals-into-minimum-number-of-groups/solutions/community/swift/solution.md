# Swift | Event Line

**Author:** pagafan7as
**Votes:** 2
**Link:** [https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/5901401/](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/5901401/)

---

# Code
```swift []
class Solution {
    // Defines an "event" as the entering or exiting of an interval.
    // It helps to think of those as time intervals.
    struct Event: Comparable {
        enum EventType { case enter, exit }

        let time: Int
        let type: EventType

        static func <(lhs: Event, rhs: Event) -> Bool {
            lhs.time < rhs.time || lhs.time == rhs.time && lhs.type == .enter
        }
    }

    func minGroups(_ intervals: [[Int]]) -> Int {
        // Create the list of all events.
        var events = [Event]()
        for interval in intervals {
            events.append(Event(time: interval[0], type: .enter))
            events.append(Event(time: interval[1], type: .exit))
        }

        events.sort()

        // Count the maximum number of overlapping intervals.
        var res = 0
        var overlapCount = 0
        for event in events {
            switch event.type {
            case .enter: overlapCount += 1
            case .exit: overlapCount -= 1
            }
            res = max(res, overlapCount)
        }
        return res
    }
}
```