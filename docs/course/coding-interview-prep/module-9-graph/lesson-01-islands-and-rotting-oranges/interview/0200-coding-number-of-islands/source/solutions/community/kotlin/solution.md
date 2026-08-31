# My Kotlin Solution

**Author:** mgalhardo
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-islands/solutions/1765969/](https://leetcode.com/problems/number-of-islands/solutions/1765969/)

---

```kotlin
private typealias Grid = Array<CharArray>
private const val LAND = '1'
private const val WATER = '0'

private class Solution {

    data class Point(val row: Int, val col: Int)

    fun numIslands(grid: Grid): Int {
        if (grid.isEmpty() || grid[0].isEmpty()) return 0

        val visited = mutableSetOf<Point>()
        var count = 0

        for (row in 0..grid.lastIndex) {
            for (col in 0..grid[0].lastIndex) {
                val point = Point(row, col)

                if (!visited.contains(point) && grid[point.row][point.col] == LAND) {
                    dfs(grid, point, visited)
                    count++
                }
            }
        }

        return count
    }

    private fun dfs(grid: Grid, point: Point, visited: MutableSet<Point>) {
        if (point.row !in 0..grid.lastIndex) return
        if (point.col !in 0..grid[0].lastIndex) return
        if (visited.contains(point)) return
        if (grid[point.row][point.col] == WATER) return

        visited += point

        dfs(grid, point.copy(col = point.col + 1), visited)
        dfs(grid, point.copy(col = point.col - 1), visited)
        dfs(grid, point.copy(row = point.row + 1), visited)
        dfs(grid, point.copy(row = point.row - 1), visited)
    }
}
```