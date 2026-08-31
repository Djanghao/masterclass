# Kotlin solution

**Author:** armat
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3741481/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3741481/)

---

# Code
```
class Solution {
    fun findColumnWidth(grid: Array<IntArray>): IntArray {
        val result = IntArray(grid[0].size)
        var col = 0

        while (col < grid[0].size) {
            var width = 0
            var row = 0

            while (row < grid.size) {
                width = Math.max(width, getWidth(grid[row][col]))
                row++
            }

            result[col] = width
            row = 0
            col++
        }

        return result
    }

    private fun getWidth(num: Int): Int {
        var n = Math.abs(num)
        var width = if (num > 0) 0 else 1

        while (n > 0) {
            width++
            n /= 10
        }

        return width
    }
}
```