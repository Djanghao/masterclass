# [scala] - sorted, sameElements

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/3820023/](https://leetcode.com/problems/check-if-array-is-good/solutions/3820023/)

---

# Code
```
object Solution {
  def isGood(nums: Array[Int]): Boolean =
    nums.sorted.sameElements((1 until nums.length) :+ nums.length - 1)
}
```