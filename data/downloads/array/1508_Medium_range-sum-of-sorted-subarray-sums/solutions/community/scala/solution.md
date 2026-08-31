# Scala FP: 4 lines with scan

**Author:** SerhiyShaman
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5584256/](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5584256/)

---

# Code
```
object Solution {
  def rangeSum(nums: Array[Int], n: Int, left: Int, right: Int): Int = {
    val len = nums.length
    val scan = nums.scanLeft(0)(_ + _)
    val sums = (for(i <- 0 until len; j <- i + 1 to len) yield scan(j) - scan(i)).sorted
    (((left - 1) to (right - 1)).foldLeft(0L)(_ + sums(_)) % 1_000_000_007).toInt
  }
}
```