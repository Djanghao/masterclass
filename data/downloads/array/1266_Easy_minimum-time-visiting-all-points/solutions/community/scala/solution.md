# [scala] fp + math

**Author:** leetcode08
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4358408/](https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4358408/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```scala
object Solution {
  def minTimeToVisitAllPoints(points: Array[Array[Int]]): Int =
    points.sliding(2).foldLeft(0) {
      case (time, Array(Array(x1, y1), Array(x2, y2))) =>
        time + (math.abs(x2 - x1) max math.abs(y2 - y1))
    }
}
```