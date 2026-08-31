# simple Dfs with memoisation

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/6112955/](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/6112955/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(mn)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(mn)
# Code
```scala []
object Solution {
  def longestIncreasingPath(matrix: Array[Array[Int]]): Int = {
    val memo = Array.fill(matrix.length, matrix.head.length)(-1)
    matrix.indices.map { i =>
      matrix(i).indices.map { j =>
        getPathLength(i, j, matrix, memo) +1
      }.max
    }.max
  }

  val DIRECTIONS = List((-1, 0), (1, 0), (0, -1), (0, 1))

  private def getPathLength(i: Int, j: Int, matrix: Array[Array[Int]], memo: Array[Array[Int]]): Int = {
    if (memo(i)(j) != -1) memo(i)(j)
    else {
      memo(i)(j) = DIRECTIONS.map { direction =>
        val row = i + direction._1
        val col = j + direction._2
        if (matrix.isDefinedAt(row) && matrix(row).isDefinedAt(col) && matrix(row)(col) > matrix(i)(j))
          1 + getPathLength(row, col, matrix, memo)
        else 0
      }.maxOption.getOrElse(0)
      memo(i)(j)
    }
  }
}
```