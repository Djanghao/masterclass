# [Kotlin] Use a heap to pop meetings that end before the next meeting starts

**Author:** hiepit
**Votes:** 1
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/5103703/](https://leetcode.com/problems/meeting-rooms-ii/solutions/5103703/)

---

```kotlin
class Solution {
    fun minMeetingRooms(intervals: Array<IntArray>): Int {
        intervals.sortBy { it[0] } // sort by starting time

        val minHeap = PriorityQueue<Int>() // store end meetings time
        var peak = 0
        for ((s, e) in intervals) {
            while (minHeap.isNotEmpty() && minHeap.peek() <= s) {
                minHeap.poll() // Use poll() to remove the element
            }
            minHeap.offer(e) // Use add() to insert an element
            peak = maxOf(peak, minHeap.size)
        }
        return peak
    }
}
```
Complexity:
- Time: `O(NlogN)`
- Space: `O(N)`