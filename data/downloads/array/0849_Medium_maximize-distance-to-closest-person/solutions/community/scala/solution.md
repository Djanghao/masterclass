# Functional

**Author:** xrtm000
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/4959173/](https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/4959173/)

---

```
object Solution {
    def maxDistToClosest(seats: Array[Int]): Int = {
        val lengths = seats.mkString.split("1").map(_.length)
        val max     = lengths.max
        val left    = if (seats(0) == 0) lengths(0) else 0
        val right   = if (seats.last == 0) lengths.last else 0
        val mid     = if (max % 2 == 0) max / 2 else (max + 1) / 2
        left.max(right).max(mid)
    }
}
```