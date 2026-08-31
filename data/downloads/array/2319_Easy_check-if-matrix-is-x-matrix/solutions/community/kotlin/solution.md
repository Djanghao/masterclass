# Simple Easy Kotlin Solution || Faster Than 100%

**Author:** PoeticIvy302543
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/2202542/](https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/2202542/)

---

Kotlin code:
```
    fun checkXMatrix(grid: Array<IntArray>): Boolean {
        var i = 0
        var j = 0
        val matrix = mutableListOf<MutableList<Boolean>>()
        for (k in grid.indices) {
            val g = mutableListOf<Boolean>()
            for (l in grid[k].indices) g.add(false)
            matrix.add(g)
        }
        while (i<grid.size) {
            if (grid[i][j]==0) return false
            matrix[i][j] = true
            i++
            j++
        }
        j = grid.size-1
        i=0
        while (j>=0) {
            if (grid[i][j]==0) return false
            matrix[i][j] = true
            i++
            j--
        }

        for (k in matrix.indices) {
            for (l in matrix[k].indices) {
                if (!matrix[k][l]) {
                    if (grid[k][l]!=0) return false
                }
            }
        }
        return true
    }
```