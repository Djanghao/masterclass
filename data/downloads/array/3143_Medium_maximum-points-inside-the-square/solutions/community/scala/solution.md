# scala FP solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5424016/](https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5424016/)

---

```scala
object Solution {
  def maxPointsInsideSquare(points: Array[Array[Int]], s: String): Int =
    val x0 = (points.map(_.map(_.abs).max) zip s).sorted.iterator.toList
      .groupMap(_._1)(_._2).toList.sortBy(_._1)
    LazyList.unfold((x0,Set.empty[Char])) { case (l,aSet) =>
      lazy val bSet = aSet ++ l.head._2.distinct
      Option.when(l.nonEmpty && bSet.size == aSet.size + l.head._2.size) {
        (bSet.size, (l.tail, bSet))
      }}.lastOption.getOrElse(0)
}
```