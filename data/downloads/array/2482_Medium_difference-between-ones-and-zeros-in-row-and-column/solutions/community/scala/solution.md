# Nice solution with explanation, beats 100% of submissions

**Author:** stefancomanita
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4405766/](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4405766/)

---

# Intuition
We have a lot of duplicate work, we should avoid a brute force approach.

# Approach
We first loop all the rows and count all the ones and all the zeroes, after that we do the same for columns.

Now that the have the sum of ones and zeroes for all the rows and columns we create a result bidimensional array (we could have used the original array) and we populate it with the computed sum.

To compute the sums we loop the results array and at each index we set the corresponding sum value, by getting the row values and the columns values for the specific index.

# Code
```
object Solution {
    
    import scala.collection.mutable
    
    def onesMinusZeros(grid: Array[Array[Int]]): Array[Array[Int]] = {

    val rowsMap = new mutable.HashMap[Int, (Int, Int)]() //ones count, zero count
    val colsMap = new mutable.HashMap[Int, (Int, Int)]() //ones count, zero count

    for (rowId <- 0 until grid.length) {
      var ones = 0
      var zeroes = 0

      val row = grid(rowId)

      for (n <- row) {
        if (n == 1) {
          ones += 1
        }

        if (n == 0) {
          zeroes += 1
        }
      }

      rowsMap.put(rowId, (ones, zeroes))
    }

    for (colId <- 0 until grid.head.length) {

      var ones = 0
      var zeroes = 0

      for (row <- grid) {
        if (row(colId) == 1) {
          ones += 1
        }

        if (row(colId) == 0) {
          zeroes += 1
        }
      }

      colsMap.put(colId, (ones, zeroes))
    }

    val result = Array.ofDim[Int](grid.length, grid.head.length)

    for (i <- 0 until result.length) {

      for (j <- 0 until result.head.length) {

        val rows = rowsMap(i)
        val cols = colsMap(j)
        
        val sum = (rows._1 + cols._1) - (rows._2 + cols._2)
        
        result(i)(j) = sum
      }
    }

    result
  }
}
```