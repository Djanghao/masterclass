# Scala Beats 100%

**Author:** fairgrieve
**Votes:** 3
**Link:** [https://leetcode.com/problems/bus-routes/solutions/743519/](https://leetcode.com/problems/bus-routes/solutions/743519/)

---

```
import scala.annotation.tailrec

object Solution {
  def numBusesToDestination(routes: Array[Array[Int]], s: Int, t: Int): Int = {
    val stopToBuses = routes.indices.flatMap(bus => routes(bus).distinct.map(_ -> bus)).groupMap(_._1)(_._2)

    @tailrec
    def helper(stops: Set[Int], takenBuses: Set[Int], numBuses: Int): Int = {
      if (stops.isEmpty) {
        -1
      } else if (stops.contains(t)) {
        numBuses
      } else {
        val buses = stops.flatMap(stopToBuses) -- takenBuses
        helper(buses.flatMap(routes(_)), takenBuses ++ buses, numBuses + 1)
      }
    }

    helper(Set(s), Set(), 0)
  }
}
```