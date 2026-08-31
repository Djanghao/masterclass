# scala binary search

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3270082/](https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3270082/)

---

# Code
```
object Solution {
  def minimumTime(time: Array[Int], totalTrips: Int): Long = {
    lazy val sorted = time.to(Vector).sorted
    def check(t: Long): Boolean = sorted.takeWhile(_ <= t.toLong).map(t.toLong / _).sum >= totalTrips
    def bs(lo: Long, hi: Long): Long = {
      lazy val mid = (hi+lo)>>1
      if(lo+1 >= hi) hi
      else if(check(mid)) bs(lo,mid)
      else bs(mid,hi)
    }
    bs(0L, sorted.last * totalTrips.toLong * sorted.size)
  }
}
```