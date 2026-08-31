# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3650984/](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3650984/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(mn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(mn)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def countPaths(grid: Array[Array[Int]]): Int = {
      val mod = 1000000007
      val n = grid.length
      val m = grid(0).length
      val dp = Array.fill(n, m)(-1)

      def loop(i: Int, j: Int, prev: Int): Int = 
        if (i < 0 || j < 0 || i >= n || j >= m || grid(i)(j) <= prev) 0
        else if (dp(i)(j) != -1) dp(i)(j)
        else {
          dp(i)(j) = (1 + loop(i, j - 1, grid(i)(j)) + loop(i, j + 1, grid(i)(j)) + loop(i - 1, j, grid(i)(j)) + loop(i + 1, j, grid(i)(j))) % mod
          dp(i)(j)
        }

      var res = 0
      for (i <- 0 until n; j <- 0 until m) res = (res + loop(i, j, -1)) % mod
      res
    }
}
```