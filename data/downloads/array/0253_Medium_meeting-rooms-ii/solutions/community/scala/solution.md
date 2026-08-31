# using priorityqueue

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/5834181/](https://leetcode.com/problems/meeting-rooms-ii/solutions/5834181/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nlogn)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```scala []
import scala.collection.mutable
object Solution {
  def minMeetingRooms(intervals: Array[Array[Int]]): Int = {
    val sorted=intervals.sortBy(_.head)
    val pq= new mutable.PriorityQueue[Int]()(Ordering.Int.reverse)
    sorted.foreach{interval=>
      if(pq.nonEmpty && pq.head<=interval.head) pq.dequeue()
        pq.addOne(interval.last)
    }
    pq.size
  }
}
```