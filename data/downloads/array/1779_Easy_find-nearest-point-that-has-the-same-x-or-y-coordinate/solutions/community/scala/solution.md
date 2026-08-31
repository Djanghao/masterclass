# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/3210336/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/3210336/)

---

# Code
```
object Solution {
  def nearestValidPoint(x: Int, y: Int, points: Array[Array[Int]]): Int = {
    lazy val x0 = points.zipWithIndex.filter(_._1(0) == x).map{case (l,i) => (l(1) - y).abs -> i}
    lazy val x1 = points.zipWithIndex.filter(_._1(1) == y).map{case (l,i) => (l(0) - x).abs -> i}
    (x0 ++ x1).sortWith{case (a,b) => (a._1 < b._1) || ((a._1 == b._1) && (a._2 < b._2))}
    .headOption.map(_._2).getOrElse(-1)
  }
}
```