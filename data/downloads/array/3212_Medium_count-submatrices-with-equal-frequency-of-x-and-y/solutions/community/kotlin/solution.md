# Kotlin | O(rows * cols) time, O(rows * cols) space | DP  (1109ms, 150MB)

**Author:** tonycode88
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5432165/](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5432165/)

---

# Intuition

- DP
    - for `i, j` count number of 'X' and 'Y' in submatrix `0,0 - i,j`

# Approach

- `xCount[i, j] = xCount[i, j-1] + xCount[i-1, j] - xCount[i-1, j-1] + (if (xCount[i, j] == 'X') 1 else 0)`
- same for 'Y' and iterate from `0, 0` to `rows, cols`

# Complexity
- Time complexity: $$O(rows * cols)$$

- Space complexity: $$O(rows * cols)$$

# Code
```
class Solution {

    fun numberOfSubmatrices(grid: Array<CharArray>): Int {
        var result = 0

        val rows = grid.size
        val cols = grid.first().size

        val xCount = Array(size = rows) { IntArray(size = cols) { 0 } }
        val yCount = Array(size = rows) { IntArray(size = cols) { 0 } }

        for (row in 0 until rows) {
            for (col in 0 until cols) {
                xCount[row][col] = xCount.safeGet(row, col-1) + xCount.safeGet(row-1, col) - xCount.safeGet(row-1, col-1)
                if (grid[row][col] == 'X') {
                    xCount[row][col]++
                }

                yCount[row][col] = yCount.safeGet(row, col-1) + yCount.safeGet(row-1, col) - yCount.safeGet(row-1, col-1)
                if (grid[row][col] == 'Y') {
                    yCount[row][col]++
                }

                if (xCount[row][col] >= 1 && xCount[row][col] == yCount[row][col]) result++
            }
        }

        return result
    }

    private fun Array<IntArray>.safeGet(row: Int, col: Int): Int =
        if (row >= 0 && col >= 0) this[row][col] else 0

}
```