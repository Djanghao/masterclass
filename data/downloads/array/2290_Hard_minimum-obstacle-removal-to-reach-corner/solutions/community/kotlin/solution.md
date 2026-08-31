# Minimum Obstacle Removal to Reach Corner|Beats 100%✅✅|Dijkstra's algorithm

**Author:** thearchetypee
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6091826/](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6091826/)

---

# Intuition
This problem can be viewed as finding the shortest path in a weighted graph, where each cell is a node and the weight of moving to a cell is whether it contains an obstacle (weight 1) or not (weight 0). When we frame it this way, we realize that traditional pathfinding algorithms like Dijkstra's algorithm can be adapted to solve this efficiently.

The key insight is that we want to minimize the number of obstacles we need to remove, which is equivalent to finding the path with the minimum sum of obstacle weights. Unlike traditional shortest path problems where we add distances, here we're counting obstacles encountered along the way.

# Approach
The solution uses a modified version of Dijkstra's algorithm with a priority queue. Here's how it works:

1. Distance Tracking:
   - Create a distances array to track the minimum number of obstacles needed to reach each cell
   - Initialize all distances to MAX_VALUE except the starting point (0,0) which starts at 0

2. Priority Queue Setup:
   - Use a priority queue to process cells in order of increasing obstacle count
   - Each entry contains [row, col, obstacles_encountered]
   - Priority is based on obstacles_encountered

3. Processing Cells:
   - Poll the cell with minimum obstacles from the queue
   - Check if we've reached the target (bottom-right corner)
   - For each valid neighboring cell:
     - Calculate new obstacle count (current + cell value)
     - If this gives a better (lower) obstacle count:
       - Update the distance
       - Add the cell to priority queue

4. Four Directional Movement:
   - Define possible movements: right, down, left, up
   - For each cell, try all four directions
   - Skip invalid moves (outside grid)
   - Skip moves that don't improve obstacle count

# Complexity
- Time complexity: $$O(mn \\log(mn))$$
  - Each cell can be added to priority queue at most once
  - Priority queue operations take $$O(\\log(mn))$$ time
  - We process at most all mn cells
  
- Space complexity: $$O(mn)$$
  - distances array: $$O(mn)$$
  - Priority queue: $$O(mn)$$ in worst case
  - Direction array: $$O(1)$$

# Code
```kotlin
class Solution {
    fun minimumObstacles(grid: Array<IntArray>): Int {
        val m = grid.size
        val n = grid[0].size
        val directions = arrayOf(intArrayOf(0, 1), intArrayOf(1, 0), intArrayOf(0, -1), intArrayOf(-1, 0))
        val distances = Array(m) { IntArray(n) { Int.MAX_VALUE } }
        distances[0][0] = 0
        
        val pq = PriorityQueue<IntArray>(compareBy { it[2] })
        pq.offer(intArrayOf(0, 0, 0))
        
        while (pq.isNotEmpty()) {
            val (row, col, obstacles) = pq.poll()
            
            if (obstacles > distances[row][col]) continue
            if (row == m - 1 && col == n - 1) return obstacles
            
            for (dir in directions) {
                val newRow = row + dir[0]
                val newCol = col + dir[1]
                
                if (newRow in 0 until m && newCol in 0 until n) {
                    val newObstacles = obstacles + grid[newRow][newCol]
                    if (newObstacles < distances[newRow][newCol]) {
                        distances[newRow][newCol] = newObstacles
                        pq.offer(intArrayOf(newRow, newCol, newObstacles))
                    }
                }
            }
        }
        
        return distances[m - 1][n - 1]
    }
}
```