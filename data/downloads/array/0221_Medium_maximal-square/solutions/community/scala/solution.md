# Scala dp solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximal-square/solutions/3185248/](https://leetcode.com/problems/maximal-square/solutions/3185248/)

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
    def maximalSquare(matrix: Array[Array[Char]]): Int = {
        if (matrix.isEmpty) 0
        else {
          val lenM = matrix.length
          val lenN = matrix.head.length
          var res = 0
          val acc = Array.ofDim[Int](lenM+1, lenN+1)
          for (i<-1 to lenM; j<-1 to lenN) {
            if (matrix(i-1)(j-1) == '1') {
              acc(i)(j) = math.min(math.min(acc(i)(j-1), acc(i-1)(j-1)),acc(i-1)(j)) + 1
              res = math.max(acc(i)(j), res)
            }
          }
          res * res
        }
    }
}
```