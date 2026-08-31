# Kotlin Union Find

**Author:** james4388
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-islands-ii/solutions/5057718/](https://leetcode.com/problems/number-of-islands-ii/solutions/5057718/)

---

Add a land, increase number of island but check if can merge to existing land, decrease it

```kotlin
class DisjoinSet(val size: Int) {
    val parents = IntArray(size) { it }
    val ranks = IntArray(size)
    var component = size
    
    fun find(x: Int): Int {
        if (parents[x] != x) {
            parents[x] = find(parents[x])
        }
        return parents[x]
    }
    
    fun union(a: Int, b: Int): Boolean {
        var roota = find(a)
        var rootb = find(b)
        if (roota == rootb) {
            return false
        }
        if (ranks[roota] < ranks[rootb]) {
            roota = rootb.also{ rootb = roota }
        }
        parents[rootb] = roota
        if (ranks[roota] == ranks[rootb]) {
            ranks[roota] += 1
        }
        component -= 1
        return true
    }
}

val DIRECTIONS = listOf(Pair(0, 1), Pair(1, 0), Pair(0, -1), Pair(-1, 0))

class Solution {
    fun numIslands2(rows: Int, cols: Int, positions: Array<IntArray>): List<Int> {
        val djs = DisjoinSet(rows * cols)
        val answer = mutableListOf<Int>()
        val grid: Array<IntArray> = Array(rows){ IntArray(cols) }
        var island = 0
        for ((row, col) in positions) {
            val islandID = row * cols + col
            if (grid[row][col] == 1) {
                answer.add(island)
                continue
            }
            grid[row][col] = 1
            island += 1

            for ((dr, dc) in DIRECTIONS) {
                val otherRow = row + dr
                val otherCol = col + dc
                if ((otherRow in 0 until rows) && (otherCol in 0 until cols) && grid[otherRow][otherCol] == 1) {
                    val otherID = otherRow * cols + otherCol
                    if (djs.union(islandID, otherID)) {
                        island -= 1
                    }
                }
            }
            answer.add(island)
        }
        return answer
    }
}
```