# scala twoliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/5319285/](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/5319285/)

---

```scala
object Solution {
  def numberOfGoodSubarraySplits(nums: Array[Int]): Int =
    lazy val is = nums.toList.zipWithIndex.collect{case (a,i) if a == 1 => i}
    if(is.size <= 1) is.size else is.sliding(2,1)
      .foldLeft(1L){case (a,l) =>(a *(l.last-l.head))%1_000_000_007}.toInt
}
```