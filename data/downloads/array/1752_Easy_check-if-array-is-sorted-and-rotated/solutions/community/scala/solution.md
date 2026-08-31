# scala split and span

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/5492870/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/5492870/)

---

```scala
object Solution {
  import scala.math.Ordering.Implicits.{infixOrderingOps, seqOrdering}
  def check(nums: Array[Int]): Boolean =
    val (x,i) = nums.zipWithIndex.reverseIterator
      .foldLeft((Int.MaxValue,Int.MaxValue)){case (a,b) => a min b}
    val (t0,d0) = nums.splitAt(i)
    val (t1,d1) = d0.reverse.span(_ == x)
    val x0 = (t1 ++ d1.reverse ++ t0)
    (x0 zip nums.sorted).forall{case (a,b) => a==b}
}
```