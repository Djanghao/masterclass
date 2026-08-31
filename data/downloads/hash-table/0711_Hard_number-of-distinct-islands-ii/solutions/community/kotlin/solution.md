# kotlin solution using bfs

**Author:** arbindprasad096
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-islands-ii/solutions/5156027/](https://leetcode.com/problems/number-of-distinct-islands-ii/solutions/5156027/)

---



# Code
```
class Solution {
    fun numDistinctIslands2(grid: Array<IntArray>): Int {
        val rows = grid.size
        val cols = if (rows > 0) grid[0].size else 0
        val distinctIslands = mutableSetOf<String>()

        fun bfs(r: Int, c: Int): List<Pair<Int, Int>> {
            val queue = ArrayDeque<Pair<Int, Int>>()
            val island = mutableListOf<Pair<Int, Int>>()
            queue.add(Pair(r, c))
            grid[r][c] = 0

            while (queue.isNotEmpty()) {
                val (x, y) = queue.removeFirst()
                island.add(Pair(x - r, y - c))

                val directions = arrayOf(
                    Pair(-1, 0),  // Up
                    Pair(0, -1),  // Left
                    Pair(1, 0),   // Down
                    Pair(0, 1)    // Right
                )

                for ((dx, dy) in directions) {
                    val newX = x + dx
                    val newY = y + dy

                    if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] == 1) {
                        grid[newX][newY] = 0
                        queue.add(Pair(newX, newY))
                    }
                }
            }

            return island
        }

        fun normalize(island: List<Pair<Int, Int>>): String {
            val shapes = mutableListOf<String>()

            for (i in 0 until 4) {
                val rotated = island.map { (x, y) -> Pair(x * cosines[i] - y * sines[i], x * sines[i] + y * cosines[i]) }
                val normalized = rotated.map { (x, y) -> Pair(x - rotated.minByOrNull { it.first }!!.first, y - rotated.minByOrNull { it.second }!!.second) }
                shapes.add(normalized.sortedWith(compareBy({ it.first }, { it.second })).toString())

                val reflected = rotated.map { (x, y) -> Pair(x, -y) }
                val normalizedReflected = reflected.map { (x, y) -> Pair(x - reflected.minByOrNull { it.first }!!.first, y - reflected.minByOrNull { it.second }!!.second) }
                shapes.add(normalizedReflected.sortedWith(compareBy({ it.first }, { it.second })).toString())
            }

            return shapes.minOrNull()!!
        }

        for (r in 0 until rows) {
            for (c in 0 until cols) {
                if (grid[r][c] == 1) {
                    val island = bfs(r, c)
                    val normalizedIsland = normalize(island)
                    distinctIslands.add(normalizedIsland)
                }
            }
        }

        return distinctIslands.size
    }

    companion object {
        private val cosines = intArrayOf(1, 0, -1, 0)
        private val sines = intArrayOf(0, 1, 0, -1)
    }
}
```