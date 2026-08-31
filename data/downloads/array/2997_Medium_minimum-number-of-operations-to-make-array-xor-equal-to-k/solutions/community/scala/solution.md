# Scala FP: 1 expression with foldLeft

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5086795/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5086795/)

---

# Code
```
object Solution {
  def minOperations(nums: Array[Int], k: Int): Int = 
    Integer.bitCount(nums.foldLeft(k)(_ ^ _))
}
```