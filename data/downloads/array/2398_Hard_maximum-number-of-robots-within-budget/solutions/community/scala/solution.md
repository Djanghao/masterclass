# [scala] - two pointers

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/2529418/](https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/2529418/)

---

```scala
import scala.collection.immutable.TreeMap

def maximumRobots(chargeTimes: Array[Int], runningCosts: Array[Int], budget: Long): Int = {
  val len = chargeTimes.length

  def go(i: Int, j: Int, max: Int, runningSum: Long, maxs: TreeMap[Int, Int]): Int = {
    val ji = j - i + 1
    val cost = maxs.lastOption.fold(0)(_._1) + ji * runningSum

    if (j + 1 >= len) if(cost > budget) max else math.max(max, ji)
    else {
      if (i > j || cost <= budget) {
        val charge = chargeTimes(j + 1)
        val nMaxs = maxs.updated(charge, maxs.getOrElse(charge, 0) + 1)
        go(i, j + 1, math.max(max , ji), runningSum + runningCosts(j + 1), nMaxs)
      }
      else {
        val charge = chargeTimes(i)
        val nMaxs = if(maxs(charge) == 1) maxs.removed(charge) else maxs.updated(charge, maxs(charge) - 1)
        go(i + 1, j, max, runningSum - runningCosts(i), nMaxs)
      }
    }
  }

  go(0, -1, 0, 0, TreeMap.empty)
}
```