# Kotlin prefix sum for rows

**Author:** deniotokiari
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/5028849/](https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/5028849/)

---


# Code
```
class NumMatrix(val matrix: Array<IntArray>) {
    val rowPrefixSum = Array<IntArray>(matrix.size) { i -> IntArray(matrix[i].size) }
    
    init {
        for (i in 0 until rowPrefixSum.size) {
            for (j in 0 until rowPrefixSum[i].size) {
                rowPrefixSum[i][j] = (rowPrefixSum[i].getOrNull(j - 1) ?: 0) + matrix[i][j]
            }
        }
    }
    
    fun update(row: Int, col: Int, `val`: Int) {
        val diff = `val` - matrix[row][col]
        
        for (i in col until rowPrefixSum[row].size) {
            rowPrefixSum[row][i] = rowPrefixSum[row][i] + diff
        }
        
        matrix[row][col] = `val`
    }

    fun sumRegion(row1: Int, col1: Int, row2: Int, col2: Int): Int {
        var sum = 0
        
        for (i in row1..row2) {
            sum += rowPrefixSum[i][col2] - (rowPrefixSum[i].getOrNull(col1 - 1) ?: 0)
        }
        
        return sum
    }

}
```