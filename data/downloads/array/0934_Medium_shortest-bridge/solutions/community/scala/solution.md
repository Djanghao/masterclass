# Scala

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-bridge/solutions/3549546/](https://leetcode.com/problems/shortest-bridge/solutions/3549546/)

---

# Complexity
- Time complexity: O(N^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.collection.mutable.Queue

object Solution {
    def shortestBridge(grid: Array[Array[Int]]): Int = {
        
        var found = false

        var x = -1
        var y = -1

        val n = grid.length

        for {
            i <- 0 until n
            j <- 0 until n
            if x == -1 && y == -1 && grid(i)(j) == 1
        } {
            x = i
            y = j
        }

        val queue = Queue[(Int, Int)]((x, y))
        val secondQueue = Queue[(Int, Int)]((x, y))
        grid(x)(y) = 2

        val direction = Array((-1, 0), (1, 0), (0, -1), (0, 1))

        while(queue.nonEmpty) {

            val size = queue.size

            for(_ <- 0 until size) {

                val (row, col) = queue.dequeue

                for((dirx, diry) <- direction) {

                    val newRow = row + dirx
                    val newCol = col + diry

                    if(newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && grid(newRow)(newCol) == 1) {
                        grid(newRow)(newCol) = 2
                        queue.enqueue((newRow, newCol))
                        secondQueue.enqueue((newRow, newCol))

                    }
                    

                }

            }

        }

        var distance = 0

        while(secondQueue.nonEmpty) {

            val size = secondQueue.size

            for(_ <- 0 until size) {

                val (row, col) = secondQueue.dequeue

                for((dirx, diry) <- direction) {

                    val newRow = row + dirx
                    val newCol = col + diry

                    if(newRow >= 0 && newRow < n && newCol >= 0 && newCol < n) {

                        if(grid(newRow)(newCol) == 1) return distance
                        else if(grid(newRow)(newCol) == 0) {
                            grid(newRow)(newCol) = 2
                            secondQueue.enqueue((newRow, newCol))
                        }
                    }
                    

                }

            }

            distance += 1

        }

        distance

    }
}
```