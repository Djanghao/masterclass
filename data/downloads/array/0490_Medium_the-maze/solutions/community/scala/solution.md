# Scala simple bfs + hash set, easy to understand and implement

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-maze/solutions/2786243/](https://leetcode.com/problems/the-maze/solutions/2786243/)

---

```
import scala.collection.mutable

object Solution {
    case class Position(x: Int, y: Int)
    
    def hasPath(maze: Array[Array[Int]], start: Array[Int], destination: Array[Int]): Boolean = {
        val directions = List((-1,0),(1,0),(0,-1),(0,1))
        val visited = mutable.Set.empty[Position]
        val queue = mutable.Queue.empty[Position]
        queue.enqueue(Position(start(1),start(0)))
        while(queue.nonEmpty) {
            queue.dequeue() match {
                case pos if pos.x == destination(1) && pos.y == destination(0) => 
                    return true
                case pos =>
                    visited += pos
                    directions.foreach {
                        case (xOffset, yOffset) => {
                            var x = pos.x
                            var y = pos.y
                            // roll to the end of maze or to the wall
                            while(
                                y + yOffset < maze.length && 
                                y + yOffset >= 0 &&
                                x + xOffset < maze(0).length && 
                                x + xOffset >= 0 &&
                                maze(y + yOffset)(x + xOffset) == 0) {
                                x += xOffset
                                y += yOffset
                            }
                            // save the end pos if we have never used the point as starting location
                            if(!visited.contains(Position(x,y))) {
                                queue.enqueue(Position(x,y))
                            }
                        }
                    }
            }
        }
        false
    }
}
```