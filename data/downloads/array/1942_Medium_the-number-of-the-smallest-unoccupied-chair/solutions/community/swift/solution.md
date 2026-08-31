# Swift | Event line

**Author:** pagafan7as
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5897746/](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5897746/)

---

For this kind of "interval" problems, I recommend to treat all the events uniformly.

Here, we consider all the arrival and departure events in chronological order. On arrival, we grab the first (min) available chair from a minHeap of chairs, and on departure we release our chair.

When we reach the arrival event for ```targetFriend```, we are done and we return the grabbed chair.

**Complexity**
Time complexity: $O(n\\log n)$
Space complexity: $O(n)$

# Code
```swift []
import Collections

class Solution {
    func smallestChair(_ times: [[Int]], _ targetFriend: Int) -> Int {
        // Define as an "event" the arrival or departure of a friend.
        typealias Event = (friend: Int, type: EventType, time: Int)
        enum EventType { case arrival, departure }

        // Create the list of all events.
        var events = [Event]()
        for (i, time) in times.enumerated() {
            events.append((i, .arrival, time[0]))
            events.append((i, .departure, time[1]))
        }

        // Sort the events by increasing time.
        events.sort { $0.time == $1.time ? $0.type == .departure 
                                         : $0.time < $1.time }

        var chairMinHeap = Heap<Int>(0..<times.count)
        var chairForFriend = [Int: Int]()

        eventLoop: for event in events {
            switch (event.friend, event.type) {
                case (targetFriend, .arrival):
                    // We have arrived...
                    break eventLoop
                case (_, .arrival):
                    // Grab min chair.
                    chairForFriend[event.friend] = chairMinHeap.removeMin()
                case (_, .departure):
                    // Release chair.
                    chairMinHeap.insert(chairForFriend[event.friend]!)
            }
        }        

        return chairMinHeap.removeMin()
    }
}
```