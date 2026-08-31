# Scala

**Author:** kamikumakun
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-islands/solutions/2981592/](https://leetcode.com/problems/number-of-islands/solutions/2981592/)

---

# DFS

# Complexity
- Time complexity: O(M * N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(M * N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def numIslands(grid: Array[Array[Char]]): Int = {
        
        val m = grid.length
        val n = grid(0).length

        def dfs(row: Int, col: Int): Unit = {
            if(row < 0 || row >= m || col < 0 || col >= n || grid(row)(col).equals('0')) ()
            else {
                grid(row)(col) = '0'
                for {
                    dirX <- (-1 to 1)
                    dirY <- (-1 to 1)
                    if dirX.abs != dirY.abs
                } dfs(row + dirX, col + dirY)
            }
        }

        val islands = for {
            row <- (0 until m)
            col <- (0 until n)
            if(grid(row)(col).equals('1'))
        } yield dfs(row, col)

        islands.length
    }
}
```

# BFS

# Complexity
- Time complexity: O(M * N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(min(M, N))
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def numIslands(grid: Array[Array[Char]]): Int = {

        val m = grid.length
        val n = grid(0).length

        case class Square(row: Int, col: Int)

        import scala.collection.mutable.Queue

        def bfs(square: Square): Unit = {

            grid(square.row)(square.col) = '0'

            val queue = Queue[Square](square)

            while(queue.nonEmpty) {
                val current = queue.dequeue
                val row = current.row
                val col = current.col
                for {
                    dirX <- (-1 to 1)
                    dirY <- (-1 to 1)
                    if dirX.abs != dirY.abs &&
                    row + dirX >= 0 &&
                    row + dirX < m &&
                    col + dirY >= 0 &&
                    col + dirY < n &&
                    grid(row + dirX)(col + dirY).equals('1')
                } {
                    val newRow = row + dirX
                    val newCol = col + dirY

                    grid(newRow)(newCol) = '0'

                    val newSquare = Square(newRow, newCol)
                    queue.append(newSquare)
                }
            }
        }
        
        val islands = for {
            row <- (0 until m)
            col <- (0 until n)
            if(grid(row)(col).equals('1'))
        } yield bfs(Square(row, col))

        islands.length
    }
}
```