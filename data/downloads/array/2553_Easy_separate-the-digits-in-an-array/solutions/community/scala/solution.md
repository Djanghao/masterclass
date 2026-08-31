# [scala] - 1LoC

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3145822/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3145822/)

---

# Code
```
object Solution {
  def separateDigits(nums: Array[Int]): Array[Int] =
    nums.flatMap(_.toString).map(_.asDigit)
}
```