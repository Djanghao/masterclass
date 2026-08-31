# Bottom-up Approach || Scala

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/5234047/](https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/5234047/)

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
import scala.util.Sorting

object Solution {
  def findLongestChain(pairs: Array[Array[Int]]): Int = {
    val n = pairs.length
    Sorting.quickSort(pairs)(Ordering.by((pair: Array[Int]) => pair(0)))

    val dp = Array.fill(n)(1)
    var maxL = 1

    for (i <- 0 until n) {
      for (j <- 0 until i) {
        if (pairs(j)(1) < pairs(i)(0)) {
          dp(i) = math.max(dp(i), dp(j) + 1)
          maxL = math.max(maxL, dp(i))
        }
      }
    }

    maxL
  }
}

```