# Easy solution using priority queue, beats 100% of submissions

**Author:** stefancomanita
**Votes:** 1
**Link:** [https://leetcode.com/problems/seat-reservation-manager/solutions/4254504/](https://leetcode.com/problems/seat-reservation-manager/solutions/4254504/)

---

# Approach
We keep track of the currentIndex/last in order seat number but also keep an unreserved priority queue.

When we attempt a reservation we first check if we have any unresed values and check if they are smaller than our current index (they should always be smaller).

Using a priority queue asures us that the smaller number is always returned first.

When we do an unreserved opperation we just add the unreserved value to the unreserved priority queue

# Code
```
  import java.util.{Collections, Comparator, PriorityQueue}
  
  class SeatManager(_n: Int) {

    private val max = _n
    private var currentIndex = 1
    private val unreserved = new PriorityQueue[Int]()

    def reserve(): Int = {

      if (!unreserved.isEmpty && unreserved.peek() < currentIndex) {

        return unreserved.poll()
      }

      val temp = currentIndex
      currentIndex += 1

      return temp
    }

    def unreserve(seatNumber: Int) {

      unreserved.offer(seatNumber)
    }
  }

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
```