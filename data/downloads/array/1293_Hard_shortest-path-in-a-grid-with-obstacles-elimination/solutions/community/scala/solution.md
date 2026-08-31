# Scala modified Dijkstra

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/4731135/](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/4731135/)

---

# Intuition
If it wasn't for the obstacles, this could be solved with the typical Dijkstra algorithm.
What we need to modify is the condition by which is not worth visiting again a cell.
That reason can be that we're getting to an already visited cell with less steps or with more block removers.
We also want to use a heap rather than a queue, for efficiency. The heap will give us the best possible next cell to visit: it will be the one that has taken less steps to reach and has more remaining block removers

# Code
```
object Solution {
  import collection.mutable
  def shortestPath(grid: Array[Array[Int]], k: Int): Int = {
    val m = grid.length
    val n = grid.head.length
    val q = mutable.PriorityQueue((0 -> 0, k, 0))(Ordering.by(t => (-t._3, -t._2)))
    val seen = Array.fill(m)(Array.fill(n)(Array(0, Int.MaxValue))) // seen cells with recorded remaining blocks and steps: will visit again if we have less steps or more block removers
    while (q.nonEmpty) {
      val (cell@(y, x), blockRemovers, steps) = q.dequeue
      if (y == m - 1 && x == n - 1) return steps
      if ((seen(y)(x)(0) < blockRemovers || seen(y)(x)(1) > steps) && (blockRemovers > 0 || grid(y)(x) == 0)) {
        seen(y)(x)(0) = seen(y)(x)(0).max(blockRemovers)
        seen(y)(x)(1) = seen(y)(x)(1).min(steps)
        val remainingBlockRemovers = blockRemovers - (if (grid(y)(x)==0) 0 else 1)
        val nextCells = Seq((-1, 0), (0, 1), (1, 0), (0, -1))
          .map { case (dy, dx) => (dy + y, dx + x) }
          .filter { case (ny, nx) => nx >= 0 && ny >= 0 && ny < m && nx < n && (seen(ny)(nx)(0) < remainingBlockRemovers || seen(ny)(nx)(1) > steps + 1) }

        nextCells.foreach { case next => q.enqueue((next, remainingBlockRemovers, steps + 1)) }
      }
    }
    -1
  }
}
```