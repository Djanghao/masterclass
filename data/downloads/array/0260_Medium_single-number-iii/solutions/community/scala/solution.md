# Scala FP XOR beats 100%

**Author:** squadgazzz
**Votes:** 1
**Link:** [https://leetcode.com/problems/single-number-iii/solutions/941650/](https://leetcode.com/problems/single-number-iii/solutions/941650/)

---

```
  def singleNumber(nums: Array[Int]): Array[Int] = {
    val x      = nums.foldLeft(0)(_ ^ _)
    val lowBit = x & (-x)
    val (left, right) = nums.foldLeft(0 -> 0) {
      case ((num1, num2), num) =>
        if ((num & lowBit) == 0) {
          (num1 ^ num) -> num2
        } else {
          num1 -> (num2 ^ num)
        }
    }
    Array(left, right)
  }
  ```