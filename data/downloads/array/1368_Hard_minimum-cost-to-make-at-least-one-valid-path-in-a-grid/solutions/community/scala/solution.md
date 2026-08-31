# Shortest Path

**Author:** jdsalchow
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/5752714/](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/5752714/)

---

# Intuition
Interpret this as a shortest path problem and solve it using Dijkstra.


# Code
```scala []
object Solution {

    case class Cell(x: Int, y: Int, cost: Int)
  
    implicit val cellOrdering: Ordering[Cell] = Ordering.by(-_.cost)
  
    val directions = Map(1 -> (0, 1), 2 -> (0, -1), 3 -> (1, 0), 4 ->(-1, 0))

    def minCost(grid: Array[Array[Int]]): Int = {
        val m = grid.length
        val n = grid(0).length

        val dist = Array.fill(m, n)(Int.MaxValue)
        dist(0)(0) = 0
     
        val pq = scala.collection.mutable.PriorityQueue[Cell](Cell(0, 0, 0))

        while (pq.nonEmpty) {
            val current = pq.dequeue()

            if (current.x == m - 1 && current.y == n - 1) return current.cost

            // Explore all 4 possible directions: right, left, down, up
            for (i <- directions.keys) {
                val (dx, dy) = directions(i)
                val nx = current.x + dx
                val ny = current.y + dy

                // Check if the next cell is within bounds
                if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                    val newCost = current.cost + (if (i == grid(current.x)(current.y)) 0 else 1)

                    if (newCost < dist(nx)(ny)) {
                        dist(nx)(ny) = newCost
                        pq.enqueue(Cell(nx, ny, newCost))
                    }
                }
            }
        }

        dist(m - 1)(n - 1)
    }
}
```