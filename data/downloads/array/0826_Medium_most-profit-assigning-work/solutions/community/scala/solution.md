# Scala FP: 2 expressions O((n + m) * log n)

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-profit-assigning-work/solutions/5331591/](https://leetcode.com/problems/most-profit-assigning-work/solutions/5331591/)

---

# Code
```
object Solution {
  def maxProfitAssignment(difficulty: Array[Int], profit: Array[Int], worker: Array[Int]): Int = {
    val maxProfit = difficulty.zip(profit).sorted.scanLeft((0, 0)) {
      case ((_, max), (diff, prof)) => (diff, max max prof)
    }.to(collection.immutable.SortedMap)
    worker.foldLeft(0)((sum, diff) => sum + maxProfit.maxBefore(diff + 1).fold(0)(_._2))
  }
}

```