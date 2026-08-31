# Questions to ask yourself while designing this snake game.

**Author:** 2pac_shakur
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-snake-game/solutions/941346/](https://leetcode.com/problems/design-snake-game/solutions/941346/)

---



1. How to augment snake movement ? - 2d-grid with **deque**
2. How to move to next location ? - based on the `direction` received in the `move()`
3. How to check if snake head touches border ? - handle it in `isHeadTouchingBorders()`
4. How to check if snake is eating itself ? - handle it in `isEatingItself()`
5. What happens if snake tries to eat it's tail location ? - **It depends**
	*  Does the tail location have next available food ? - yes, it is eating itself
	*  No? - then snake is not eating itself, but it is just moving in a circle. (DAMN! snakey)
6. When to `squeezeTail()` ? - all moves when the food is over OR next location doesn't have any food.
7. Where to store snakeLen co-ordinates ? - hashset maybe?

**NOTE**: When snake head moves to a newLocation which has food, the tail will not get squeezed

```
class SnakeGame(val C: Int, val R: Int, val food: Array<IntArray>) {

    private var foodIndex = 0
    private var headX = 0
    private var headY = 0
    private val snake: Deque<Pair<Int, Int>> = ArrayDeque()
    private val snakeLen: MutableSet<Pair<Int, Int>> = HashSet()
    private var score = 0

    fun move(dir: String): Int {
        val (nX, nY) = nextLocation(dir)
        headX += nX
        headY += nY
        if (isEatingItself()) {
            return -1
        }
        moveFront()
        if (isHeadTouchingBorders()) {
            return -1
        }
        if (foodIndex < food.size) {
            val (fX, fY) = food[foodIndex]
            if (headX == fX && headY == fY) {
                score++
                foodIndex++
            } else {
                squeezeTail()
            }
        } else {
            squeezeTail()
        }
        return score
    }

    private fun moveFront() {
        snake.addFirst(headX to headY)
        snakeLen.add(headX to headY)
    }

    private fun squeezeTail() {
        if (snake.isNotEmpty()) {
            snakeLen.remove(snake.removeLast())
        }
    }

    private fun isEatingItself(): Boolean {
        if (snake.isEmpty()) return false
        val (tailX, tailY) = snake.peekLast()
        if (headX == tailX && headY == tailY) {
            if (foodIndex < food.size && food[foodIndex][0] == headX && food[foodIndex][1] == headY) {
                return true
            }
        }
        return snakeLen.contains(headX to headY)
    }


    private fun nextLocation(dir: String): Pair<Int, Int> {
        return when (dir) {
            "U" -> -1 to 0
            "R" -> 0 to 1
            "D" -> 1 to 0
            else -> 0 to -1
        }
    }

    private fun isHeadTouchingBorders(): Boolean {
        return headX !in 0 until R || headY !in 0 until C
    }
}
```

After 5 incorrect attempts