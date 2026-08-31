# [Kotlin] Priority Queue Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1413490/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1413490/)

---

```
class Solution {
    fun maxEvents(events: Array<IntArray>): Int {
        events.sortWith(compareBy({ it[0] }, { it[1] }))
        val priorityQueue = PriorityQueue<IntRange>(compareBy { it.last })

        var res = 0
        var nextFreeDay = events[0][0]
        var nextEventIndex = 0

        while (nextEventIndex < events.size || priorityQueue.isNotEmpty()) {
            if (priorityQueue.isEmpty()) {
                nextFreeDay = events[nextEventIndex][0]
            }
            while (nextEventIndex < events.size && nextFreeDay in events[nextEventIndex][0]..events[nextEventIndex][1]) {
                priorityQueue.add(events[nextEventIndex][0]..events[nextEventIndex][1])
                ++nextEventIndex
            }
            while (priorityQueue.isNotEmpty() && nextFreeDay !in priorityQueue.peek()!!) {
                priorityQueue.poll()!!
            }
            if (priorityQueue.isNotEmpty()) {
                priorityQueue.poll()!!
                ++nextFreeDay
                ++res
            }
        }

        return res
    }
}
```