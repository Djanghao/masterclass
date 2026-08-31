# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-range-sum/solutions/6045418/](https://leetcode.com/problems/count-of-range-sum/solutions/6045418/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def countRangeSum(nums: Array[Int], lower: Int, upper: Int): Int = {
    def f(seq0: Seq[Long]): (Long,Seq[Long]) = 
      if(seq0.size<=1) (0L,seq0) else {
        lazy val mid = seq0.size / 2
        lazy val (seqLo,seqHi) = seq0.splitAt(mid)
        lazy val List((loCnt,seqLo1),(hiCnt,seqHi1)) = 
          seq0.splitAt(mid).pipe{case (l,h) => List(l,h).map(f)}
        lazy val seq = (seqLo1++seqHi1)
        lazy val cnt = Iterator.range(0,mid).scanLeft((0,mid,mid)){case ((prev,j0,k0),i0) =>
          lazy val a = LazyList.range(j0,seq.size).dropWhile(seq(_)-seq(i0) < lower)
            .headOption.getOrElse(seq.size)
          lazy val b = LazyList.range(k0,seq.size).dropWhile(seq(_)-seq(i0) < upper+1)
            .headOption.getOrElse(seq.size)
          (b-a,a,b)
        }.map(_._1.toLong).sum + loCnt + hiCnt
        (cnt, seq.sorted)
      }
    f(nums.scanLeft(0L){case (b,a) => b+a}.toVector)._1.toInt
  }
}
```