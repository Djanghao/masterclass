# Simple Kotlin solution for beginners

**Author:** ganesh2shiv
**Votes:** 2
**Link:** [https://leetcode.com/problems/score-after-flipping-matrix/solutions/3290666/](https://leetcode.com/problems/score-after-flipping-matrix/solutions/3290666/)

---

```
class Solution {
    fun matrixScore(grid: Array<IntArray>): Int {
        val (m, n) = Pair(grid.size, grid[0].size)
        var result = 0

        for (i in 0..m-1) {
            if (grid[i][0] == 0) {
                for (j in 0..n-1) {
                    grid[i][j] = grid[i][j] xor 1
                }
            }
        }

        for (j in 1..n-1) {
            var sum = 0
            for (i in 0..m-1) sum += grid[i][j]
            if (sum * 2 < m) {
                for (i in 0..m-1) {
                    grid[i][j] = grid[i][j] xor 1
                }
            }
        }

        for (i in 0..m-1) {
            for (j in 0..n-1) {
                if (grid[i][j] != 0) {
                    result += (1 shl n-j-1) * grid[i][j]
                }
            }
        }

        return result
    }
}
```