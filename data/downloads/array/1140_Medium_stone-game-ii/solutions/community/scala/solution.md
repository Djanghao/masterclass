# Scala: DP (Tabulation)

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-ii/solutions/5663653/](https://leetcode.com/problems/stone-game-ii/solutions/5663653/)

---

# Code
```scala []
object Solution {
  def stoneGameII(piles: Array[Int]): Int = {
    val len = piles.length
    val dp = Array.ofDim[Int](len + 1, len + 1)
    val suffixSum = piles.scanRight(0)(_ + _)
    for {
      index <- len - 1 to 0 by -1
      _ = dp(index)(len) = suffixSum(index)
      maxTillNow <- len - 1 to 1 by -1
      x <- 1 to (2 * maxTillNow).min(len - index)
    }
      dp(index)(maxTillNow) = dp(index)(maxTillNow) max (suffixSum(index) - dp(index + x)(maxTillNow max x))

    dp(0)(1)
  }
}
```