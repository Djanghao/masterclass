# Kotlin: BFS

**Author:** artemasoyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/rotting-oranges/solutions/2932085/](https://leetcode.com/problems/rotting-oranges/solutions/2932085/)

---

# Code
```
class Solution {
    fun orangesRotting(grid: Array<IntArray>): Int {
        val q = ArrayDeque<Pair<Int, Int>>()
        var time = 0; var fresh = 0

        for (i in 0 until grid.size) {
            for (j in 0 until grid[0].size) {
                if (grid[i][j] == 2) q += i to j
                if (grid[i][j] == 1) fresh++
            }
        }

        val dirs = setOf(0 to 1, 0 to -1, 1 to 0, -1 to 0)
        
        while (q.isNotEmpty() && fresh > 0) {
            for (i in 0 until q.size) {
                val (i, j) = q.pollFirst()
                for ((dr, dc) in dirs) {
                    val ii = dr + i
				    val jj = dc + j
				    if(ii !in grid.indices || jj !in grid[0].indices || grid[ii][jj] != 1) continue
				    fresh--
				    grid[ii][jj] = 2
				    q.add(ii to jj)
			    }
            }
            time++
        }

        return if (fresh == 0) time else -1
    }
}
```