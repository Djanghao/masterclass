# [scala] - zip zip zip sumLong

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-empty/solutions/3484322/](https://leetcode.com/problems/make-array-empty/solutions/3484322/)

---

# Code
```
object Solution {
  def countOperationsToEmptyArray(nums: Array[Int]): Long = {
    val pos = nums.zipWithIndex.sorted.map(_._2)
    val rotations = pos.zipWithIndex.tail.zip(pos).map { case ((p, i), pp) => if (p < pp) nums.length - i else 0 }
    rotations.foldLeft(nums.length.toLong)(_ + _)
  }
}
```