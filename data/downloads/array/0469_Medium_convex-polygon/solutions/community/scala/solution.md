# Gift wrapping algorithm O(n)

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/convex-polygon/solutions/4570080/](https://leetcode.com/problems/convex-polygon/solutions/4570080/)

---

# Intuition
The basic intuition here is to remember there's a very well known optimal algorithm to compute the answer to this problem. It's called gift wrapping.
The additional bit there, is to pay attention to the rounding errors when dealing with floating point values.

# Approach
1. Close the loop in the polygon vertices: add the first 2 points to the bottom of the vertex stream 
2. Compute the orientation of the first triplet of points (by calculating the cross product of the deltas between the first 3 points)
3. Discard aligned points: aligned point triplets will have a cross product very close to zero, given the error threshold
4. Verify that all the subsequent point triplets have the same orientation: if the turn the other direction, then the polygon is concave

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
object Solution {
  def isConvex(points: List[List[Int]]): Boolean = {
    val error: Double = 10e-10
    var xProducts =
      (points.toStream :+ points.head :+ points(1)) // Closing the loop
      .map(l => l(0).toDouble -> l(1).toDouble)     // for easier handling: converting to a list of double pairs
      .sliding(2)
      .map(a => a(0) -> a(1))
      .map { case (p1, p2) => (p2._1 - p1._1, p2._2 - p1._2) }
      .sliding(2)
      .map(a => a(0) -> a(1))
      .map { case (d1, d2) => d1._1 * d2._2 - d1._2 * d2._1 }
      .filterNot(Math.abs(_) < error)               // discard essentially aligned points
    val sign = Math.signum(xProducts.next)
    xProducts.forall(Math.signum(_) == sign)
  }
}
```