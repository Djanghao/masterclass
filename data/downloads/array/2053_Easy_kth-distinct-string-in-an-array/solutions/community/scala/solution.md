# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5590006/](https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5590006/)

---

```scala
object Solution {
  import Ordering.Implicits._
  def kthDistinct(arr: Array[String], k: Int): String =
    arr.toList.zipWithIndex.groupMap(_._1)(_._2).filter(_._2.size == 1)
    .toList.map(_.swap).sorted.map(_._2).drop(k-1).headOption.getOrElse("")
}
```