# Scala - O(N) time + O(1) space

**Author:** faustaleonardo
**Votes:** 1
**Link:** [https://leetcode.com/problems/min-cost-climbing-stairs/solutions/3650139/](https://leetcode.com/problems/min-cost-climbing-stairs/solutions/3650139/)

---

# Code
```
object Solution {
  def minCostClimbingStairs(cost: Array[Int]): Int = {
    var n1 = cost(0)
    var n2 = cost(1)
    
    for (i <- 2 until cost.length) {
      val curr = math.min(n1, n2) + cost(i)
      n1 = n2
      n2 = curr
    }

    math.min(n1, n2)
  }
}
```