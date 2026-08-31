# [scala] - reduce Set 1LoC

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4038542/](https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4038542/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```
object Solution {
  def numberOfPoints(nums: List[List[Int]]): Int =
    nums.collect { case List(start, end) => Set.from(start to end) }.reduce(_ ++ _).size
}
```