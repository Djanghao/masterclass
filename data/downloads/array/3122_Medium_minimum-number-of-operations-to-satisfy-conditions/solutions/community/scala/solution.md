# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5077587/](https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5077587/)

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
object Solution {
  def minimumOperations(grid: Array[Array[Int]]): Int = {
    val m = grid.size
    val n = grid.head.size

    val dp = (0 until n).map { i =>
      val cnt = (0 until m).foldLeft(Array.fill(10)(0)) { (cnt, j) =>
        cnt(grid(j)(i)) += 1
        cnt
      }
      (0 until 10).map(j => m - cnt(j)).toArray
    }.toArray

    val dpp = (0 until n).foldLeft(Array.ofDim[Int](n, 10)) { (dpp, i) =>
      if (i == 0) dp(0).copyToArray(dpp(0))
      else {
        (0 until 10).map { j =>
          val min = (0 until 10).filter(_ != j).map(k => dpp(i - 1)(k)).min
          dpp(i)(j) = min + dp(i)(j)
        }
      }
      dpp
    }

    dpp(n - 1).min
  }
}
```