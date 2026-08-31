# Beats 100% ✅✅|Dijkstra's Algorithm|Kotlin

**Author:** thearchetypee
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/6093198/](https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/6093198/)

---

# Intuition
In this problem, we're looking for the minimum time to reach the bottom-right cell, where each cell has a minimum time requirement. This creates a weighted graph problem, where the weights are the time we need to wait at each cell.

# Approach

Let's break down the solution:

1. Initial Setup:
   The solution starts by creating a grid called `times` where each cell is initialized to infinity (Int.MAX_VALUE). This grid keeps track of the minimum time needed to reach each cell. We set times[0][0] = 0 since we start at the top-left.

2. Priority Queue:
   We use a priority queue (PriorityQueue in Kotlin) that orders cells by their time. Each element in the queue contains (row, col, time). The priority queue ensures we always process the cell with the minimum time first.

3. Main Algorithm Loop:
   ```kotlin
   while (pq.isNotEmpty()) {
       val (row, col, time) = pq.poll()
       
       if (time > times[row][col]) continue  // Skip if we found a better time
       if (row == m - 1 && col == n - 1) return time  // Reached destination
   ```
   We keep processing cells until we either reach the destination or run out of cells to process.

4. Time Calculation: For each neighboring cell, we calculate two times:
   ```kotlin
   val newTime = time + 1  // Basic time to move to next cell
   val waitTime = if (grid[newRow][newCol] > newTime) {
       grid[newRow][newCol] + (grid[newRow][newCol] - newTime) % 2
   } else newTime
   ```
   This is where the problem gets interesting. If we can't enter the cell immediately (grid[newRow][newCol] > newTime), we need to wait. The waiting calculation ensures we wait long enough to satisfy the cell's minimum time requirement.

Let's see an example with the input grid:
```
[[0,1,3,2],
 [5,1,2,5],
 [4,3,8,6]]
```

Starting at (0,0):
1. Initial state: times[0][0] = 0
2. From (0,0), we can move to (0,1) or (1,0):
   - For (0,1): grid[0][1] = 1, we can move there at time 1
   - For (1,0): grid[1][0] = 5, we need to wait until time 5

3. The priority queue will process (0,1) first since it has lower time
4. From (0,1), we explore (0,2) and (1,1)
   And so on...

The algorithm continues this way, always choosing the path with minimum time, until we reach the bottom-right cell or determine it's impossible.

# Complexity

- Time complexity: O(MN log(MN))
    - Priority queue operations take O(log(MN)) time
    - Each cell can be visited multiple times but bounded by maximum time
    - Total operations = O(MN) vertices \xD7 O(log(MN)) for priority queue

- Space complexity: O(MN)
    - times[][] array: O(MN)
    - Priority queue: O(MN) worst case
    - Additional space (directions array, temp variables): O(1)

# Code
```kotlin []
class Solution {
    fun minimumTime(grid: Array<IntArray>): Int {
        if (grid[0][1] > 1 && grid[1][0] > 1) return -1
        
        val m = grid.size
        val n = grid[0].size
        val directions = arrayOf(intArrayOf(1, 0), intArrayOf(-1, 0), intArrayOf(0, 1), intArrayOf(0, -1))
        val times = Array(m) { Array(n) { Int.MAX_VALUE } }
        times[0][0] = 0
        
        val pq = PriorityQueue<IntArray>(compareBy { it[2] })
        pq.offer(intArrayOf(0, 0, 0))
        
        while (pq.isNotEmpty()) {
            val (row, col, time) = pq.poll()
            
            if (time > times[row][col]) continue
            if (row == m - 1 && col == n - 1) return time
            
            for ((dr, dc) in directions) {
                val newRow = row + dr
                val newCol = col + dc
                
                if (newRow in 0 until m && newCol in 0 until n) {
                    val newTime = time + 1
                    val waitTime = if (grid[newRow][newCol] > newTime) {
                        grid[newRow][newCol] + (grid[newRow][newCol] - newTime) % 2
                    } else newTime
                    
                    if (waitTime < times[newRow][newCol]) {
                        times[newRow][newCol] = waitTime
                        pq.offer(intArrayOf(newRow, newCol, waitTime))
                    }
                }
            }
        }
        return -1
    }
}
```

## [Updated] How are we calculating waitTime?
Let me break down the waitTime calculation and explain the intuition behind it. This is one of the trickier parts of the solution.

First, let's understand what we're trying to solve:
```kotlin
val newTime = time + 1  // Time after moving to the new cell
val waitTime = if (grid[newRow][newCol] > newTime) {
    grid[newRow][newCol] + (grid[newRow][newCol] - newTime) % 2
} else newTime
```

Let's say we're at time 3 and want to move to a cell that requires minimum time 7 (grid[newRow][newCol] = 7). What should we do?

Case 1: When grid[newRow][newCol] <= newTime
- If we can enter the cell immediately (the cell's required time is less than or equal to our arrival time)
- We just use newTime (time + 1)
- Example: We arrive at time 8, cell requires time 7 \u2192 we can enter immediately at time 8

Case 2: When grid[newRow][newCol] > newTime
This is where it gets interesting. Let's work through an example:
- We arrive at time 4 (newTime)
- Cell requires time 7 (grid[newRow][newCol])
- We can't enter immediately, so we need to wait
- But here's the key insight: We can't just wait until time 7!

Why? Because of an important constraint in the problem: we must keep moving every second. We can't stay in the same place. So if we need to wait, we need to move back and forth between adjacent cells until we reach the required time.

The formula `grid[newRow][newCol] + (grid[newRow][newCol] - newTime) % 2` handles this:
1. First part `grid[newRow][newCol]`: We need at least this much time
2. Second part `(grid[newRow][newCol] - newTime) % 2`: This accounts for the back-and-forth movement

Let's see a concrete example:
```
Current time: 4
Cell requires: 7
gap = 7 - 4 = 3

We need to:
t=4: Try to enter but can't
t=5: Move back
t=6: Move forward
t=7: Finally enter

The formula gives us:
7 + (7-4)%2 = 7 + 3%2 = 7 + 1 = 8
```

The %2 part is crucial because:
- If the gap is even, we'll end up back at the cell at exactly the required time
- If the gap is odd, we'll need one extra move to get back to the cell