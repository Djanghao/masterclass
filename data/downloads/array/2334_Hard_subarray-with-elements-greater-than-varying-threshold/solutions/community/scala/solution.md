# scala monotonic stack

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/5354035/](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/5354035/)

---

```scala
object Solution {
  def validSubarraySize(nums: Array[Int], threshold: Int): Int =
    nums.iterator.zipWithIndex
      .foldLeft(List((-1,-1,-1)),-1){case ((l,acc),(n,i)) =>
        lazy val l0 = l.dropWhile(_._1 > n)
        lazy val k = l0.headOption.map(_._2+1).getOrElse(0)
        lazy val l1 = if(l0.nonEmpty && l.head._1 == n) l0 else (n,i,k) +: l0
        val acc1 = l1.map{case (m,_,j) => if((m min n)*(i-j+1L) > threshold) i-j+1 else -1}.max
        (l1, acc max acc1)
      }._2
}
```