# Easy to understand, beats 100%

**Author:** amolgupta1989
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/4524824/](https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/4524824/)

---

# Code
```
class Solution {
fun countPyramids(grid: Array<IntArray>): Int {
        val up = Array(grid.size) { IntArray(grid[0].size) }
        val down = Array(grid.size) { IntArray(grid[0].size) }

        grid.forEachIndexed { i, arr ->
            arr.forEachIndexed { j, _ ->
                up[i][j] = grid[i][j]
                down[i][j] = grid[i][j]
            }
        }
        var found = true
        var depth = 1
        var counter = 0
        while (found) {
            found = false
            for (i in 0 until grid.size - 1) {
                for (j in 1 until grid[0].size - 1) {
                    if (up[i][j] == depth
                        && up[i + 1][j - 1] == depth
                        && up[i + 1][j] == depth
                        && up[i + 1][j + 1] == depth
                    ) {
                        found = true
                        up[i][j] = depth + 1
                        counter++
                    }
                }
            }
            depth++
        }
        found = true
        depth = 1
        while (found) {
            found = false
            for (i in grid.size - 1 downTo  1) {
                for (j in 1 until grid[0].size - 1) {
                    if (down[i][j] == depth
                        && down[i - 1][j - 1] == depth
                        && down[i - 1][j] == depth
                        && down[i - 1][j + 1] == depth
                    ) {
                        found = true
                        down[i][j] = depth + 1
                        counter++
                    }
                }
            }
            depth++
        }

        return counter
    }
}
```