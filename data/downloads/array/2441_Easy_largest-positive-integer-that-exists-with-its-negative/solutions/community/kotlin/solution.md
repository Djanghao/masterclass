# use toSet()

**Author:** LinhNA3
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5106001/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5106001/)

---


# Code
```
class Solution {
    fun findMaxK(nums: IntArray): Int {
    val numsSet = nums.toSet()
    var result = -1
    for (num in nums) {
        if (-num in numsSet && num > result) {
            result = num
        }
    }
    return result
    }
}
```