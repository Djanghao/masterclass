# Scala FP: 1 dim DP with short comments

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/4757784/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/4757784/)

---

# Code
```
object Solution {
  def canPartition(nums: Array[Int]): Boolean = {
    val sum = nums.sum
    if (sum % 2 != 0) false
    else {
      val sum2 = sum/2
      val dp = Array.ofDim[Boolean](sum2 + 1) // dp(j) == true (after each i step) if we may get sum from passed i nums = j
      dp(0) = true
      for (i <- 0 until nums.length; num = nums(i); j <- sum2 to num by -1)
        if (dp(j - num)) dp(j) = true // when diff=(j - num) already may by summed from previous i - 1 nums than j may be too
      dp(sum2)
    }
  }
}
```