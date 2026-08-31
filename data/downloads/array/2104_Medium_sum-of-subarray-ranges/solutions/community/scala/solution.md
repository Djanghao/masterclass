# 10 lines scala monostack

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subarray-ranges/solutions/5695597/](https://leetcode.com/problems/sum-of-subarray-ranges/solutions/5695597/)

---

```scala []
object Solution {
  def subArrayRanges(nums: Array[Int]): Long = nums.map(_.toLong).zipWithIndex
    .foldLeft((0L,List(Long.MinValue-> -1),List(Long.MaxValue-> -1))){
      case ((acc,mn,mx),(num,i0)) =>
        lazy val mn1 = (num,i0) +: mn.dropWhile(num <= _._1)
        lazy val mx1 = (num,i0) +: mx.dropWhile(num >= _._1)
        lazy val acc1 = acc +
          mx1.sliding(2,1).collect{ case List((a,i),(_,j)) => a*(i-j)}.sum -
          mn1.sliding(2,1).collect{ case List((a,i),(_,j)) => a*(i-j)}.sum
        (acc1, mn1, mx1)
    }._1
}
```