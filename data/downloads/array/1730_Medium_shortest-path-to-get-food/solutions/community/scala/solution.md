# scala BFS

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-to-get-food/solutions/5213153/](https://leetcode.com/problems/shortest-path-to-get-food/solutions/5213153/)

---

# Intuition
The problem is to find the shortest path from a starting point (marked by '*') to a target point (marked by '#') in a grid, avoiding obstacles (marked by 'X'). This is a classic shortest path problem on a grid, which can be efficiently solved using Breadth-First Search (BFS). BFS is particularly suitable because it explores all nodes at the present depth level before moving on to nodes at the next depth level, ensuring the shortest path is found.

# Approach
1. **Initialization:** Define the possible directions for movement in the grid. Initialize a queue to manage the BFS and a `visited` matrix to keep track of visited cells.
2. **Locate Start:** Iterate through the grid to find the starting point ('*') and add it to the queue.
3. **Breadth-First Search (BFS):**
   - While the queue is not empty, process each cell layer by layer.
   - For each cell, check if it is the target ('#'). If so, return the current distance as the result.
   - Otherwise, explore all possible moves (up, down, left, right) from the current cell. Add unvisited and non-obstacle cells to the queue and mark them as visited.
4. **Return Result:** If the BFS completes without finding the target, return -1 to indicate the target is unreachable.

# Complexity
- **Time complexity:**
  - The time complexity is $$O(m \	imes n)$$ where \\(m\\) is the number of rows and \\(n\\) is the number of columns in the grid. In the worst case, each cell is processed once.

- **Space complexity:**
  - The space complexity is also $$O(m \	imes n)$$. This is due to the space required for the `visited` matrix and the queue, both of which can grow to the size of the entire grid in the worst case.


# Code
```
import scala.collection.mutable

object Solution {
  def getFood(grid: Array[Array[Char]]): Int = {
    val dirs = Array((0, 1), (1, 0), (-1, 0), (0, -1))
    var found = false
    var result = -1

    for (i <- grid.indices if !found) {
      for (j <- grid(i).indices if !found) {
        if (grid(i)(j) == '*') {
          val q = mutable.Queue((i, j))
          val visited = Array.fill(grid.length, grid(0).length)(false)
          visited(i)(j) = true
          var width = 0

          while (q.nonEmpty && !found) {
            val len = q.size
            for (_ <- 0 until len) {
              val (x, y) = q.dequeue()
              if (grid(x)(y) == '#') {
                result = width
                found = true
              } else {
                for ((dx, dy) <- dirs) {
                  val nx = x + dx
                  val ny = y + dy
                  if (nx >= 0 && ny >= 0 && nx < grid.length && ny < grid(0).length) {
                    if (!visited(nx)(ny) && grid(nx)(ny) != 'X') {
                      visited(nx)(ny) = true
                      q.enqueue((nx, ny))
                    }
                  }
                }
              }
            }
            width += 1
          }
        }
      }
    }
    result
  }
}

```