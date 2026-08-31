# :: Kotlin :: DFS + Dynamic Programming Solution

**Author:** znxkznxk1030
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3653365/](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3653365/)

---


```
data class Cell(val c: Int, val r: Int, val v: Int)

class Solution {
    val mod = 1_000_000_007
    val directs = arrayOf(      intArrayOf(-1, 0),
                                intArrayOf(1, 0),
                                intArrayOf(0, 1),
                                intArrayOf(0, -1))
    val memo = HashMap<Cell, Int>()

    fun countPaths(grid: Array<IntArray>): Int {
        var list = mutableListOf<Cell>()
        val h = grid.size
        val w = grid[0].size

        for (r in 0 until h) {
            for (c in 0 until w) {
                list.add(Cell(c, r, grid[r][c]))
            }
        }

        var _list = list.sortedBy{ it.v }

        fun dfs(cell: Cell): Int {
            if(memo.containsKey(cell)) return memo.getOrDefault(cell, 0)

            var ret = 1
            for (direct in directs) {
                val nr = cell.r + direct[0]
                val nc = cell.c + direct[1]

                if (nc < 0 || nc >= w) continue
                if (nr < 0 || nr >= h) continue

                if(grid[nr][nc] <= cell.v) continue

                ret += dfs(Cell(nc, nr, grid[nr][nc]))
                ret %= mod
            }

            memo.put(cell, ret)
            return ret
        }

        var result = 0
        for(cell in _list) {
            result += dfs(cell)
            result %= mod
        }

        return result
    }
}
```