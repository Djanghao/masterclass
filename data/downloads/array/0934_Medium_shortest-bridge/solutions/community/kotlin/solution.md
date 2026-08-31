# Kotlin 85-liner faster than 72.22% floodfill+bfs

**Author:** Z3ROsum
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-bridge/solutions/2092265/](https://leetcode.com/problems/shortest-bridge/solutions/2092265/)

---

```
class Solution {
    private lateinit var grid: Array<IntArray>
    private val connected = Stack<Pair<Int, Int>>()
    var n = 0
    
    fun shortestBridge(grid: Array<IntArray>): Int {
        this.grid = grid
        this.n = grid.size
        
        var firstLand = -1 to -1
        
        for (i in 0 until n) {
            for (j in 0 until n) {
                if (grid[i][j] == 1) {
                    firstLand = i to j
                    break
                }
            }
            if (firstLand.first != -1) break
        }
        floodfill(firstLand.first, firstLand.second, 7)
        
        val boundary = ArrayDeque<Pair<Int, Int>>()
        while (connected.isNotEmpty()) {
            val point = connected.pop()
            if (isOnBoundary(point)) boundary.add(point)
        }
        
        var result = 0
        val already = HashSet<String>()
        
        while (boundary.isNotEmpty()) {
            val size = boundary.size
            for (i in 0 until size) {
                val position = boundary.poll()
                val x = position.first
                val y = position.second
                if (!already.contains("$x,$y")) {
                    if (grid[x][y] == 1) return result - 1
                    val possible = listOf(
                        x + 1 to y,
                        x - 1 to y,
                        x to y + 1,
                        x to y - 1
                    ).filter { possible(it) && grid[it.first][it.second] != 7 }
                    boundary.addAll(possible)
                    already.add("$x,$y")
                }
            }
            result++
        }
        
        return result
    }
    
    fun floodfill(x: Int, y: Int, color: Int) {
        if (grid[x][y] == 0) return
        if (grid[x][y] == color) return
        
        grid[x][y] = color
        connected.add(x to y)
        
        val possible = listOf(x + 1 to y, x - 1 to y, x to y + 1, x to y - 1)
        for (i in possible) {
            if (possible(i)) floodfill(i.first, i.second, color)
        }
    }
    
    fun possible(position: Pair<Int, Int>): Boolean {
        return position.first in 0 until n && position.second in 0 until n
    }
    
    fun isOnBoundary(position: Pair<Int, Int>): Boolean {
        val x = position.first
        val y = position.second
        val possible = listOf(
            x + 1 to y,
            x - 1 to y,
            x to y + 1,
            x to y - 1
        ).filter { possible(it) && grid[it.first][it.second] == 0 }
        
        return possible.isNotEmpty()
    }
}
```