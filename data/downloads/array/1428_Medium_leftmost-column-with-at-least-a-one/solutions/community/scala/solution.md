# Optimized binary search

**Author:** hongjian3
**Votes:** 0
**Link:** [https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/4526243/](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/4526243/)

---

# Intuition
1. When you already find `_min` as 0, i.e. somerow has 1 at the first postion, stop search
2. If current row does not improve your answer, it is safe to skip. The check for possible improvement is O(1), i.e you check if `matrix[row][_min_so_far - 1]` is 1.


# Code
```
/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * class BinaryMatrix {
 *     def get(row: Int, col: Int): Int = {}
 *     def dimensions(): Array[Int] = {}
 * }
 */

object Solution {
    def leftMostColumnWithOne(binaryMatrix: BinaryMatrix): Int = {
        val dims = binaryMatrix.dimensions
        val rowCnt = dims(0)
        val colCnt = dims(0)

        // find the first 1 in a row with binary search
        def bisect_left(row: Int, end: Int): Int = {
            var left = 0
            var right = end
            while (left <= right) {
                val mid = (left + right) / 2
                if (binaryMatrix.get(row, mid) == 1) right = mid-1
                else left = mid+1
            }
            left
        }
        
        var _min = colCnt
        for (i <- 0 until rowCnt) {
            // if _min is 0, no more search
            // if current row has 0 at _min-1, then safe to skip
            if (_min > 0 && binaryMatrix.get(i, _min-1) == 1) {
                val firstOne = bisect_left(i, _min-1)
                _min = math.min(_min, firstOne)
            }
        }
        if (_min == colCnt) -1 else _min
    }

}
```