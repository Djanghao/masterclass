# Using heap

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/4794431/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/4794431/)

---

```
import scala.collection.mutable.PriorityQueue

object Solution {
    def connectSticks(sticks: Array[Int]): Int = {
        val q = new PriorityQueue[Int]()(Ordering.by[Int, Int](- _))
        sticks.foreach(q.enqueue(_))
        var (newStick, cost) = (0, 0)
        while(q.size > 1){
            newStick = q.dequeue + q.dequeue
            cost += newStick
            q.enqueue(newStick)
        }
        cost
    }
}
```