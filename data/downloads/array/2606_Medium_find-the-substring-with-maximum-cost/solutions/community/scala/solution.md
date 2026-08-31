# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/5534009/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/5534009/)

---

```scala
object Solution {
  import scala.util.chaining._
  def maximumCostSubstring(s: String, chars: String, vals: Array[Int]): Int =
    s.iterator.map((chars zip vals).toMap.withDefault(_ - 'a' + 1))
    .foldLeft((Int.MinValue,0)){case ((mx,prev), v) =>
      ((prev+v) max 0) pipe (next => (mx max next, next))
    }._1
  }
```