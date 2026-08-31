# Kotlin solution

**Author:** csc156
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/4490574/](https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/4490574/)

---

```
fun firstCompleteIndex(arr: IntArray, mat: Array<IntArray>): Int {
    val numRows: Int = mat.size
    val numCols: Int = mat.first().size
    
    val matrixLocations = HashMap<Int, Pair<Int, Int>>(numRows * numCols)
    for (row: Int in 0 until numRows) {
        for (col: Int in 0 until numCols) {
            matrixLocations[mat[row][col]] = Pair(row, col)
        }
    }
    
    val rowPaintedCellCounts = IntArray(size = numRows)
    val colPaintedCellCounts = IntArray(size = numCols)

    return arr
        .indices
        .first {
            val (row: Int, col: Int) = matrixLocations.getValue(arr[it])
            ++rowPaintedCellCounts[row] == numCols || ++colPaintedCellCounts[col] == numRows
        }
}
```