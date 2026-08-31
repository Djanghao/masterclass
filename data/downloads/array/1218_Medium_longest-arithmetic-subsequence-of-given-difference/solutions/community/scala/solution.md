# Scala: Array of 2 * max value + 1 & foldLeft

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/4833672/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/4833672/)

---

# Code
```
object Solution {
  def longestSubsequence(arr: Array[Int], difference: Int): Int = {
    val MaxModVal = 10000
    val dp = Array.ofDim[Int](2 * MaxModVal + 1)

    arr.foldLeft(0) { (max, v) => 
      val ind = v + MaxModVal
      val prevInd = ind - difference
      dp(ind) = if (prevInd < 0 || 2 * MaxModVal < prevInd) 1 else dp(prevInd) + 1
      dp(ind).max(max)
    }
  }
}
```