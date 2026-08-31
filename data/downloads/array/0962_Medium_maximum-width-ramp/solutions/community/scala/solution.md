# scala monostack

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-width-ramp/solutions/5896727/](https://leetcode.com/problems/maximum-width-ramp/solutions/5896727/)

---

```scala []
object Solution {
  import math.Ordering.Implicits.infixOrderingOps
  def maxWidthRamp(nums: Array[Int]): Int = {
    lazy val stack = nums.iterator.zipWithIndex
      .scanLeft((Int.MaxValue -> nums.length)){case ((mx,i),(n,j)) =>
        if(n<mx) (n,j) else (mx,i)
      }.drop(1).distinct.toList.reverse
    nums.zipWithIndex.reverseIterator.scanLeft((0,stack)){case ((_,l),(n,i)) =>
      lazy val (t,d) = l.span(_._1 <= n)
      (t.lastOption.map(i - _._2).getOrElse(0), d)
    }.map(_._1).max
  }
}

```