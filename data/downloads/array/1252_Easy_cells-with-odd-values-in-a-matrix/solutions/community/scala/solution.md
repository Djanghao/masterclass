# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/3616428/](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/3616428/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(mn + k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m+n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def oddCells(m: Int, n: Int, indices: Array[Array[Int]]): Int = {
      val rows = Array.fill(m)(0)
      val cols = Array.fill(n)(0)
      for (index <- indices) {
        rows(index(0)) += 1
        cols(index(1)) += 1
      }
      var count = 0
      for (i <- 0 until m; j <- 0 until n)
        if ((rows(i) + cols(j)) % 2 != 0) count += 1
      count
    }
}
```