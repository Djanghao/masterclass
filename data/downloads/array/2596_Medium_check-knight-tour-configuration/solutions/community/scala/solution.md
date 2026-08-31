# scala oneliner with slide

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/5440980/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/5440980/)

---

```scala
object Solution {
  def checkValidGrid(grid: Array[Array[Int]]): Boolean =
    (grid(0)(0) == 0) &&
    (for(i <-grid.head.indices; j<-grid.indices) yield {grid(i)(j) -> Seq(i,j)})
    .sortBy(_._1).map(_._2).sliding(2,1)
    .forall(l => (l.head zip l.last).map(x=> (x._2 - x._1).abs).sorted == Seq(1,2))
}
```