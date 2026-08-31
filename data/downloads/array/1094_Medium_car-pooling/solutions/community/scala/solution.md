# using sorting and priority queue

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/car-pooling/solutions/5707547/](https://leetcode.com/problems/car-pooling/solutions/5707547/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(NlogN) where N is trips
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```scala []
import scala.collection.mutable
object Solution {
  def carPooling(trips: Array[Array[Int]], capacity: Int): Boolean = {
    val pq = new mutable.PriorityQueue[Trip]()(CustomOrdering)
    isPossible(capacity, pq, trips.sortBy(x=>x(1)), 0)
  }

  private def isPossible(availability: Int, pq: mutable.PriorityQueue[Trip], trips: Array[Array[Int]], idx: Int): Boolean = {
    if (idx == trips.length) true
    else {
      val trip = Trip(trips(idx)(0), trips(idx)(1), trips(idx)(2))
      var emptySeats = 0
      while (pq.nonEmpty && pq.head.endKm <= trip.startKm) {
        emptySeats = emptySeats + pq.dequeue().passengers
      }
      val totalAvailability = availability + emptySeats
      if (totalAvailability < trip.passengers) false
      else {
        pq.addOne(trip)
        isPossible(totalAvailability - trip.passengers, pq, trips, idx + 1)
      }
    }
  }

  object CustomOrdering extends Ordering[Trip] {
    override def compare(x: Trip, y: Trip): Int = {
      if (x.endKm == y.endKm) y.passengers - x.passengers
      else y.endKm - x.endKm
    }
  }

  case class Trip(passengers: Int, startKm: Int, endKm: Int)

}
```