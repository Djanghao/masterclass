# 100% runtime and memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-crossing/solutions/5247412/](https://leetcode.com/problems/path-crossing/solutions/5247412/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(n)
# Code
```
object Solution {
  def isPathCrossing(path: String): Boolean = {
    path.foldLeft((Coordinate(0, 0), Set[Coordinate](Coordinate(0, 0)), false)) {
      case ((curr, set, true), _) => (curr, set, true)
      case ((curr, set, _), next) => {
        val newCoordinate = evaluateDirection(next, curr)
        (newCoordinate, set.+(newCoordinate),set.contains(newCoordinate))
      }
    }._3
  }

  def evaluateDirection(ch: Char, current: Coordinate) = {
    ch match {
      case 'N' => Coordinate(current.x + 1, current.y)
      case 'S' => Coordinate(current.x - 1, current.y)
      case 'E' => Coordinate(current.x, current.y + 1)
      case 'W' => Coordinate(current.x, current.y - 1)
    }
  }

}

case class Coordinate(x: Int, y: Int)

```