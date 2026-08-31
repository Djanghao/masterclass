# [scala] - zipWithIndex, sum

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/3773190/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/3773190/)

---

# Code
```
object Solution {
  def sumOfSquares(nums: Array[Int]): Int =
    nums.zipWithIndex.map { case (num, i) => if (nums.length % (i + 1) == 0) num * num else 0 }.sum
}
```