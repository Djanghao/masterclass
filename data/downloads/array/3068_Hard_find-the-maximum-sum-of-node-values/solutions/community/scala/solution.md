# Scala FP: sorting (actually even unnecessary), not using edges

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5178286/](https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5178286/)

---

# Code
```
object Solution {
  def maximumValueSum(nums: Array[Int], k: Int, edges: Array[Array[Int]]): Long = {
    val nProfit = nums.map(n => n -> ((n ^ k) - n)).sortBy(-_._2)
    val evenCount = nProfit.count(_._2 > 0) / 2 * 2
    val xorCount = if (evenCount + 2 <= nums.length && nProfit(evenCount)._2 + nProfit(evenCount + 1)._2 > 0) evenCount + 2 else evenCount

    nProfit.indices.foldLeft(0L)((sum, i) => sum + (if (i < xorCount) nProfit(i)._1 ^ k else nProfit(i)._1))
  }
}
```