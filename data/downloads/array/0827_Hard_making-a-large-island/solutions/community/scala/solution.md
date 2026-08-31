# Scala iterative BFS solution

**Author:** quanyincode
**Votes:** 0
**Link:** [https://leetcode.com/problems/making-a-large-island/solutions/4489284/](https://leetcode.com/problems/making-a-large-island/solutions/4489284/)

---

# Intuition
Perform a BFS on the grid and mark visited cells with a group index. In the second pass, check each 0 value cell and find the max areas it can connect.

# Approach
See the inline comments.

# Complexity
- Time complexity:
O(n*n) - assume the grid is n x n

- Space complexity:
O(n*n) - worst case hashmap and queue size

# Code
```
object Solution {
  import collection.mutable

  def largestIsland(grid: Array[Array[Int]]): Int = {
    val n = grid.length // grid is n x n
    val areaMap = mutable.Map.empty[Int, Int] // island index -> area

    // helper function to find adjacent cells
    def adjacentCells(row: Int, col: Int): List[(Int, Int)] =
      List((row - 1, col), (row + 1, col), (row, col - 1), (row, col + 1))
        .filter { case (i, j) => i >= 0 && i < n && j >= 0 && j < n }

    var index = 10 // start the index at 10
    for (i <- 0 until n; j <- 0 until n if grid(i)(j) == 1) {
      // start BFS
      var area = 0
      grid(i)(j) = index // mark visited cells with index
      val queue = mutable.Queue((i, j))
      while (queue.nonEmpty) {
        val (row, col) = queue.dequeue
        area += 1
        for ((x, y) <- adjacentCells(row, col) if grid(x)(y) == 1) {
          grid(x)(y) = index
          queue.addOne((x, y))
        }
      }
      areaMap.addOne(index -> area)
      index += 1
    }

    var largestArea = 0
    // go through each 0 valued cell, and keep track of the max areas it can connect
    for (i <- 0 until n; j <- 0 until n if grid(i)(j) == 0) {
      val connectedArea = adjacentCells(i, j)
        .filter { case (r, c) => grid(r)(c) > 1 }
        .map { case (r, c) => grid(r)(c) -> areaMap(grid(r)(c)) }
        .distinctBy(_._1)
        .map(_._2)
        .sum + 1
      largestArea = math.max(largestArea, connectedArea)
    }

    math.max(largestArea, if (areaMap.isEmpty) 0 else areaMap.values.max)
  }
}
```