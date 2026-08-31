# Kotlin solution, beats 100% by run time

**Author:** user7581dN
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/5937271/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/5937271/)

---

# Intuition
Some invalid configurations can be detected quickly:
- a `3 x 3` grid (since there is no way to visit the center cell);
- any grid with non-zero top left cell.

For the rest, let's check knight movement validity.

# Approach
Instead of checking 8 cells around each one in the grid, we can collect coordinates of every move in the sequence into an array of size `n * n`, and then go through it to see if all the moves are valid. Although time complexity is still $$O(n^2)$$, this approach allows to reduce the number of checks, making the code simpler and faster.

# Complexity
- Time complexity:
$$O(n^2)$$, since we iterate throught the whole `n x n` grid and then iterate through the same number of coordinates.

- Space complexity:
$$O(n^2)$$, since we use two `n * n` arrays to store the coordinates.

# Code
```kotlin []
class Solution {
    fun checkValidGrid(grid: Array<IntArray>): Boolean {
        val n = grid.size
        if (n == 3 || grid[0][0] != 0) return false

        val numCount = n * n
        val x = IntArray(numCount)
        val y = IntArray(numCount)
        for (i in 0 until n) {
            val row = grid[i]
            for (j in 0 until n) {
                val num = row[j]
                x[num] = j
                y[num] = i
            }
        }

        for (i in 1 until numCount) {
            val dx = abs(x[i] - x[i - 1])
            if (dx == 0 || dx > 2 || dx + abs(y[i] - y[i - 1]) != 3) return false
        }

        return true
    }
}
```