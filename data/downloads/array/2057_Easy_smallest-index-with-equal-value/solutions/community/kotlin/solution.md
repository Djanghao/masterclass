# Kotlin

**Author:** GroundZeroCro
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/4157930/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/4157930/)

---

# Code
```
class Solution {
    fun smallestEqual(nums: IntArray): Int {

        var smallest = -1

        for(i in nums.indices) {
            if(i % 10 == nums[i]) {
                if(i < smallest || smallest == -1) {
                    smallest = i
                }
            }
        }

        return smallest
    }
}
```