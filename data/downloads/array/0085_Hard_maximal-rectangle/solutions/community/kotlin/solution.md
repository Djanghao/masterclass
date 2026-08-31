# Kotlin Solution

**Author:** user9822kh
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximal-rectangle/solutions/1954598/](https://leetcode.com/problems/maximal-rectangle/solutions/1954598/)

---

```
class Solution {
    private companion object {
        private const val ONE = '1'
    }

    fun maximalRectangle(matrix: Array<CharArray>): Int {
        // sanity check
        if (matrix.isEmpty() || matrix[0].isEmpty()) return 0

        // not used
        // val nRows = matrix.size
        val nCols = matrix[0].size
        val heights = IntArray(nCols) { 0 }

        var max = 0

        for (row in matrix) {
            for ((idxCol, value) in row.withIndex()) {
                if (value == ONE) {
                    ++heights[idxCol]
                } else {
                    heights[idxCol] = 0
                }
            }

            max = maxOf(max, getMaxArea(heights))
        }

        return max
    }

    private fun getMaxArea(heights: IntArray): Int {
        val nHeights = heights.size

        val stack = ArrayDeque<Int>()
        var max = 0
        var idx = 0

        while (idx < nHeights) {
            while (stack.isNotEmpty() && heights[idx] < heights[stack.peekLast()]){
                val shortest = heights[stack.removeLast()]
                val width = idx - if (stack.isEmpty()) 0 else (stack.peekLast() + 1)
                val area = shortest * width
                max = maxOf(max, area)
            }

            stack.addLast(idx)
            ++idx
        }

        while (stack.isNotEmpty()) {
            val shortest = heights[stack.removeLast()]
            val width = nHeights - if (stack.isEmpty()) 0 else (stack.peekLast() + 1)
            val area = shortest * width
            max = maxOf(max, area)
        }

        return max
    }
}

```