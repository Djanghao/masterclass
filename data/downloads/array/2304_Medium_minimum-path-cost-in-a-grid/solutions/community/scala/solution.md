# Scala

**Author:** fairgrieve
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/2148918/](https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/2148918/)

---

```
object Solution {
  def minPathCost(grid: Array[Array[Int]], moveCost: Array[Array[Int]]): Int = grid.headOption match {
    case Some(row) => grid
      .iterator
      .zip(grid.iterator.drop(1))
      .foldLeft(row) {
        case (minCosts, (from, to)) => Array.tabulate(row.length) { i =>
          to(i) + Iterator.range(0, row.length).map(j => minCosts(j) + moveCost(from(j))(i)).min
        }
      }
      .minOption
      .getOrElse(0)
      
    case None => 0
  }
}
```