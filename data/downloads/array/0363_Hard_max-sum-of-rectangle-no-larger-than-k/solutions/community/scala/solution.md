# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/3666887/](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/3666887/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^4)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def maxSumSubmatrix(matrix: Array[Array[Int]], k: Int): Int = {
        val rows = matrix.length
        val cols = matrix(0).length
        val prefixSum = Array.ofDim[Int](rows + 1, cols + 1)

        for (r <- 0 until rows;c <- 0 until cols)
          prefixSum(r + 1)(c + 1) = prefixSum(r)(c + 1) + prefixSum(r + 1)(c) - prefixSum(r)(c) + matrix(r)(c)

        var max = Int.MinValue

        for (rowSize <- 0 until rows; colSize <- 0 until cols; rStart <- 0 until rows - rowSize;cStart <- 0 until cols - colSize) {
          val sum = prefixSum(rStart + rowSize + 1)(cStart + colSize + 1) + prefixSum(rStart)(cStart) - prefixSum(rStart)(cStart + colSize + 1) - prefixSum(rStart + rowSize + 1)(cStart)
          if (sum == k) max = k
          else if (sum < k) max = math.max(max, sum)
        }

        max
    }
}
```