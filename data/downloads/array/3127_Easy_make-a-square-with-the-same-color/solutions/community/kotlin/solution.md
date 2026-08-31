# Simple Kotlin solution

**Author:** tamhuynhit
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5682572/](https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5682572/)

---

# Intuition
Check each 2x2 square, if it has 3 'B' or 3 'W' then it's valid and return True immediately.

There is special cases where there is an already full 'B'/'W' 2x2 square in the grid, so changing any other cell around it still make it valid.

# Approach
Check every 2x2 square
Use a variable to count number of 'B' and 'W' cells, 'B' will increase the count, 'W' will decrease the count. (You can use 2 variables if you want)

- If `abs(count)` is 2, means there are 3 cells with the same color and 1 cell is different (+1 three times and -1 one time) => It's a valid square
- If `abs(count)` is 4, means all cells have the same color => It's also a valid square


# Complexity
- Time complexity:
$$O(n)$$ - n is the size of the matrix

- Space complexity:
$$O(1)$$

# Code
```kotlin []
class Solution {
    fun canMakeSquare(grid: Array<CharArray>): Boolean {
        for (i in 0..1) {
            for (j in 0..1) {
                if (isValidSquare(grid, i, j))
                    return true
            }
        }

        return false
    }

    private fun isValidSquare(grid: Array<CharArray>, x: Int, y: Int): Boolean {
        var countBalance = 0
        for (i in y until y + 2) {
            for (j in x until x + 2) {
                grid[i][j].also {
                    if (it == 'B')
                        countBalance++
                    else
                        countBalance--
                }
            }
        }

        return abs(countBalance).let { it == 2 || it == 4 }
    }
}
```