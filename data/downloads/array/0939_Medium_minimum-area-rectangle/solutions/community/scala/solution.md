# 10 lines scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-area-rectangle/solutions/5051062/](https://leetcode.com/problems/minimum-area-rectangle/solutions/5051062/)

---

```
object Solution {
  import scala.util.chaining._
  import scala.language.implicitConversions
  import collection.immutable.TreeSet
  def minAreaRect(points: Array[Array[Int]]): Int = {
    lazy val xs = points.map(_.head).groupMapReduce(i=>i)(_ => 1)(_ + _).filter(_._2 > 1).map(_._1).to(TreeSet)
    lazy val ys = points.map(_.last).groupMapReduce(i=>i)(_ => 1)(_ + _).filter(_._2 > 1).map(_._1).to(TreeSet)
    lazy val ps = points.collect{case (a) if xs.contains(a.head) && ys.contains(a.last) => a.head->a.last}.to(TreeSet)
    ps.toList.foldLeft(Option.empty[Int]){case (acc,(x0,y0)) =>
      lazy val m = ps.iteratorFrom((x0,y0)).drop(1).toList.collect{
        case (x1,y1) if ps.contains(x1,y0) && ps.contains(x0,y1) && (x0!=x1 && y0!=y1) => 
          ((x1-x0)*(y1-y0)).abs
      }.minOption
      List(m,acc).flatten.minOption
    }.getOrElse(0)
  }
}

```