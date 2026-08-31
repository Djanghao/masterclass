# Scala O(n + q log q). partitioned BFS

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/5011623/](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/5011623/)

---

# Intuition
One could repeat bfs for each query, but it would be a lot of repetition.
If the queries get sorted from smaller to larger, then bfs can start at the top left cell, reach the cells that cross the current query limit and put them in another queue.
The next query from continue from that other queue.
Also, no need to repeat queries for the same values.

# Approach
* sort the queries by value, keeping track of their position in the result array
* initialise 2 queues: will be used in alternation. One queue to do bfs for the current query, and one queue to put the cells that cross the current query limit
* initialise a visited matrix to not visit twice the same cells
* loop through the sorted queries
* for all the queries after the first one, initialise the result with the previous score: all the cells reached by the previous bfs would be reached by the current one, since the current query limit is greater or equal than the previous one
* if the previous query had the same value of the current one, just swap the queues
* otherwise proceed with bfs. If a cell with greater than or equal value than the current query limit is encountered, put it in the next queue (nq) 

# Complexity
- Time complexity:
$$O(n + q log q)$$
where $$n$$ is the number of cells in the grid and q is the number of queries (they get sorted)

- Space complexity:
$$O(n)$$

# Code
```
object Solution {
  import collection.mutable
  private val moves = Seq((-1,0),(1,0),(0,-1),(0,1))
  def maxPoints(grid: Array[Array[Int]], queries: Array[Int]): Array[Int] = {
    val m = grid.length
    val n = grid.head.length
    val sortedQueries = queries.zipWithIndex.sortBy(_._1)
    val result = Array.ofDim[Int](queries.length)
    val visited = Array.fill(m)(Array.ofDim[Boolean](n))
    val queues = Array.fill(2)(mutable.Queue.empty[(Int, Int)])
    queues(0).enqueue(0 -> 0)
    sortedQueries.zipWithIndex.foreach {
      case ((limit, resultIndex), queryIndex) =>
        // Copy the score for the previous query
        if (queryIndex > 0) result(resultIndex) = result(sortedQueries(queryIndex - 1)._2)
        if (queryIndex > 0 && sortedQueries(queryIndex - 1)._1 == limit) {
          // repeated query: just swap the queues
          val q = queues(queryIndex & 1)
          queues(queryIndex & 1) = queues(queryIndex & 1 ^ 1)
          queues(queryIndex & 1 ^ 1) = q
        } else {
          val q = queues(queryIndex & 1)
          val nq = queues(queryIndex & 1 ^ 1)
          nq.clear
          while (q.nonEmpty) {
            val cell@(i, j) = q.dequeue
            if (!visited(i)(j)) {
              if (grid(i)(j) >= limit) {
                nq.enqueue(cell)
              } else {
                visited(i)(j) = true
                result(resultIndex) += 1
                moves.map {
                  case (di, dj) => (di + i, dj + j)
                }
                .collect {
                  case next@(ni, nj) if ni >= 0 && nj >= 0 && ni < m && nj < n && !visited(ni)(nj) => next
                }
                .foreach(q.enqueue(_))
              }
            }
          }
        }
    }
    result
  }
}
```