# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/5388409/](https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/5388409/)

---

```scala
object Solution {
  def maximizeSquareArea(m: Int, n: Int, hFences: Array[Int], vFences: Array[Int]): Int = 
    lazy val hs = 1 +: hFences.sorted :+ m
    lazy val vs = 1 +: vFences.sorted :+ n
    lazy val vSet = (for(a <- vs; b <- vs; if a<b) yield {b-a}).toSet
    (for(a <- hs; b <- hs.reverse; if a<b) yield {b-a}).toList.distinct.sortBy(- _)
      .find(vSet.contains).map(x => (x.toLong*x)%1_000_000_007).getOrElse(-1L).toInt
}
```