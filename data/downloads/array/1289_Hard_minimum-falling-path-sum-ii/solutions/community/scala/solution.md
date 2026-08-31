# Scala: O(n*n)/O(1) in place finding 2 mins in row (735ms @2.13)

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5074925/](https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5074925/)

---

# Code
```
object Solution {
  def minFallingPathSum(grid: Array[Array[Int]]): Int = if (grid.length == 1) grid.head.head else {
    def findMinInds(row: Array[Int]): (Int, Int) =
      row.indices.foldLeft((0, 1)) {
        case ((minInd, nextMinInd), i) if row(i) < row(minInd) => (i, minInd)
        case ((minInd, nextMinInd), i) if row(i) < row(nextMinInd) && i != minInd => (minInd, i)
        case (mins, _) => mins
      }

    grid.reduceLeft { (sumRow, row) =>
      val (minInd, nextMinInd) = findMinInds(sumRow)
      val min = sumRow(minInd)
      for (i <- row.indices) row(i) += (if (i != minInd) min else sumRow(nextMinInd))
      row
    }.min
  }
}
```