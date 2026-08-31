# Scala DFS with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-islands/solutions/4646401/](https://leetcode.com/problems/number-of-distinct-islands/solutions/4646401/)

---

# Complexity
- Time complexity:
For each cell that is part of an island (marked with a 1), a Depth-First Search (DFS) is initiated. The DFS, in the worst case, can visit all cells of the grid once. However, since a cell is marked as visited (or part of an island already counted) when it's included in an island, each cell is visited only once across all DFS calls. Therefore, the DFS does not add additional complexity in terms of the number of cells.

$$O(rows * cols)$$, where rows and cols are the dimensions of the grid.

- Space complexity:
The primary additional space used by the algorithm is for the recursive calls of the DFS function. In the worst case, the DFS can go as deep as the total number of cells in the grid (if the grid is entirely filled with 1s and the DFS traverses in a snake-like pattern). Therefore, the space complexity due to recursion stack can be $$O(rows * cols)$$.

Additionally, the space used by the HashSet to store the unique identifiers for the islands and the StringBuilder for creating these identifiers also contributes to the space complexity. However, these do not exceed the complexity of the recursion stack.

$$O(rows * cols)$$, where rows and cols are the dimensions of the grid.

# Code
```
import scala.collection.mutable.{Set, StringBuilder}

// Solution to find the number of distinct islands in a grid
object Solution {

  // Variables to store the grid and its dimensions
  var grid: Array[Array[Int]] = _
  var rows: Int = _
  var cols: Int = _

  // Function to initiate the process of finding distinct islands
  def numDistinctIslands(grid: Array[Array[Int]]): Int = {
    val set: Set[String] = Set()

    this.grid = grid
    this.rows = grid.length
    this.cols = grid(0).length

    for (r <- 0 until rows) {
      for (c <- 0 until cols) {
        if (grid(r)(c) == 1) {
          val sb = new StringBuilder
          scan(r, c, sb, "start")
          set += sb.toString()
        }
      }
    }
    set.size
  }

  // Recursive function to perform DFS and mark the structure of each island
  def scan(row: Int, col: Int, sb: StringBuilder, direction: String): Unit = {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid(row)(col) == 0) {
      return
    }

    grid(row)(col) = 0 // Mark as visited
    sb.append(direction)
    scan(row + 1, col, sb, "down")
    scan(row - 1, col, sb, "up")
    scan(row, col + 1, sb, "right")
    scan(row, col - 1, sb, "left")
    sb.append("end")
  }
}

```