# Scala using Floyd alg + 1 pass tailrec sum/break: O(n+m)/O(1)

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5542687/](https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5542687/)

---

# Code
```
object Solution {
  def minimumCost(source: String, target: String, original: Array[Char], changed: Array[Char], cost: Array[Int]): Long = {
    val INF = Int.MaxValue / 2
    val costMatrix = Array.fill[Int](26, 26)(INF)
    
    // Floyd
    for (i <- cost.indices; oi = original(i) - 'a'; ci = changed(i) - 'a') 
      costMatrix(oi)(ci) = costMatrix(oi)(ci) min cost(i)
    for (k <- 0 until 26; i <- 0 until 26 if i != k; j <- 0 until 26 if j != i) 
      costMatrix(i)(j) = costMatrix(i)(j) min (costMatrix(i)(k) + costMatrix(k)(j))

    @annotation.tailrec def sumMinCost(i: Int = 0, costSum: Long = 0): Long =
      if (i == source.length) costSum
      else if (source(i) == target(i)) sumMinCost(i + 1, costSum)
      else {
        val minCost = costMatrix(source(i) - 'a')(target(i) - 'a')
        if (minCost == INF) -1 else sumMinCost(i + 1, costSum + minCost)
      }

    sumMinCost()
  }
}
```