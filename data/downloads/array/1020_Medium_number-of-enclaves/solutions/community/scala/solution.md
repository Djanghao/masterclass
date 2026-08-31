# Scala

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/3391594/](https://leetcode.com/problems/number-of-enclaves/solutions/3391594/)

---


# Complexity
- Time complexity: O(MN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(MN)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {

    import scala.collection.mutable.Queue

    def numEnclaves(grid: Array[Array[Int]]): Int = {

        val m = grid.length
        val n = grid.head.length

        val visited = Array.ofDim[Boolean](m, n)

        var result = 0

        def bfs(row: Int, col: Int): Int = {

            val queue = Queue[(Int, Int)]((row, col))
            visited(row)(col) = true

            var result = 0
            var withinBoundary = true

            val directional = Array((1, 0), (0, 1), (-1, 0), (0, -1))

            while(queue.nonEmpty) {

                val (currentRow, currentCol) = queue.dequeue
                result += 1

                for {
                    (directionX, directionY) <- directional
                    newRow = currentRow + directionX
                    newCol = currentCol + directionY
                } {

                    if(newRow < 0 || newRow >= m || newCol < 0 || newCol >= n) withinBoundary = false
                    else if(!visited(newRow)(newCol) && grid(newRow)(newCol) == 1) {
                        queue.enqueue((newRow, newCol))
                        visited(newRow)(newCol) = true
                    }

                }


            }

            if(withinBoundary) result else 0
        }

        for {
            row <- grid.indices
            col <- grid(row).indices
            if !visited(row)(col) &&
            grid(row)(col) == 1
        } {
            result += bfs(row, col)
        }

        result
    }

}
```