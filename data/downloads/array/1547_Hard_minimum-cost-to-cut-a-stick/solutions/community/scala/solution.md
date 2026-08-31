# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/3570612/](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/3570612/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^3)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minCost(n: Int, cuts: Array[Int]): Int = {
        val len = cuts.length
        val tmp = Array.ofDim[Int](len + 2)
        for (i <- 1 to len) tmp(i) = cuts(i - 1)
        tmp(len + 1) = n
        val res = tmp.sorted

        val dp = Array.ofDim[Int](len + 1, len + 1)
        for (i <- 0 to len; j <- 0 to len) dp(i)(j) = -1

        def cost(i: Int, j: Int): Int = {
          if (i > j) 0
          else if (dp(i)(j) != -1) dp(i)(j)
          else {
            var mini = Int.MaxValue
            for (k <- i to j) mini = math.min(mini, res(j + 1) - res(i - 1) + cost(i, k - 1) + cost(k + 1, j))
            dp(i)(j) = mini
            mini
          }
        }

        cost(1, len)
    }
}
```