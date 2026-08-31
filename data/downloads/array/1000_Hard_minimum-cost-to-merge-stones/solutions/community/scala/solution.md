# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/3651143/](https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/3651143/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^3/k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def mergeStones(stones: Array[Int], k: Int): Int = {
      val n = stones.length
      if ((n - 1) % (k - 1) != 0) -1
      else {
        val prefixSum = stones.scanLeft(0)(_ + _)
        val dp = Array.ofDim[Int](n, n)
        for (len <- k to n; i <- 0 to n - len) {
          val j = i + len - 1
          dp(i)(j) = (i until j by k - 1).map(m => dp(i)(m) + dp(m + 1)(j)).foldLeft(Int.MaxValue)(_ min _)
          if ((j - i) % (k - 1) == 0) dp(i)(j) += (prefixSum(j + 1) - prefixSum(i))
        }
        dp(0)(n - 1)
      }
    }
}
```