# Scala solution

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-snake-game/solutions/2960613/](https://leetcode.com/problems/design-snake-game/solutions/2960613/)

---

# Intuition
Problem can be solved by implementing game rules.

# Approach
To implement a tail we can use a queue. On each move we are going to add new point and extract the last point. If we found a food, we don't extract the last point. To make solution memory efficient, it is better to use Map(y -> Map(x -> V)) instead of an array. The array solution will require O(W * H) space minimum. The map solution will require space O(F) where F is a size of food array.

# Complexity
- Time complexity:
O(W * H) min O(F)

- Space complexity:
O(W * H) min O(F)

# Code
```
import scala.collection.mutable

sealed trait SnakeGameEntities
case class SnakeTail() extends SnakeGameEntities
case class SnakeFood() extends SnakeGameEntities

class SnakeGame(_width: Int, _height: Int, _food: Array[Array[Int]]) {

    private val directions = Map("R" -> (1,0), "L" -> (-1,0), "U" -> (0,-1), "D" -> (0,1))
    private val tail = mutable.Queue.empty[(Int, Int)]
    private val food = mutable.Queue.from(_food.map{ case Array(y,x) => (y,x) })
    // a map is generally much more memory efficient than an array in this case because game ends much earlier than entire area is used
    private val playArea = mutable.Map.empty[Int, mutable.Map[Int, SnakeGameEntities]]

    private var length = 1
    private var x = 0
    private var y = 0
    private var gameOver = false
    private var foodAdded = false

    def move(direction: String): Int = {
        // place food
        if(!foodAdded && food.nonEmpty) {
            food.dequeue() match {
                case (fy,fx) => 
                    if(!playArea.contains(fy)) {
                        playArea(fy) = mutable.Map.empty[Int, SnakeGameEntities]
                    }
                    playArea(fy)(fx) = SnakeFood()
            }
            foodAdded = true
        }
        if(gameOver) {
            return endGame()
        }

        directions(direction) match {
            case (offsetX, offsetY) =>
                // add tail
                tail.enqueue((y, x))
                if(!playArea.contains(y)) {
                    playArea(y) = mutable.Map.empty[Int, SnakeGameEntities]
                }
                playArea(y)(x) = SnakeTail()
                // calculate new position
                x = x + offsetX
                y = y + offsetY
                if(x < 0 || y < 0 || x >= _width || y >= _height) {
                    return endGame()
                }
                val lastTail = tail.headOption
                playArea.get(y).flatMap(_.get(x)) match {
                    case None => 
                        moveTail()
                    case Some(SnakeTail()) if lastTail.exists{case (ty,tx) => tx == x && ty == y} => 
                        moveTail()
                    case Some(SnakeTail()) => 
                        return endGame()
                    case Some(SnakeFood()) => 
                        length += 1
                        foodAdded = false
                }
        }
        length - 1
    }

    private def moveTail(): Unit = {
        if(tail.nonEmpty) {
            tail.dequeue() match {
                case (ty,tx) => 
                    playArea(ty) -= tx
            }
        }
    }
    private def endGame(): Int = {
        gameOver = true
        -1
    }

}

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */
```