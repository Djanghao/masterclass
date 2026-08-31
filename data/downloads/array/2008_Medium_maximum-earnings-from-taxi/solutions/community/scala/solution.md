# Scala DP with PriorityQueue

**Author:** maxmtmn
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/2619804/](https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/2619804/)

---

```
import scala.collection.mutable

object Solution {
    def maxTaxiEarnings(n: Int, rides: Array[Array[Int]]): Long = {
      val ridesByEnd = mutable.PriorityQueue.from(rides)(
        Ordering.by((item: Array[Int]) => item(1)).reverse
      )
      val maxAtPoint = Array.fill(n+1)(0L)
      (1 to n).foreach {
        v =>
          while(ridesByEnd.nonEmpty && ridesByEnd.head(1) == v) {
            ridesByEnd.dequeue() match {
              case Array(start, end, tip) =>
                val value = (end - start + tip)
                maxAtPoint(end) =
                // either continue prev ride or start one of new rides
                  (value + maxAtPoint(start)) max maxAtPoint(end)
            }
          }
          maxAtPoint(v) = maxAtPoint(v - 1) max maxAtPoint(v)
      }
      maxAtPoint(n)
    }
  }
  ```