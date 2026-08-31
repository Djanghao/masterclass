# Scala code

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/toeplitz-matrix/solutions/5182763/](https://leetcode.com/problems/toeplitz-matrix/solutions/5182763/)

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
import scala.util.control.Breaks._

object Solution {
  def isToeplitzMatrix(matrix: Array[Array[Int]]): Boolean = {
    val temp = matrix(0)(0)
    var result = true
    
    breakable {
      for (i <- 1 until matrix.length) {
        for (j <- 1 until matrix(0).length) {
          if (matrix(i - 1)(j - 1) != matrix(i)(j)) {
            result = false
            break
          }
        }
      }
    }
    
    result
  }
}

```