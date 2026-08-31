# Clean Kotlin solution

**Author:** user1482VR
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/5379038/](https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/5379038/)

---

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O()$$

# Code
```
class Solution {

    // O(n^2) time O(1) space
    fun largestSquareArea(bottomLeft: Array<IntArray>, topRight: Array<IntArray>): Long {
        var result = 0L
        for (i in 0..bottomLeft.size-2) {
            for (j in i+1..bottomLeft.size-1) {
                result = kotlin.math.max(
                    result,
                    intersectionSquareArea(bottomLeft[i], topRight[i], bottomLeft[j], topRight[j])
                )
            }
        }
        return result
    }

    // ----O
    //   0-----

    // ----
    //  0O
    
    //     0--
    //  ----O

    // ---O
    //       0------

    //       0--
    // --O

    // intersection = min end (O) - max start (0) 
    private fun intersectionSquareArea(
        bottomLeftFirst: IntArray, topRightFirst: IntArray,
        bottomLeftSecond: IntArray, topRightSecond: IntArray,
    ): Long {
        val xIntersection = 
            kotlin.math.min(topRightFirst.x(), topRightSecond.x()) - 
            kotlin.math.max(bottomLeftFirst.x(), bottomLeftSecond.x())
        if (xIntersection <= 0) return 0

        val yIntersection = 
            kotlin.math.min(topRightFirst.y(), topRightSecond.y()) - 
            kotlin.math.max(bottomLeftFirst.y(), bottomLeftSecond.y())
        if (yIntersection <= 0) return 0

        val squareSize: Int = kotlin.math.min(xIntersection, yIntersection)
        return squareSize.toLong() * squareSize
    }

    private fun IntArray.x() = this[0]
    private fun IntArray.y() = this[1]
}
```