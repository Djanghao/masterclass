# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/3660895/](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/3660895/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(max(m,n)^3)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(max(m,n)^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def numSubmatrixSumTarget(matrix: Array[Array[Int]], target: Int): Int = {
      val m = matrix.length
      val n = matrix(0).length
      var count = 0

      for (i <- 0 until m; j <- 1 until n) matrix(i)(j) += matrix(i)(j - 1)

      for (i1 <- 0 until n; i2 <- i1 until n) {
        var sum = 0
        val map = scala.collection.mutable.Map[Int, Int](0 -> 1)
        for (j <- 0 until m) {
          sum += (if (i1 == 0) matrix(j)(i2) else matrix(j)(i2) - matrix(j)(i1 - 1))
          count += map.getOrElse(sum - target, 0)
          map(sum) = map.getOrElse(sum, 0) + 1
        }
      }
      count
    }
}
```