# Simple solution with explanation

**Author:** novjean9
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-plus-sign/solutions/5464886/](https://leetcode.com/problems/largest-plus-sign/solutions/5464886/)

---

# Intuition
The problem requires finding the largest plus sign that can be formed in a grid of size `n x n` with some cells marked as mines. The idea is to calculate the maximum length of the arms of the plus sign for each cell by considering distances from the nearest mines in all four directions (left, right, up, and down). This is inspired from another leetcode solution of different language.

# Approach
1. Initialize a grid of size `n x n` with each cell set to `n`, which is the maximum possible arm length for any cell.
2. Set the cells that are mines to 0.
3. For each cell in the grid, calculate the minimum distance to a mine in the left, right, up, and down directions.
4. Update the cell value to the minimum of its current value and the distances calculated.
5. Iterate through the grid to find the maximum value, which represents the order of the largest plus sign.

# Complexity
- Time complexity: 
  - $$O(n^2)$$, where `n` is the size of the grid. We iterate through the grid multiple times, but the operations inside the loops are constant time.
- Space complexity: 
  - $$O(n^2)$$, where `n` is the size of the grid. We use a 2D array to store the grid values.

# Code
```kotlin
class Solution {
    fun orderOfLargestPlusSign(n: Int, mines: Array<IntArray>): Int {
        val rows = n
        val cols = n
        val grid = Array(rows) { IntArray(cols) { n } }

        for (m in mines) {
            grid[m[0]][m[1]] = 0
        }

        for (i in 0 until n) {
            var j = 0
            var k = n - 1
            var left = 0
            var right = 0
            var up = 0
            var down = 0

            while (j < n) {
                left = if (grid[i][j] == 0) 0 else left + 1
                grid[i][j] = minOf(grid[i][j], left)

                right = if (grid[i][k] == 0) 0 else right + 1
                grid[i][k] = minOf(grid[i][k], right)

                up = if (grid[j][i] == 0) 0 else up + 1
                grid[j][i] = minOf(grid[j][i], up)

                down = if (grid[k][i] == 0) 0 else down + 1
                grid[k][i] = minOf(grid[k][i], down)

                j++
                k--
            }
        }

        var res = 0
        for (i in 0 until n) {
            for (j in 0 until n) {
                res = maxOf(res, grid[i][j])
            }
        }
        return res
    }
}
