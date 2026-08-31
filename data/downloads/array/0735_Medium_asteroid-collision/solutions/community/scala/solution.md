# Recursive pattern matching

**Author:** jazzdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/asteroid-collision/solutions/6046139/](https://leetcode.com/problems/asteroid-collision/solutions/6046139/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
import scala.annotation.tailrec
import scala.math.abs

object Solution {
  def asteroidCollision(asteroids: Array[Int]): Array[Int] = {
    @tailrec
    def checkState(asteroids: Array[Int], stack: List[Int] = List.empty[Int]): Array[Int] = {
      if asteroids.isEmpty then stack.reverse.toArray
      else {
        val current = asteroids.head
        val others = asteroids.tail
        stack match {
          case Nil => checkState(others, current +: stack)
          case h :: _ if h < 0 || current > 0 => checkState(others, current +: stack)
          case h :: _ if h > -current => checkState(others, stack)
          case h :: t if h < -current => checkState(asteroids, t)
          case _ :: t => checkState(others, t)
        }
      }
    }

    checkState(asteroids)
  }
}
```