# Kotlin | Astar Algorithm | Edge Cases | Beats 96%

**Author:** Mahoraga_JJK
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/4376369/](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/4376369/)

---

Modification of the solution in the link
https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/3956336/kotlin-bfs/

# Code
```
class Solution {
    fun shortestPath(grid: Array<IntArray>, k: Int): Int {
        if (k >= grid.size + grid[0].size - 2) {
            return grid.size + grid[0].size - 2
        }
        data class State (
            val row: Int,
            val col: Int,
            val remain: Int,
            val steps: Int
        )
        
        val m = grid.size
        val n = grid[0].size

        val directions = arrayOf(
            arrayOf(0,1),
            arrayOf(1,0),
            arrayOf(0,-1),
            arrayOf(-1,0),
        )

        val queue = PriorityQueue<State>( {it1,it2 -> (it1.steps-it1.row-it1.col) - (it2.steps-it2.row-it2.col) } )
        val seen = Array(m) { Array(n) { Array(k+1) {false} } }
        
        queue.add(State(0,0,k,0))
        seen[0][0][k] = true

        while (!queue.isEmpty()) {
            val (row, col, remain, steps) = queue.poll()
            
            if (row==m-1 && col==n-1) return steps
            
            for ((x,y) in directions) {
                val nextRow = row+x
                val nextCol = col+y

                if (nextRow in 0..m-1 && nextCol in 0..n-1) {
                    val newRemain = remain-grid[nextRow][nextCol]
                    if (newRemain>=0 && !seen[nextRow][nextCol][newRemain]) {
                        seen[nextRow][nextCol][newRemain] = true
                        queue.add(State(nextRow,nextCol, newRemain, steps+1))
                    }
                }
            }
        }

        return -1
    }
}
```