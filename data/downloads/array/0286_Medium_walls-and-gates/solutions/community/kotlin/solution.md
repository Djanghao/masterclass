# BFS

**Author:** arohimsama
**Votes:** 0
**Link:** [https://leetcode.com/problems/walls-and-gates/solutions/5334880/](https://leetcode.com/problems/walls-and-gates/solutions/5334880/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m*n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m*n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import java.util.LinkedList

class Solution {
    fun wallsAndGates(rooms: Array<IntArray>): Unit {
        val rows = rooms.size
        val cols = rooms.first().size
        val queue = LinkedList<IntArray>()
        val visited = Array(rows) { BooleanArray(cols) }
        var distance = 0

        // find the gates
        rooms.forEachIndexed { rowIndex, row ->
            row.forEachIndexed { colIndex, col ->
                if (col == 0) {
                    queue.add(intArrayOf(rowIndex, colIndex))
                    visited[rowIndex][colIndex] = true
                }
            }
        }

        // BFS search
        while (queue.isNotEmpty()) {
            repeat(queue.size) {
                val (r, c) = queue.pop()
                rooms[r][c] = distance
                addRoom(r + 1, c, rows, cols, visited, rooms, queue)
                addRoom(r - 1, c, rows, cols, visited, rooms, queue)
                addRoom(r, c + 1, rows, cols, visited, rooms, queue)
                addRoom(r, c - 1, rows, cols, visited, rooms, queue)
            }
            distance++
        }
    }

    private fun addRoom(
        r: Int,
        c: Int,
        rows: Int,
        cols: Int,
        visited: Array<BooleanArray>,
        rooms: Array<IntArray>,
        queue: LinkedList<IntArray>
    ) {
        if (r in 0 until rows
            && c in 0 until cols
            && !visited[r][c]
            && rooms[r][c] != -1
        ) {
            queue.add(intArrayOf(r, c))
            visited[r][c] = true
        }
    }
}
```