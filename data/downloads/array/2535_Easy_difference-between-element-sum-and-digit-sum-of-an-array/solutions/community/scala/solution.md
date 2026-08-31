# [scala] - 2 LoC

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3053957/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3053957/)

---

# Code
```
object Solution {
  def differenceOfSum(nums: Array[Int]): Int = {
    val digits = nums.flatMap(_.toString).map(_ - '0')
    math.abs(nums.sum - digits.sum)
  }
}
```