# Scala FP: O(max_n) without sorting

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5314171/](https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5314171/)

---

# Code
```
object Solution {
  def minIncrementForUnique(nums: Array[Int]): Int = {
    val counts = nums.groupMapReduce(identity)(_ => 1)(_ + _).withDefaultValue(0)
    val (moves, lastOver) = (counts.keys.min to counts.keys.max).foldLeft((0, 0)) {
        case ((moves, carryOver), countIndex) =>
          val over = 0.max(counts(countIndex) + carryOver - 1)
          (moves + over, over)
      }
    moves + lastOver * (lastOver - 1) / 2
  }
}
```