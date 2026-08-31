# Swift | Consider all the event points

**Author:** pagafan7as
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-best-non-overlapping-events/solutions/6126687/](https://leetcode.com/problems/two-best-non-overlapping-events/solutions/6126687/)

---

# Code
```swift []
class Solution {
    func maxTwoEvents(_ events: [[Int]]) -> Int {
        // Every event has 2 points: its start and its end.
        enum EventType: Int { case start = 1, end = 0 }
        typealias EventPoint = (type: EventType, time: Int, value: Int)

        // Construct the different event points, sorting them by time.
        let eventPoints = events
            .reduce(into: [EventPoint]()) {
                $0.append(EventPoint(type: .start, time: $1[0], value: $1[2]))
                $0.append(EventPoint(type: .end, time: $1[1] + 1, value: $1[2]))
            }
            .sorted { ($0.time, $0.type.rawValue) < ($1.time, $1.type.rawValue) }

        // Go through all the event points, updating the result.
        var bestValue = 0
        var res = 0
        for eventPoint in eventPoints {
            switch eventPoint.type {
            case .start:
                // If the event being started, combined with the best completed
                // event so far, improves the result, update the result.
                res = max(res, bestValue + eventPoint.value)
            case .end:
                // If the event just being completed is better than any
                // previous event, update "bestValue".
                bestValue = max(bestValue, eventPoint.value)
            }
        }
        return res
    }
}
```