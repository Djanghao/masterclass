# Seems not much Scala guys left out here. I'm doing also in Python now..

**Author:** niyodilxwes
**Votes:** 0
**Link:** [https://leetcode.com/problems/my-calendar-ii/solutions/5838538/](https://leetcode.com/problems/my-calendar-ii/solutions/5838538/)

---

# Intuition
The problem asks us to design a booking system where double bookings are allowed but triple bookings are not. My first thought was to use a data structure that can efficiently store and query intervals to check for overlaps. We can store two types of intervals: normal bookings and overlaps (double bookings). If a new booking creates a triple overlap, it is not allowed.

# Approach
1. **Two Sets for Bookings**: 
   - `bookings`: A sorted set to store the normal booking intervals.
   - `overlaps`: A sorted set to store intervals where two bookings overlap (double booking). These represent intervals that have already been booked twice.

2. **Triple Booking Check**: 
   - Before adding a new booking, we check if it would overlap with any interval in the `overlaps` set. If it does, this would result in a triple booking, and we reject the booking.

3. **Double Booking Creation**: 
   - After confirming that the new booking doesn't cause a triple booking, we check its overlap with any existing bookings. If there is an overlap, we add the overlapping interval to the `overlaps` set to represent a double booking.

4. **Insert the Booking**: 
   - Once we've handled any overlaps, we add the new booking to the `bookings` set.

# Complexity
- Time complexity:
  The time complexity for each `book` operation is $$O(n \\log n)$$, where `n` is the number of existing bookings. We use `range` queries to check overlaps in both the `bookings` and `overlaps` sets, and adding an interval to the set takes logarithmic time.

- Space complexity:
  The space complexity is $$O(n)$$, where `n` is the number of bookings. We store all the booking intervals and their overlaps.

# Code
```python

from sortedcontainers import SortedSet

class MyCalendarTwo:
    def __init__(self):
        # Sorted sets to store bookings and overlaps (double-booked intervals)
        self.bookings = SortedSet(key=lambda x: (x[0], x[1]))
        self.overlaps = SortedSet(key=lambda x: (x[0], x[1]))

    def book(self, start: int, end: int) -> bool:
        # Check if the new booking would cause a triple booking by overlapping with double-booked intervals
        for os, oe in self.overlaps.irange((float('-inf'), start), (end, float('inf'))):
            if max(start, os) < min(end, oe):
                return False  # Triple booking detected

        # Check for overlaps with existing bookings to create new double-booked intervals
        for bs, be in self.bookings.irange((float('-inf'), start), (end, float('inf'))):
            if max(start, bs) < min(end, be):
                overlap_start = max(start, bs)
                overlap_end = min(end, be)
                self.overlaps.add((overlap_start, overlap_end))

        # Add the new booking to the sorted set of bookings
        self.bookings.add((start, end))
        return True  # Booking successful



```

```scala []
import scala.collection.mutable.SortedSet

class MyCalendarTwo() {
  // Use lexicographical ordering for (Int, Int) tuples
  implicit val ordering: Ordering[(Int, Int)] = Ordering.Tuple2[Int, Int]

  // SortedSet to store bookings and overlaps
  val bookings = SortedSet[(Int, Int)]()     // (start, end) for normal bookings
  val overlaps = SortedSet[(Int, Int)]()     // (start, end) for double bookings

  // Function to book a new interval
  def book(start: Int, end: Int): Boolean = {
    // First, check if the new booking would cause a triple booking by overlapping with any of the double-booked intervals
    val overlappingWithDoubleBooking = overlaps.range((Int.MinValue, start), (end, Int.MaxValue)).exists {
      case (os, oe) => Math.max(start, os) < Math.min(end, oe)
    }
    
    if (overlappingWithDoubleBooking) {
      return false  // Triple booking detected
    }

    // Check for overlaps with the existing bookings to create new double-booked intervals
    bookings.range((Int.MinValue, start), (end, Int.MaxValue)).foreach { interval =>
      val (bs, be) = interval
      if (Math.max(start, bs) < Math.min(end, be)) {
        val overlapStart = Math.max(start, bs)
        val overlapEnd = Math.min(end, be)
        overlaps += ((overlapStart, overlapEnd))
      }
    }

    // Finally, add the new booking to the sorted set of bookings
    bookings += ((start, end))

    true  // Booking successful
  }
}
