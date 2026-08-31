# scala SortedSet

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/5393113/](https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/5393113/)

---

```scala
object Solution {
  def minAbsoluteSumDiff(nums1: Array[Int], nums2: Array[Int]): Int =
    lazy val set1 = nums1.map(_.toLong).to(collection.immutable.SortedSet)
    lazy val x0 = (nums1.map(_.toLong)  zip nums2.map(_.toLong))
      .map{case (a,b) => ((a-b).abs.toLong, a.toLong, b.toLong)}.sorted.reverse
    lazy val x1 = x0.map{case (d,x1,x2) =>
      lazy val d1 = Seq(Some(x1), set1.maxBefore(x2+1), set1.minAfter(x2))
        .flatten.map(x=>(x-x2).abs).min
      d - d1
    }.max
    ((x0.map(_._1.toLong).sum - x1)%1_000_000_007).toInt
}
```