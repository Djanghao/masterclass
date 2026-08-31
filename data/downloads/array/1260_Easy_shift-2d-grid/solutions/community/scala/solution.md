# Scala solution using modulo

**Author:** mariusandries25
**Votes:** 0
**Link:** [https://leetcode.com/problems/shift-2d-grid/solutions/1999190/](https://leetcode.com/problems/shift-2d-grid/solutions/1999190/)

---

I initially tried brute force, by doing the swap on each iteration, but at very high number of k far bigger than rows * columns, was needed a modulo.
The solution is O(n * m) iterations, far less than registering all intermediar swaps, where n = rows, m = columns.
This is doing direct positioning, the modulo is so powerfull.

```
def shiftGrid(grid: Array[Array[Int]], k: Int): List[List[Int]] = {
    val rows = grid.length
    val columns = grid(0).length
    val totalIterations = rows * columns

    val tempGrid : Array[Array[Int]] = Array.ofDim(rows, columns)
    val shortK = k % ( totalIterations )

    for( row <- 0 until rows ){
      for( column <- 0 until columns ){
        val newColumn = (column + shortK) % columns
        val newRow : Int = if( column + shortK < columns ) row else (row + 1 + ( ( shortK - ( columns - column) ) / columns )  ) % rows
        tempGrid(newRow)(newColumn) = grid(row)(column)
      }
    }

    tempGrid.map( subArray => subArray.toList ).toList
  }
```