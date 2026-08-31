# scala oneliner

**Author:** vititov
**Votes:** 2
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3210258/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3210258/)

---

# Code
```
object Solution {
  def arraySign(nums: Array[Int]): Int = nums.map(_.sign).reduce(_ * _)
}
```