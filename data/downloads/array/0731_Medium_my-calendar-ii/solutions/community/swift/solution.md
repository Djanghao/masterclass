# ✅ Clean simple swift solution O(n)

**Author:** kulizhnikov
**Votes:** 2
**Link:** [https://leetcode.com/problems/my-calendar-ii/solutions/5839273/](https://leetcode.com/problems/my-calendar-ii/solutions/5839273/)

---

# Approach
We maintain two lists:
- A list for all events that have been booked.
- A separate list for overlapping intervals, which tracks the periods that have already been double-booked.

First, we check if the new booking overlaps with any interval in the overlaps list. If it does, the booking would create a triple overlap, so we return false.

We then check for overlaps between the new booking and any existing event in the events list. If an overlap is found, we add the overlapping portion to the overlaps list (since this portion is now double-booked).

If no triple overlap is found, we add the new event to the events list.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```swift []
final class MyCalendarTwo {
    var events: [(start: Int, end: Int)] = []
    var overlaps: [(start: Int, end: Int)] = []

    func book(_ start: Int, _ end: Int) -> Bool {
        for overlap in overlaps {
            guard max(overlap.start, start) >= min(overlap.end, end) else { return false }
        }

        for event in events where max(event.start, start) < min(event.end, end) {
            let overlapStart = max(event.start, start)
            let overlapEnd = min(event.end, end)
            overlaps.append((start: overlapStart, end: overlapEnd))
        }

        events.append((start: start, end: end))
        return true
    }
}
```