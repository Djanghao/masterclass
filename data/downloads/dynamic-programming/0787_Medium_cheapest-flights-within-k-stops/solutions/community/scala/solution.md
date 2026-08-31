# Scala simple DP

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/4772194/](https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/4772194/)

---

# Code
```
object Solution {
  def findCheapestPrice(n: Int, flights: Array[Array[Int]], src: Int, dst: Int, k: Int): Int = {
    val InfCost = 1_000_001
    val dp0 = Array.fill[Int](n)(InfCost)
    dp0(src) = 0
    val dpK = (0 to k).foldLeft(dp0) { (dp, _) =>
      val nextDp = dp.clone
      flights.foreach { f => 
        val f1 = f(1)
        nextDp(f1) = nextDp(f1) min (dp(f(0)) + f(2))
      }
      nextDp
    }
    if (dpK(dst) == InfCost) -1 else dpK(dst)
  }
}
```