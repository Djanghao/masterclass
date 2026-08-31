# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/5417946/](https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/5417946/)

---

```scala
object Solution {
  def angleClock(hour: Int, minutes: Int): Double =
    lazy val hd = hour * (360.0/12) + ((360/12)*(minutes.toDouble/60))
    lazy val md = minutes * (360.0/60)
    (360.0+hd-md)%360.0 min (360.0+md-hd)%360.0
}
```