# Scala BFS with cache

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-maze-iii/solutions/3733627/](https://leetcode.com/problems/the-maze-iii/solutions/3733627/)

---

# Intuition
TBA

# Approach
TBA

# Complexity
- Time complexity:
TBA

- Space complexity:
TBA

# Code
```
import scala.collection.mutable

object Solution {

    case class Position(y: Int, x: Int)

    case class Direction(offsetY: Int, offsetX: Int, name: Char)

    def findShortestWay(maze: Array[Array[Int]], ball: Array[Int], hole: Array[Int]): String = {
        val queue = mutable.Queue.empty[(Position, Int, Vector[Char])]
        val visited = mutable.Map.empty[Position, Int]
        val directions = List(Direction(-1,0,'u'), Direction(1,0,'d'), Direction(0,-1,'l'), Direction(0,1,'r'))
        val destinationPos = Position(hole(0), hole(1))
        val startPos = Position(ball(0), ball(1))
        var minSteps: Option[Int] = None
        var minPath: Option[String] = None
        queue.enqueue((startPos, 0, Vector.empty[Char]))
        while(queue.nonEmpty) {
            queue.dequeue() match {
                // only check if not cached or doesn't improve
                case (currentPosition, steps, path) if !visited.contains(currentPosition) || visited.get(currentPosition).exists(_ >= steps) =>
                    visited(currentPosition) = steps
                    directions.foreach {
                        case Direction(offsetY, offsetX, direction) =>
                            var y = currentPosition.y
                            var x = currentPosition.x
                            // move to the end
                            while(
                                x + offsetX >= 0 &&
                                y + offsetY >= 0 &&
                                y + offsetY < maze.length &&
                                x + offsetX < maze(y + offsetY).length &&
                                maze(y + offsetY)(x + offsetX) == 0 &&
                                (x != destinationPos.x || y != destinationPos.y)
                            ) {
                                y += offsetY
                                x += offsetX
                            }
                            val potentialPos = Position(y, x)
                            val potentialSteps = steps + (x-currentPosition.x).abs + (y-currentPosition.y).abs
                            val potentialPath = path.appended(direction)
                            if(potentialPos == destinationPos) {
                                minSteps = minSteps match {
                                    case Some(prevMin) if potentialSteps < prevMin => 
                                        minPath = Some(potentialPath.mkString)
                                        Some(potentialSteps)
                                    case Some(prevMin) if prevMin < potentialSteps => 
                                        Some(prevMin)
                                    case Some(prevMin) if prevMin == potentialSteps => 
                                        minPath = minPath.map {
                                            case minPath if minPath.mkString < path.mkString =>
                                                minPath.mkString
                                            case _ =>
                                                potentialPath.mkString
                                        }
                                        Some(prevMin)    
                                    case _ => 
                                        minPath = Some(potentialPath.mkString)
                                        Some(potentialSteps)
                                }
                            } else if(potentialPos != currentPosition && 
                                (!visited.contains(potentialPos) || visited.get(potentialPos).exists(_ >= potentialSteps))) {
                                    queue.enqueue((
                                        potentialPos, 
                                        potentialSteps,
                                        potentialPath
                                    ))
                            }
                    }
                case _ =>
            }
        }
        minPath.getOrElse("impossible")
    }
}
```