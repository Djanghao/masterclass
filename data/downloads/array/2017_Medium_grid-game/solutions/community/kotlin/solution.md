# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/grid-game/solutions/4510234/](https://leetcode.com/problems/grid-game/solutions/4510234/)

---

# Code
```
class Solution {
    fun gridGame(grid: Array<IntArray>): Long =
        grid[0].foldIndexed(Triple(grid[0].sumOf { it.toLong() }, 0.toLong(), Long.MAX_VALUE)) { i, t, n ->
                            Triple( t.first - n, t.second + grid[1][i],
                                    min(t.third, max(t.first - n, t.second)) ) }.third
}
```