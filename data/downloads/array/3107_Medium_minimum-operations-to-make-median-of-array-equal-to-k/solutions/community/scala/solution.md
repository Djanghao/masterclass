# scala oneliner and 3 lines scala solution with span

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/4999875/](https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/4999875/)

---

```
object Solution {
  def minOperationsToMakeMedianK(nums: Array[Int], k: Int): Long =
    nums.sorted.zipWithIndex.map{case (n,i) =>
      if(i < nums.size/2) (n-k) max 0
      else if(i >= (nums.size/2 + 1)) (k-n) max 0
      else (n-k).abs
    }.foldLeft(0L)(_ + _)

  def minOperationsToMakeMedianK_01(nums: Array[Int], k: Int): Long = {
    lazy val (t0,d0) = nums.to(List).map(_.toLong).sorted.splitAt(nums.size / 2)
    lazy val (t1,d1) = d0.splitAt(1)
    t0.map(n => (n-k) max 0).sum + (t1.head-k).abs + d1.map(n => (k-n) max 0).sum
  }
}
```