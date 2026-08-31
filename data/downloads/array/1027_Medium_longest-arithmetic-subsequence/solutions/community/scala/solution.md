# Scala: 2-dim DP 2 x foldLeft, O(n^2) & O(n^2)

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/4833976/](https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/4833976/)

---

# Code
```
object Solution {
  def longestArithSeqLength(nums: Array[Int]): Int = {
    val len = nums.length
    val MaxModVal = 500
    val dp = Array.ofDim[Int](len, 2 * MaxModVal + 1)

    (1 until len).foldLeft(1) { (maxI, i) =>
      maxI max (0 until i).foldLeft(0) { (maxJ, j) => 
        val diffInd = nums(i) - nums(j) + MaxModVal
        val nextLen = dp(j)(diffInd) + 1
        dp(i)(diffInd) = nextLen  
        maxJ max nextLen
      }
    } + 1
  }
}
```