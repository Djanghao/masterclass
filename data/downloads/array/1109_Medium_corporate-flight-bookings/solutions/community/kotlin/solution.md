# yet another variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/4566014/](https://leetcode.com/problems/corporate-flight-bookings/solutions/4566014/)

---

# Code
```
class Solution {
    fun corpFlightBookings(bookings: Array<IntArray>, n: Int): IntArray =
        bookings
            .fold(IntArray(n)) { r, b ->
                r[b[0]-1] += b[2]
                if (b[1]<n) r[b[1]] -=b[2]
                r }
            .also { r -> (1..r.lastIndex).forEach { r[it] += r[it-1] } }
}
```