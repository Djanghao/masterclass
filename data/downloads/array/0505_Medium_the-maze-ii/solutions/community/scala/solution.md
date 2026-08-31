# scala solution with comments Dijkstra's algorithm

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-maze-ii/solutions/4655365/](https://leetcode.com/problems/the-maze-ii/solutions/4655365/)

---

# Code
```
// Import necessary Scala collections
import scala.collection.mutable

// Solution object to encapsulate the shortestDistance method
object Solution {
  // Represents a cell in the maze
  case class Cell(x: Int, y: Int)

  /**
   * Finds the shortest distance in a maze from start to destination.
   *
   * @param maze Array of Array of Int representing the maze (0 for empty space, 1 for wall)
   * @param start Array of 2 Ints representing the starting coordinates
   * @param destination Array of 2 Ints representing the destination coordinates
   * @return The shortest distance to the destination, or -1 if unreachable
   */
  def shortestDistance(maze: Array[Array[Int]], start: Array[Int], destination: Array[Int]): Int = {
    val rows = maze.length
    val cols = maze(0).length

    // Initialize distance array with max value, indicating unvisited
    val distance = Array.fill(rows, cols)(Int.MaxValue)
    // Priority queue for cells to visit, ordered by current distance
    val pq = mutable.PriorityQueue[(Cell, Int)]()(Ordering.by(_._2)).reverse

    // Enqueue start position with distance 0
    pq.enqueue((Cell(start(0), start(1)), 0))
    distance(start(0))(start(1)) = 0

    // Directions for moving in the maze
    val dirs = Seq((1, 0), (-1, 0), (0, 1), (0, -1))

    // Check if a position is valid and not a wall
    def isValidAndEmptySpace(x: Int, y: Int) = x >= 0 && x < rows && y >= 0 && y < cols && maze(x)(y) == 0

    // Dijkstra's algorithm
    while (pq.nonEmpty) {
      val (from, cost) = pq.dequeue
      if (distance(from.x)(from.y) >= cost) {
        for (d <- dirs) {
          var toX = from.x + d._1
          var toY = from.y + d._2
          var steps = 0
          // Roll in the direction until hitting a wall
          while (isValidAndEmptySpace(toX, toY)) {
            toX += d._1
            toY += d._2
            steps += 1
          }
          // Step back to last valid position
          toX -= d._1
          toY -= d._2

          // Update distance if shorter path is found
          if (distance(from.x)(from.y) + steps < distance(toX)(toY)) {
            distance(toX)(toY) = distance(from.x)(from.y) + steps
            pq.enqueue((Cell(toX, toY), distance(toX)(toY)))
          }
        }
      }
    }
    // Return shortest distance or -1 if destination is unreachable
    if (distance(destination(0))(destination(1)) == Int.MaxValue) -1 else distance(destination(0))(destination(1))
  }
}

```