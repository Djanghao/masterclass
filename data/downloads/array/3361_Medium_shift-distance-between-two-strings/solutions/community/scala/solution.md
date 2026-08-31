# scala prefix sum

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6114419/](https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6114419/)

---

```scala []
object Solution {
  def shiftDistance(s: String, t: String, nextCost: Array[Int], previousCost: Array[Int]): Long = {
    lazy val List(pfxn, pfxp) = List(nextCost, previousCost)
      .map(a => (a++a).scanLeft(0L)(_ + _))
    (s.iterator.map(_ - 'a') zip t.iterator.map(_ - 'a')).map{case (i0,j0) =>
      lazy val (dst0,dst2) = ((j0+26-i0)%26, 26 - (j0+26-i0)%26)
      lazy val (j1,i2) = (i0+dst0, j0+dst2)
      (pfxn(j1) - pfxn(i0)) min (pfxp(i2+1) - pfxp(j0+1))
    }.sum
  }
}
```