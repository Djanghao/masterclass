# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/burst-balloons/solutions/3629918/](https://leetcode.com/problems/burst-balloons/solutions/3629918/)

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
    def maxCoins(nums: Array[Int]): Int = {
      val n = nums.length
      val dp = Array.ofDim[Int](n+2, n+2)
      for (len <- 1 to n; i <- 1 to n-len+1) {
          val j = i+len-1
          for (k <- i to j) 
            dp(i)(j) = dp(i)(j) max (dp(i)(k-1) + dp(k+1)(j) + nums(k-1)* (if (i == 1) 1 else nums(i-2)) * (if (j == n) 1 else nums(j)))
      }
      dp(1)(n)
    }
}
```