# Simple Kotlin solution using DFS

**Author:** whiskeytown79
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/solutions/4844790/](https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/solutions/4844790/)

---

# Intuition
Since we are given a starting point of a black pixel, and we are guaranteed that the black pixels are all continuous with one another, we can use a graph search algorithm (e.g. DFS) to find all black pixels connected to the first one we are given.

# Approach
As we traverse the "graph" of black pixels, we can keep track of the minimum and maxiumum values for `x` and `y`. When we are done traversing, we can find the width and the height of the rectangle as follows:
* `width = (maxX - minX + 1)`
* `height = (maxY - minY + 1)`

We can then multiply `width * height` to get the area to return.

In this solution, I used DFS to recursively check adjacent (cardinal directions) pixels of the image that are also black. I mark visited cells as white (value `'0'`) to avoid cycles.

# Complexity
- Time complexity: `O(k)` where `k` is the number of black pixels.

- Space complexity: `O(k)` as well. We have a constant amount of storage used in the function, but we need to include the stack frames of the recursion, which can potentially be as deep as `k`.

#### Note
Many other solutions use a binary search to find the min and max values for x and y, which is also a viable solution. Those solutions tend to have `O(m*log(n) + n*log(m))` complexity, driven by the size of the image (`m` and `n`), whereas a graph search approach has `O(k)` complexity, driven by the size of the "graph" of black pixels.

`O(k)` can degrade to `O(m*n)` in the worst case (image is entirely black pixels), so the binary search approach would be preferable if the asymptotic bounds of performance were the key factor. However, Leetcode seems to accept DFS solutions despite the requirement to beat `O(m*n)` complexity, so I am guessing their test cases do not include worst case scenarios.

# Code
```
class Solution {
    // Represents delta-X and delta-Y of the four cardinal directions.
    private val dirs = arrayOf(
        intArrayOf(1,0),
        intArrayOf(-1,0),
        intArrayOf(0,1),
        intArrayOf(0,-1)
    )
    fun minArea(image: Array<CharArray>, row: Int, col: Int): Int {
        val height = image.size
        val width = image[0].size
        var minRow = row
        var maxRow = row
        var minCol = col
        var maxCol = col
        // Helper function to determine if a given pixel is within
        // the image, and also black.
        fun isContiguous(row: Int, col: Int): Boolean =
            row in 0..<height &&
            col in 0..<width &&
            image[row][col] == '1'
        // Helper function to perform the DFS. Adjust min and max
        // x and y values as necessary, then recurse to adjacent
        // pixels that are contiguous with our current pixel.
        fun dfs(row: Int, col: Int) {
            maxRow = maxRow.coerceAtLeast(row)
            maxCol = maxCol.coerceAtLeast(col)
            minRow = minRow.coerceAtMost(row)
            minCol = minCol.coerceAtMost(col)
            // Mark current pixel as white to avoid cycles.
            image[row][col] = '0'
            for (dir in dirs) {
                if (isContiguous(row + dir[0], col + dir[1])) {
                    dfs(row + dir[0], col + dir[1])
                }
            }
        }
        // Kick off the DFS from the black pixel we are given.
        dfs(row, col)
        // Calculate and return the area of the bounding rectangle.
        return (maxRow - minRow + 1) * (maxCol - minCol + 1)
    }
}
```