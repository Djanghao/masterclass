# scala solution with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/sparse-matrix-multiplication/solutions/4525648/](https://leetcode.com/problems/sparse-matrix-multiplication/solutions/4525648/)

---

Time Complexity: O(m * k * n) in the worst case, but typically less for sparse matrices due to the optimization of skipping zero elements.

Space Complexity: O(m * n) due to the space required to store the result matrix.

# Code
```
object Solution {
  def multiply(mat1: Array[Array[Int]], mat2: Array[Array[Int]]): Array[Array[Int]] = {
    val m = mat1.length
    val k = mat1(0).length
    val n = mat2(0).length

    // Initialize the result matrix with zeros
    val result = Array.ofDim[Int](m, n)

    for {
      i <- 0 until m
      j <- 0 until k if mat1(i)(j) != 0  // Only consider non-zero elements in mat1
    } {
      for {
        l <- 0 until n if mat2(j)(l) != 0  // Only consider non-zero elements in mat2
      } {
        // Perform multiplication and add to the result
        result(i)(l) += mat1(i)(j) * mat2(j)(l)
      }
    }

    result
  }
}

```