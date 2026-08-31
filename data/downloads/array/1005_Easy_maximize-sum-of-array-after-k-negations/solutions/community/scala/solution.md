# scala solution with span and split

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/5492971/](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/5492971/)

---

```scala
object Solution {
  def largestSumAfterKNegations(nums: Array[Int], k: Int): Int =
    val (t0,d0) = nums.sorted.span(_ < 0)
    val (t1,d1) = t0.splitAt(k)
    if(t1.length==k || d0.headOption.contains(0)) (t1.map(- _) ++ d1 ++ d0).sum
    else (t1.map(- _) ++ d1 ++ d0).sum + (if((k-t0.length)%2 == 0 ) 0 else -1) * 
      2 * List(t0.lastOption,d0.headOption).flatten.map(_.abs).min
}

```