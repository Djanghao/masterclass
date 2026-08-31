# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-plus-sign/solutions/4357779/](https://leetcode.com/problems/largest-plus-sign/solutions/4357779/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def orderOfLargestPlusSign(n: Int, mines: Array[Array[Int]]): Int = {
      val grid = Array.fill(n, n)(1)
      for (mine <- mines) grid(mine(0))(mine(1)) = 0
      val left = Array.fill(n, n)(0)
      val right = Array.fill(n, n)(0)
      val up = Array.fill(n, n)(0)
      val down = Array.fill(n, n)(0)
      for (i <- 0 until n; j <- 0 until n) {
        if (j == 0 || grid(i)(j) == 0) left(i)(j) = grid(i)(j)
        else left(i)(j) = left(i)(j-1) + 1
        if (i == 0 || grid(i)(j) == 0) up(i)(j) = grid(i)(j)
        else up(i)(j) = up(i-1)(j) + 1
      }
      for (i <- n-1 to 0 by -1; j <- n-1 to 0 by -1) {
        if (j == n-1 || grid(i)(j) == 0) right(i)(j) = grid(i)(j)
        else right(i)(j) = right(i)(j+1) + 1
        if (i == n-1 || grid(i)(j) == 0) down(i)(j) = grid(i)(j)
        else down(i)(j) = down(i+1)(j) + 1
      }
      var res = 0
      for (i <- 0 until n; j <- 0 until n) 
        res = math.max(res, math.min(math.min(left(i)(j), right(i)(j)), math.min(up(i)(j), down(i)(j))))
      res
    }
}
```