# Simple DFS Kotlin Solution

**Author:** DmitryNekrasov
**Votes:** 0
**Link:** [https://leetcode.com/problems/bricks-falling-when-hit/solutions/3477942/](https://leetcode.com/problems/bricks-falling-when-hit/solutions/3477942/)

---

# Code
```
class Solution {
    fun Array<IntArray>.at(i: Int, j: Int) =
        if (i < 0) 1 else if (i >= this.size || j < 0 || j >= this.first().size) 0 else this[i][j]

    fun hitBricks(grid: Array<IntArray>, hits: Array<IntArray>): IntArray {
        val n = grid.size
        val m = grid.first().size
        val original = Array(n) { IntArray(m) }
        for (i in 0 until n) {
            System.arraycopy(grid[i], 0, original[i], 0, m)
        }
        for ((i, j) in hits) {
            grid[i][j] = EMPTY
        }

        fun markStable(i: Int, j: Int): Int {
            if (i < 0 || i >= n || j < 0 || j >= m || grid[i][j] != UNSTABLE) return 0
            grid[i][j] = STABLE
            return 1 + markStable(i + 1, j) +
                    markStable(i - 1, j) +
                    markStable(i, j + 1) +
                    markStable(i, j - 1)
        }

        for (j in 0 until m) {
            markStable(0, j)
        }

        fun hasStableNeighbors(i: Int, j: Int) = i == 0 ||
                grid.at(i + 1, j) == STABLE ||
                grid.at(i - 1, j) == STABLE ||
                grid.at(i, j + 1) == STABLE ||
                grid.at(i, j - 1) == STABLE

        fun getUnstableNeighbors(i: Int, j: Int): List<Pair<Int, Int>> {
            val result = mutableListOf<Pair<Int, Int>>()
            if (grid.at(i + 1, j) == UNSTABLE) result.add(i + 1 to j)
            if (grid.at(i - 1, j) == UNSTABLE) result.add(i - 1 to j)
            if (grid.at(i, j + 1) == UNSTABLE) result.add(i to j + 1)
            if (grid.at(i, j - 1) == UNSTABLE) result.add(i to j - 1)
            return result
        }

        val dropped = mutableListOf<Int>()
        for ((x, y) in hits.reversed()) {
            if (original[x][y] == UNSTABLE) {
                if (hasStableNeighbors(x, y)) {
                    grid[x][y] = STABLE
                    var currentDropped = 0
                    for ((i, j) in getUnstableNeighbors(x, y)) {
                        currentDropped += markStable(i, j)
                    }
                    dropped.add(currentDropped)
                } else {
                    grid[x][y] = UNSTABLE
                    dropped.add(0)
                }
            } else {
                dropped.add(0)
            }
        }
        return dropped.reversed().toIntArray()
    }

    companion object {
        const val EMPTY = 0
        const val STABLE = 2
        const val UNSTABLE = 1
    }
}
```