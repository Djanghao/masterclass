# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5939159/](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5939159/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def maximumTotalSum(maximumHeight: Array[Int]): Long =
    maximumHeight.to(List).sorted.reverseIterator
      .scanLeft(Int.MaxValue){case (b,a) => (b-1) min a}.drop(1)
      .scanLeft(0L,Int.MaxValue){case ((acc,_),a) => (acc+a,a)}
      .drop(maximumHeight.length).toList.head
      .pipe{case (acc,min) => Option.when(min>0)(acc)}.getOrElse(-1L)
}
```