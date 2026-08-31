# Simple solution using multi source BFS with some explanation, beats 100%

**Author:** stefancomanita
**Votes:** 0
**Link:** [https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3167807/](https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3167807/)

---

# Approach
Simple solution using multi source BFS, beats 100%.

We do a plain BFS but in the first step we add to the queue all the land values, after that we move in a BFS manner to the watter cells and update them with the distnace we have traveled so far.

We update the original matrix to keep track of the distance from land and the visited set.

We return the max distance (minus 1) in order to account for the distance of the starting distance.


# Code
```
object Solution {
    def maxDistance(grid: Array[Array[Int]]): Int = {

    val q: scala.collection.mutable.Queue[(Int, Int)] = scala.collection.mutable.Queue[(Int, Int)]()

    for (row <- grid.indices) {
      for (col <- grid.head.indices) {

        if (grid(row)(col) == 1) {
          q.enqueue((row, col))
        }
      }
    }

    val directions = Array((0, 1), (1, 0), (0, -1), (-1, 0))

    var result = -1

    while (q.nonEmpty) {

      val (row, col) = q.dequeue()

      result = Math.max(grid(row)(col), result)

      for ((deltaRow, deltaCol) <- directions) {

        val newRow = row + deltaRow
        val newCol = col + deltaCol

        if (Math.min(newRow, newCol) >= 0 && Math.max(newRow, newCol) < grid.length && grid(newRow)(newCol) == 0) {
          q.enqueue((newRow, newCol))

          grid(newRow)(newCol) = grid(row)(col) + 1
        }
      }
    }

    if (result > 1) {
      return result - 1
    }
    
    -1
  }
}
```