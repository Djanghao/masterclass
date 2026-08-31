# scala twoliner: prefix sum

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/destroying-asteroids/solutions/5391609/](https://leetcode.com/problems/destroying-asteroids/solutions/5391609/)

---

```scala
object Solution {
  def asteroidsDestroyed(mass: Int, asteroids: Array[Int]): Boolean =
    val sorted = asteroids.toList.sorted
    ((mass +: sorted).scanLeft(0L)(_ + _).drop(1) zip sorted)
      .forall{case (a,b) => a >= b}
}
```