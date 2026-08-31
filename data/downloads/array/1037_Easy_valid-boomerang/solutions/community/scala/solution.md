# scala oneliners for tangent comparison

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-boomerang/solutions/5657660/](https://leetcode.com/problems/valid-boomerang/solutions/5657660/)

---

```scala
object Solution {
  import scala.util.chaining._
  def isBoomerang(points: Array[Array[Int]]): Boolean =
    (points.distinct.length == 3) &&
      points.sliding(2,1)
        .map{a => (a.last.head - a.head.head, a.last.last - a.head.last)}
        .toList.pipe(a => a.head._1 * a.last._2 != a.head._2 * a.last._1)

  def isBoomerang2(points: Array[Array[Int]]): Boolean =
    (points.map(a => (a.head, a.last)).distinct.length == 3) &&
      points.sliding(2,1)
        .map{a => (a.last.head - a.head.head, a.last.last - a.head.last)}
        .toList.pipe{
        case (a,b)::(c,d)::Nil => a*d != b*c
        case _ => ???
      }
}

```