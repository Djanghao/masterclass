# 4 Line Simple Scala solution with explanation

**Author:** paulboooooom
**Votes:** 1
**Link:** [https://leetcode.com/problems/missing-number/solutions/270481/](https://leetcode.com/problems/missing-number/solutions/270481/)

---

Solution: since the length of given array is n but total possible integer for array elements is **n + 1 (including 0)**, the solution is calculating the expected sum of array if the elements are from 1 - n. And then calculating the actual sum of given array. The missing number will be the expected sum minus actual sum.

```
object Solution {
    def missingNumber(nums: Array[Int]): Int = {
        val n = nums.length
        val expect = ( 1 + n ) * n / 2
        val actual = nums.sum
        return expect - actual
    }
}
```