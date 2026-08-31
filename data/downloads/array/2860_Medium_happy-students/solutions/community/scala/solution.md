# [scala] - sort, zip, count

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/happy-students/solutions/4056013/](https://leetcode.com/problems/happy-students/solutions/4056013/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.


# Code
```
object Solution {
  def countWays(nums: List[Int]): Int = {
    val sorted = nums.sorted
    val zipped = sorted.zip((sorted :+ Int.MaxValue).zipWithIndex.tail)
    (if (nums.forall(_ > 0)) 1 else 0) + zipped.count { case (l, (r, i)) => l < i && i < r }
  }
}
```