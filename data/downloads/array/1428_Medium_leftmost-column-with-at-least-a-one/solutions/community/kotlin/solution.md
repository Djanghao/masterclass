# [Kotlin] Binary Search Solution

**Author:** devle79
**Votes:** 0
**Link:** [https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/4526908/](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/4526908/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Since given matrix is a row-sorted, we can use `binary search` to find index of min element in col.

What we need to find is leftmost index of `column`, 

If a smaller index is found in the prev row(`mat[i - 1]`), we only needs to search the range of `0..lastMin`, rather than searching all rows.

# Complexity
- Time complexity: $$O(logN)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    fun leftMostColumnWithOne(binaryMatrix: BinaryMatrix): Int {
        val dimensions = binaryMatrix.dimensions()

        var leftMostColumn = Integer.MAX_VALUE
        val colSize = dimensions[1] - 1

        for (i in 0 until dimensions[0]) {
            leftMostColumn = minOf(leftMostColumn, findLeftMost(binaryMatrix, i, minOf(leftMostColumn, colSize)))
        }

        return if (leftMostColumn == Integer.MAX_VALUE) -1 else leftMostColumn
    }

    private fun findLeftMost(binaryMatrix: BinaryMatrix, row: Int, lastCol: Int): Int {
        var left = 0
        var right = lastCol

        var leftMostIndex = Integer.MAX_VALUE

        while (left <= right) {
            val middle = (left + right) / 2
            val middleValue = binaryMatrix.get(row, middle)

            if (middleValue == 1) {
                leftMostIndex = minOf(leftMostIndex, middle)
                right = middle - 1
            } else {
                left = middle + 1
            }
        }

        return leftMostIndex
    }
}
```