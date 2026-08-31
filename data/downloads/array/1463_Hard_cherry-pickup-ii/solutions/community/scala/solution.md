# Scala 2DP 575ms

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/cherry-pickup-ii/solutions/4711625/](https://leetcode.com/problems/cherry-pickup-ii/solutions/4711625/)

---

# Code
```
object Solution {
  def cherryPickup(grid: Array[Array[Int]]): Int = {
    val height = grid.length
    val width = grid.head.length
    val dp = Array.ofDim[Int](height + 1, width + 2, width + 2)
    var max = 0
    for {
      i <- 1 to height
      prevDP = dp(i - 1)
      r1 <- 1 to width
      r2 <- 1 to width
    } {
      val max3x3 = prevDP(r1 - 1)(r2 - 1) max prevDP(r1 - 1)(r2) max prevDP(r1 - 1)(r2 + 1) max
                  prevDP(r1)(r2 - 1)     max prevDP(r1)(r2)     max prevDP(r1)(r2 + 1) max
                  prevDP(r1 + 1)(r2 - 1) max prevDP(r1 + 1)(r2) max prevDP(r1 + 1)(r2 + 1)
      val takeR1 = if (r1 <= i) grid(i - 1)(r1 - 1) else 0
      val takeR2 = if (r2 > width - i) grid(i - 1)(r2 - 1) else 0
      val maxR = max3x3 + (if (r1 != r2) takeR1 + takeR2 else takeR1.max(takeR2))
      
      dp(i)(r1)(r2) = maxR
      if (max < maxR) max = maxR
    }
    // dp.foreach { d =>
    //   println(d.map(_.toList).mkString("", "\
", "\
"))
    // }
    max
  }
}
```