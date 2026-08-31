# Scala DP

**Author:** soumensaha
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-vi/solutions/2263959/](https://leetcode.com/problems/jump-game-vi/solutions/2263959/)

---

```
object Solution {
  def maxResult(nums: Array[Int], k: Int): Int = {
    val dp = Array.ofDim[Int](nums.length)
    for (i <- nums.indices) {
      var max = Int.MinValue
      for (j <- 0 until (k min i))
        max = max max dp(i - j - 1)
      dp(i) = nums(i) + (if (max == Int.MinValue) 0 else max)
    }
    dp.last
  }
}

// Runtime: 7732 ms, faster than 50.00% of Scala online submissions for Jump Game VI.
// Memory Usage: 81.8 MB, less than 100.00% of Scala online submissions for Jump Game VI.
```