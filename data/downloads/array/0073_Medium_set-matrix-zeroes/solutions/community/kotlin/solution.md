# Kotlin easy solution

**Author:** GokuUltra
**Votes:** 5
**Link:** [https://leetcode.com/problems/set-matrix-zeroes/solutions/4304765/](https://leetcode.com/problems/set-matrix-zeroes/solutions/4304765/)

---


# Code
```
class Solution {
    fun setZeroes(matrix: Array<IntArray>): Unit {
        var firstRow = false
        var firstCol = false
        for (i  in matrix.indices)
            for (j in matrix[0].indices) {
                if (matrix[i][j] == 0) {
                    if (i == 0) firstRow = true
                    if (j == 0) firstCol = true
                    matrix[i][0] = 0
                    matrix[0][j] = 0
                }
            }
        for (i  in 1 until matrix.size)
            for (j in 1 until matrix[0].size) {
                if (matrix[0][j] == 0) matrix[i][j] = 0
                if (matrix[i][0] == 0) matrix[i][j] = 0
            }
        if (firstRow) for (i in matrix[0].indices) matrix[0][i] = 0
        if (firstCol) for (i in matrix.indices) matrix[i][0] = 0
    }
}
```