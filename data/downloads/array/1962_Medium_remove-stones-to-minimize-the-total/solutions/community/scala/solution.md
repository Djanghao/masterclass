# Scala PriorityQueue Beats 100%

**Author:** krd4
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2960657/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2960657/)

---

# Code
```
import scala.collection.mutable.PriorityQueue
object Solution {
    def minStoneSum(piles: Array[Int], k: Int): Int = {
        var queue = PriorityQueue(piles: _*)
        for (i <- 1 to k) {
            queue = queue.addOne((queue.dequeue.toFloat / 2).ceil.toInt)

        }

        queue.toList.sum
    }
}
```