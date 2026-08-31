# Scala Code

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solutions/5238609/](https://leetcode.com/problems/minimum-cost-for-tickets/solutions/5238609/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.collection.mutable.ArrayBuffer

object Solution {
  def mincostTickets(days: Array[Int], costs: Array[Int]): Int = {
    val n = days.length
    val t = Array.fill(366)(-1)
    val costsBuffer = costs.toBuffer

    def solve(idx: Int): Int = {
      if (idx >= n)
        return 0 

      if (t(idx) != -1)
        return t(idx)

      val cost1 = costsBuffer(0) + solve(idx + 1)

      val i = (idx until n).find(i => days(i) >= days(idx) + 7).getOrElse(n)
      val cost7 = costsBuffer(1) + solve(i)

      val j = (idx until n).find(j => days(j) >= days(idx) + 30).getOrElse(n)
      val cost30 = costsBuffer(2) + solve(j)

      t(idx) = List(cost1, cost7, cost30).min
      t(idx)
    }

    solve(0)
  }
}

```