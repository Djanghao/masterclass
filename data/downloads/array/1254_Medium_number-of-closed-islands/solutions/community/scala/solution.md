# beats 100% runtime

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-closed-islands/solutions/5901591/](https://leetcode.com/problems/number-of-closed-islands/solutions/5901591/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(m.n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(m.n)
# Code
```scala []
import scala.collection.mutable
object Solution {
  def closedIsland(grid: Array[Array[Int]]): Int = {
    val visited = new mutable.HashSet[(Int, Int)]()
    grid.indices.map { i =>
      grid(i).indices.count { j =>
        grid(i)(j) == 0 && !visited.contains((i,j)) && bfs(i, j, grid, visited) 
      }
    }.sum
  }

  val DIRECTIONS = List((-1, 0), (0, -1), (0, 1), (1, 0))

  private def bfs(i: Int, j: Int, grid: Array[Array[Int]], visited: mutable.Set[(Int, Int)]): Boolean = {
    val queue = new mutable.Queue[(Int, Int)]()
    queue.addOne((i, j))
    visited.add((i, j))
    var closed = true
    while (queue.nonEmpty) {
      val node = queue.dequeue()
      DIRECTIONS.foreach { direction =>
        val row = direction._1 + node._1
        val col = direction._2 + node._2
        if (grid.isDefinedAt(row) && grid(row).isDefinedAt(col)) {
          if( grid(row)(col)==0 && !visited.contains((row, col))) {
            visited.add((row, col))
            queue.addOne((row, col))
          }
        } else closed = false
      }
    }
    closed
  }

}
```