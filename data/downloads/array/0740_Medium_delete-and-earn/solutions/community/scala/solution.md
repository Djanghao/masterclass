# Scala Frequencies + Sort + FoldLeft

**Author:** jkalmeij
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/1820958/](https://leetcode.com/problems/delete-and-earn/solutions/1820958/)

---

Equivalent of approach 4 (see solution).

```scala
object Solution {
  def deleteAndEarn(nums: Array[Int]): Int = {
    val frequency = nums.groupMapReduce(identity)(_ => 1)(_ + _)
    frequency.keySet.toSeq.sorted.foldLeft((0, 0, 0)) {
      case ((lagMax, max, prev), n) =>
        val payout = frequency(n) * n
        if (prev + 1 == n) (max, Math.max(lagMax + payout, max), n)
        else (max, max + payout, n)
    }._2
  }
}
```