# 8 lines scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/5051653/](https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/5051653/)

---

```
object Solution {
  import scala.math.Ordering.Implicits._
  import scala.collection.immutable.TreeSet
  def largestSquareArea(bottomLeft: Array[Array[Int]], topRight: Array[Array[Int]]): Long =
    lazy val x0 = (bottomLeft.map(p=> p.head->p.last) zip topRight.map(p=> p.head->p.last)).to(TreeSet)
    x0.iterator.flatMap{r0 => x0.iteratorFrom(r0).to(List).drop(1)
      .takeWhile{r1 => (r0._2._1 > r1._1._1)}
      .collect {case r1 if (r0._1._2 < r1._2._2) && (r0._2._2 > r1._1._2) => List(
        (r0._2._1 min r1._2._1) - (r0._1._1 max r1._1._1),
        (r0._2._2 min r1._2._2) - (r0._1._2 max r1._1._2)
      ).map(_.abs).min}
    }.maxOption.map(len => len.toLong * len).getOrElse(0L)
}

```