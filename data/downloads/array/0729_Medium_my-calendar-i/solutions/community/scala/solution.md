# Calendar, sorting, pq same old same

**Author:** niyodilxwes
**Votes:** 1
**Link:** [https://leetcode.com/problems/my-calendar-i/solutions/5837881/](https://leetcode.com/problems/my-calendar-i/solutions/5837881/)

---

# Intuition
The problem asks us to implement a booking system where new events can be added if they do not overlap with any existing bookings. The first thought was to use a data structure that allows efficient range queries to check for overlaps with the existing intervals, and for this, a `SortedSet` can be used. By keeping the intervals sorted, we can efficiently check if a new interval overlaps with any previously booked intervals.

# Approach
1. **SortedSet**: We use a mutable `SortedSet` to store the booked intervals. The set is sorted by the interval end time first, and start time second. This ensures that for any new booking, we can efficiently find potential overlaps with the next or previous booking.
   
2. **Range Queries**: 
   - We use `rangeFrom` to find the first interval that starts after or at the same time as the new booking.
   - We use `rangeTo` to find the last interval that ends before or at the same time as the new booking.
   
3. **Check for Overlaps**: 
   - If the next interval starts before the new booking ends, there is an overlap.
   - If the previous interval ends after the new booking starts, there is an overlap.
   
   If no overlap is found, the new booking can be added to the set.

# Complexity
- Time complexity:
  The time complexity for each `book` operation is $$O(\\log n)$$ for insertion and $$O(\\log n)$$ for checking overlaps due to the efficient range queries and insertions supported by `SortedSet`, where `n` is the number of existing bookings.

- Space complexity:
  The space complexity is $$O(n)$$, where `n` is the number of bookings stored in the `SortedSet`.

# Code
```scala []
class MyCalendar() {

  import scala.collection.mutable
  import scala.math.Ordering

  // SortedSet to store the intervals (start, end) and sort by end time first, then by start time
  val sortedSet: mutable.SortedSet[(Int, Int)] = mutable.SortedSet()(Ordering.by[(Int, Int), (Int, Int)](t => (t._2, t._1)))

  def book(start: Int, end: Int): Boolean = {
    // Find the first booking that starts after or at the same time as the current booking
    val rangeFrom = sortedSet.rangeFrom((start, end))

    // Find the last booking that ends before or at the same time as the current booking
    val rangeTo = sortedSet.rangeTo((start, end))

    // Check if there's an overlap with the next booking
    if (rangeFrom.nonEmpty && rangeFrom.head._1 < end) {
      // Conflict with the next booking
      return false
    }

    // Check if there's an overlap with the previous booking
    if (rangeTo.nonEmpty && rangeTo.last._2 > start) {
      // Conflict with the previous booking
      return false
    }

    // No conflicts, book the new interval
    sortedSet += ((start, end))
    true
  }
}
