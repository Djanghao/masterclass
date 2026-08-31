# Scala O(n) 10 liner solution

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/line-reflection/solutions/4836896/](https://leetcode.com/problems/line-reflection/solutions/4836896/)

---

# Intuition
These 3 conditions will be necessary and sufficient:
1. If a reflection axis exists, then its abscissa needs to be the average of the point abscissas.
2. The count of points at the left and right of the reflection axis should be the same.
3. If we group the points by y, their count should be even.

Apparently there are duplicated points in input, so they need to be eliminated beforehand.
Also, the points on the axis don't matter: better to take them out.

# Approach
1. Remove duplicate points
2. Compute the average x across all the (remaining) points
3. Retain only the points that don't sit on the reflection axis
4. Group the points by y
5. Count the points at the left and at the right of the reflection axis
6. Verify that the grouped points are even and that the left / right groups have the same size

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
object Solution {
  private val error = 1e-10
  def isReflected(_points: Array[Array[Int]]): Boolean = {
    val points = _points.map(a => a(0) -> a(1)).distinct
    val n = points.length
    val xAvg = points.map(_._1).sum.toDouble / n
    val pointsOutside = points.filterNot { case (x, y) => (xAvg - x).abs < error }
    val yMap = pointsOutside.groupMapReduce(_._2)(_ => 1)(_ + _)
    val (left, right) = pointsOutside.partition(_._1 < xAvg)
    yMap.forall(t => (t._2 & 1) == 0) && left.size == right.size
  }
}
```