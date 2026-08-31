# [scala] - scanLeft, scanRight

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/3232109/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/3232109/)

---

# Code
```
object Solution {
  def leftRigthDifference(nums: Array[Int]): Array[Int] = {
    val leftSum = nums.scanLeft(0)(_ + _)
    val rightSum = nums.scanRight(0)(_ + _)
    nums.indices.map(i => math.abs(leftSum(i) - rightSum(i + 1))).toArray
  }
}
```