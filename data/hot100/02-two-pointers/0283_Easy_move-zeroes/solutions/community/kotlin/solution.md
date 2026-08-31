# Kotlin short and easy to understand solution

**Author:** shbazhenov
**Votes:** 12
**Link:** [https://leetcode.com/problems/move-zeroes/solutions/2108395/](https://leetcode.com/problems/move-zeroes/solutions/2108395/)

---

```
class Solution {
    fun moveZeroes(nums: IntArray): Unit {
        var pointer = 0
        nums.forEach { if (it != 0) nums[pointer++] = it }
        while (pointer < nums.size) nums[pointer++] = 0
    }
}
```
Please upvote, if you like the solution)