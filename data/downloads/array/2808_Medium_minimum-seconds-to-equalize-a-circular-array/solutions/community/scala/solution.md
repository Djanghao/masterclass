# [scala] - min of the max gap between the same numbers

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3893993/](https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3893993/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```
object Solution {
  
  import scala.collection.immutable.Queue

  def minimumSeconds(nums: List[Int]): Int = {
    val size = nums.size
    val positions = nums.zipWithIndex.foldLeft(Map.empty[Int, Queue[Int]]) { case (pos, (num, ind)) =>
      pos.updated(num, pos.getOrElse(num, Queue.empty) :+ ind)
    }
    val gaps = positions.map { case (_, pos) => (pos :+ pos(0) + size).sliding(2).map(s => s(1) - s(0)).max }
    gaps.min / 2
  }
}
```