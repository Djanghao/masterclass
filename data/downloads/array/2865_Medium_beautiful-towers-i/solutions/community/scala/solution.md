# [scala] - recursion and foldLeft

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-towers-i/solutions/4083508/](https://leetcode.com/problems/beautiful-towers-i/solutions/4083508/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Intuition
For each maxHeight, sum decreasing to the left, sum decreasing to the right, find max.

# Code
```
object Solution {
  def maximumSumOfHeights(maxHeights: List[Int]): Long =
    goMaxSum(Nil, maxHeights, 0)

  def goMaxSum(left: List[Int], right: List[Int], max: Long): Long =
    right match {
      case Nil => max
      case height :: tail =>
        val sums = sumDecreasing(height, left) + sumDecreasing(height, tail) + height
        goMaxSum(height :: left, tail, math.max(max, sums))
    }

  def sumDecreasing(init: Int, heights: List[Int]): Long =
    heights.foldLeft((0L, init)) { case ((sum, prev), height) =>
      val min = math.min(prev, height)
      (sum + min, min)
    }._1
}
```