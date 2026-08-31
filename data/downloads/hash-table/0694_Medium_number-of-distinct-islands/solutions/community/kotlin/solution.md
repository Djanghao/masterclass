# [Kotlin] BFS solution with comment and explanation

**Author:** drulabs
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-islands/solutions/5158745/](https://leetcode.com/problems/number-of-distinct-islands/solutions/5158745/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
finding nuber of islands is a trivial matter. to ensure we find only que islands, store the index diff. Here is an example:

consider this matrix
1 1 0 0
0 0 0 1
0 1 1 0

we see 3 islands [(0,0),(0,1)], [1,3] and, [(2,1),(2,2)]

but [(0,0),(0,1)] and [(2,1),(2,2)] are identical. so we can store index diff instead of actual indices. Index diff from first land cell

store this: 
[(0,0),(0-0,1-0)] => [(0,0),(0,1)]
[(2,1),(2-2,2-1)] => [(0,0),(0,1)]

and this can be easily identified as duplicate.



# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: ~O(MN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: ~O(MN)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun numDistinctIslands(grid: Array<IntArray>): Int {
        val m = grid.size
        val n = grid[0].size
        val visited = Array(m) { BooleanArray(n) {false} }

        // to ensure we only store the unique islands
        val uniqueIslands = mutableSetOf<List<Pair<Int, Int>>>()

        // Do BFS for unvisited land cells
        for (i in 0..<m) {
            for (j in 0..<n){
                if (grid[i][j] == 1 && !visited[i][j]) {
                    visited[i][j] = true
                    val island = doBFS(grid, visited, i, j)
                    uniqueIslands.add(island)
                }
            }
        }

        return uniqueIslands.size
    }

    private fun doBFS(
        grid: Array<IntArray>,
        visited: Array<BooleanArray>,
        row: Int,
        col: Int
    ): List<Pair<Int, Int>> {
        val m = grid.size
        val n = grid[0].size
        val q: Queue<Pair<Int, Int>> = LinkedList()
        val island = mutableListOf<Pair<Int, Int>>()
        q.add(row to col)
        
        val adjacent = listOf(-1 to 0, 1 to 0, 0 to -1, 0 to 1)

        while (q.isNotEmpty()) {
            val (i, j) = q.poll()
            // Save only the index diff in the island so that set can ensure uniqueness
            island.add(i-row to j-col)
            for (move in adjacent) {
                val iNew = i + move.first
                val jNew = j + move.second
                if (iNew in 0..<m && jNew in 0..<n && grid[iNew][jNew] == 1 && !visited[iNew][jNew]) {
                    q.add(iNew to jNew)
                    visited[iNew][jNew] = true
                }
            }
        }
        return island
    }
}
```