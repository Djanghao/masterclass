# using two priorityQueues

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-rooms-iii/solutions/5848132/](https://leetcode.com/problems/meeting-rooms-iii/solutions/5848132/)

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
  def mostBooked(n: Int, meetings: Array[Array[Int]]): Int = {
    val ans = Array.ofDim[Int](n)
    val sorted = meetings.sorted(Ordering.by[Array[Int], Int](_.head).orElseBy(_.last))
    val meetingHeap = new mutable.PriorityQueue[(Long, Int)]()(Ordering.by[(Long, Int), Long](-_._1).orElseBy(-_._2))
    val roomsHeap = new mutable.PriorityQueue[Int]()(Ordering.Int.reverse)
    (0 until n).foreach(i => roomsHeap.addOne(i))
    sorted.foreach { interval =>
      while (meetingHeap.nonEmpty && meetingHeap.head._1 <= interval.head) {
        roomsHeap.addOne(meetingHeap.dequeue()._2)
      }
      val roomAllocated = if (roomsHeap.nonEmpty) {
        val roomNo = roomsHeap.dequeue()
        meetingHeap.addOne((interval.last, roomNo))
        roomNo
      } else {
        val lastMeeting = meetingHeap.dequeue()
        meetingHeap.addOne((lastMeeting._1 + interval.last - interval.head, lastMeeting._2))
        lastMeeting._2
      }
      ans.update(roomAllocated, ans(roomAllocated) + 1)
    }
    ans.zipWithIndex.maxBy(_._1)._2
  }
}
```