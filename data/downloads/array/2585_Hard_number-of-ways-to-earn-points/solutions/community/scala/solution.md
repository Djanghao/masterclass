# [scala] - bottom up DP

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3269070/](https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3269070/)

---

# Code
```
object Solution {
  def waysToReachTarget(target: Int, types: Array[Array[Int]]): Int = {
    val dp = Array.fill(types.length + 1)(new Array[Long](target + 1))
    dp(0)(target) = 1
    types.indices.foreach { i =>
      val Array(cnt, mark) = types(i)
      0.to(target).foreach { j =>
        val inds = 0.to(cnt).map(c => j + c * mark).takeWhile(_ <= target).map(dp(i)(_))
        dp(i + 1)(j) = inds.foldLeft(0L)((acc, ind) => (acc + ind) % 1000000007)
      }
    }
    dp.last.head.toInt
  }
}
```