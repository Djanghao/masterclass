# Scala solution with PriorityQueue

**Author:** KNfZywgEjP
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/6105967/](https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/6105967/)

---

# Code
```scala []
import scala.collection.mutable.PriorityQueue
object Solution {
    def findKthLargest(nums: Array[Int], k: Int): Int = {
        val pq = PriorityQueue.from(nums)
        val cloneList = pq.clone()
        Range(1, k).map(_ => cloneList.dequeue())
        cloneList.head
    }
}
```