# scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/4367266/](https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/4367266/)

---

The class NumMatrix is designed to handle multiple queries of the following types:

1. Update the value of a cell in the matrix.
2. Calculate the sum of the elements of the matrix inside a rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

In the constructor of the NumMatrix class, we iterate over each row of the input matrix. For each row, we iterate over each column starting from the second column (index 1). For each cell, we add the value of the cell to the left to the current cell. This operation transforms the input matrix into a cumulative sum matrix, where each cell stores the sum of the values in the same column up to that cell.

The update method updates the value of a cell in the original matrix and all corresponding cells in the cumulative sum matrix. It first calculates the original value of the cell, then calculates the difference between the original value and the new value. It then subtracts this difference from all cells in the same column to the right of the updated cell.

The sumRegion method calculates the sum of the elements in the rectangle defined by the upper left corner (row1, col1) and the lower right corner (row2, col2). It does this by iterating over each row in the rectangle, adding the value of the cell in the rightmost column of the rectangle to the sum, and subtracting the value of the cell in the column to the left of the rectangle from the sum.

This solution has a time complexity of O(1) for the update and sumRegion methods, and O(M * N) for the constructor, where M and N are the dimensions of the input matrix. The space complexity is O(M * N) for the input matrix and the cumulative sum matrix.**

# Code
```
/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * obj.update(row,col,`val`)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */
 class NumMatrix(matrix: Array[Array[Int]]) {
    for (row <- matrix) {
        for (col <- 1 until row.length) {
            row(col) += row(col-1)
        }
    }

    def update(row: Int, col: Int, `val`: Int): Unit = {
        var original = matrix(row)(col)
        if (col != 0) {
            original -= matrix(row)(col-1)
        }
        val diff = original - `val`
        for (y <- col until matrix(0).length) {
            matrix(row)(y) -= diff
        }
    }
    
    def sumRegion(row1: Int, col1: Int, row2: Int, col2: Int): Int = {
        var sum = 0
        for (x <- row1 to row2) {
            sum += matrix(x)(col2)
            if (col1 != 0) {
                sum -= matrix(x)(col1-1)
            }
        }
        sum
    }
}

```