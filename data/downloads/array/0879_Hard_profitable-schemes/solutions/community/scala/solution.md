# Scala Beats 100%

**Author:** fairgrieve
**Votes:** 1
**Link:** [https://leetcode.com/problems/profitable-schemes/solutions/748533/](https://leetcode.com/problems/profitable-schemes/solutions/748533/)

---

```
import scala.collection.mutable

object Solution {
  def profitableSchemes(g: Int, p: Int, groups: Array[Int], profits: Array[Int]): Int = {
    assert(groups.length == profits.length)
    val counts = mutable.IndexedSeq.tabulate(groups.length + 1, g + 1, p + 1) {
      case (0, _, 0) => 1
      case (0, _, _) => 0
      case _ => -1
    }
    for (i <- 1 to groups.length; j <- 0 to g; k <- 0 to p) {
      counts(i)(j)(k) = (groups(i - 1), profits(i - 1)) match {
        case (group, profit) if group <= j =>
          (counts(i - 1)(j - group)(math.max(k - profit, 0)) + counts(i - 1)(j)(k)) % 1000000007
        case _ =>
          counts(i - 1)(j)(k)
      }
    }
    counts(groups.length)(g)(p)
  }
}
```