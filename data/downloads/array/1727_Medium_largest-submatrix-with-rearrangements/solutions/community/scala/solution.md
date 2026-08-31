# [scala] fp + recursion + sorting

**Author:** leetcode08
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4333438/](https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4333438/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```scala
object Solution {
  def largestSubmatrix(matrix: Array[Array[Int]]): Int = {
    val m = matrix.size
    val n = matrix(0).size

    @annotation.tailrec
    def loop(i: Int, prevRow: Array[Int], answer: Int): Int =
      if (i == m)
        answer
      else {
        val currentRow = matrix(i).zipWithIndex
          .map { case (v, j) =>
            if (v != 0) v + prevRow(j)
            else 0
          }
        val sortedRow = currentRow.sortWith(_ > _)
        val newAnswer = answer max (0 until n).map { j =>
          sortedRow(j) * (j + 1)
        }.max

        loop(i + 1, prevRow = currentRow, answer = newAnswer)
      }

    loop(i = 0, prevRow = Array.fill(n)(0), answer = 0)
  }
}

```