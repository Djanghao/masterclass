# [Kotlin] Best Simple Solution

**Author:** sshamillov
**Votes:** 4
**Link:** [https://leetcode.com/problems/equal-row-and-column-pairs/solutions/4343117/](https://leetcode.com/problems/equal-row-and-column-pairs/solutions/4343117/)

---

# Code
```
class Solution {
    fun equalPairs(grid: Array<IntArray>): Int {
        var count = 0

        for (i in grid.indices) {
            val column = IntArray(grid.size) { j -> grid[j][i] }

            for (row in grid) {
                if (column contentEquals row) {
                    count++
                }
            }
        }

        return count
    }
}
```