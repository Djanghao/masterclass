# Scala FP: max of non-rotated & rotated by the index of max negative subsequence O(n)

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/4656828/](https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/4656828/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
object Solution {
  def maxSubarraySumCircular(nums: Array[Int]): Int = {
    val negSums = nums.scanLeft(0)((s, v) => if (s - v < 0) 0 else s - v)
    val negMax = negSums.max
    val zeroInd = negSums.indexOf(negMax) - 1

    val rotNums = nums.drop(zeroInd + 1) ++ nums.take(zeroInd + 1)
    val max = (rotNums.scanLeft(0)((s, v) => if (s + v < 0) 0 else s + v).max).max(nums.scanLeft(0)((s, v) => if (s + v < 0) 0 else s + v).max)
    if (max == 0) nums.max else max
  }
}
```